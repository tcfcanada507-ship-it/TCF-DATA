const admin = require('firebase-admin');

if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}

const db = admin.firestore();

// Crédits accordés par plan
const PLAN_CONFIG = {
  express:    { credits: 10,  dureeJours: 30  },
  memoire:    { credits: 25,  dureeJours: 90  },
  recherche:  { credits: 60,  dureeJours: 180 },
};

// Bonus parrain/filleul par plan
const REFERRAL_BONUS = {
  express:   { parrain: 500,  filleul: 1 },
  memoire:   { parrain: 1200, filleul: 2 },
  recherche: { parrain: 2000, filleul: 3 },
};

async function verifyNotchPay(txRef) {
  const apiKey = process.env.NOTCHPAY_PUBLIC_KEY;
  const res = await fetch(`https://api.notchpay.co/payments/${txRef}`, {
    headers: { Authorization: apiKey },
  });
  if (!res.ok) throw new Error('NotchPay API error');
  const data = await res.json();
  // NotchPay: transaction.status === 'complete'
  return data?.transaction?.status === 'complete';
}

async function verifyMonetbil(txRef) {
  const serviceKey = process.env.MONETBIL_SERVICE_KEY;
  const res = await fetch(`https://api.monetbil.com/payment/v1/checkPayment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ serviceKey, paymentRef: txRef }),
  });
  const data = await res.json();
  // Monetbil: status === 1
  return data?.status === 1;
}

async function triggerReferralBonus(uid, plan) {
  const bonus = REFERRAL_BONUS[plan];
  if (!bonus) return;

  const userRef = db.collection('users').doc(uid);
  const userSnap = await userRef.get();
  if (!userSnap.exists) return;

  const data = userSnap.data();
  if (!data.referredBy || data.referralBonusGiven) return; // déjà accordé

  // Créditer le filleul
  await userRef.update({
    credits: admin.firestore.FieldValue.increment(bonus.filleul),
    referralBonusGiven: true,
  });

  // Créditer le parrain
  if (data.referredByUid) {
    await db.collection('users').doc(data.referredByUid).update({
      referralEarnings: admin.firestore.FieldValue.increment(bonus.parrain),
      referralCount:    admin.firestore.FieldValue.increment(1),
      credits:          admin.firestore.FieldValue.increment(Math.floor(bonus.parrain / 1000)),
    });
  }
}

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers, body: '' };
  if (event.httpMethod !== 'POST') return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };

  try {
    // 1. Vérifier token Firebase Auth
    const authHeader = event.headers.authorization || '';
    if (!authHeader.startsWith('Bearer ')) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: 'Token manquant' }) };
    }
    const idToken = authHeader.split('Bearer ')[1];
    const decoded = await admin.auth().verifyIdToken(idToken);
    const uid = decoded.uid;

    // 2. Lire les paramètres
    const { txRef, plan, provider } = JSON.parse(event.body || '{}');
    if (!txRef || !plan || !provider) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Paramètres manquants' }) };
    }
    if (!PLAN_CONFIG[plan]) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Plan inconnu' }) };
    }

    // 3. Vérifier que cette transaction n'a pas déjà été traitée (anti-replay)
    const txDoc = await db.collection('transactions').doc(txRef).get();
    if (txDoc.exists) {
      return { statusCode: 200, headers, body: JSON.stringify({ ok: true, alreadyProcessed: true }) };
    }

    // 4. Vérifier le paiement auprès de l'agrégateur
    let paid = false;
    if (provider === 'notchpay') paid = await verifyNotchPay(txRef);
    else if (provider === 'monetbil') paid = await verifyMonetbil(txRef);
    else return { statusCode: 400, headers, body: JSON.stringify({ error: 'Provider inconnu' }) };

    if (!paid) {
      return { statusCode: 402, headers, body: JSON.stringify({ error: 'Paiement non confirmé' }) };
    }

    // 5. Mettre à jour le plan utilisateur
    const config = PLAN_CONFIG[plan];
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + config.dureeJours);

    await db.collection('users').doc(uid).update({
      plan,
      planExpiry:  expiry.toISOString(),
      credits:     admin.firestore.FieldValue.increment(config.credits),
      updatedAt:   new Date().toISOString(),
    });

    // 6. Marquer la transaction comme traitée
    await db.collection('transactions').doc(txRef).set({
      uid, plan, provider,
      processedAt: new Date().toISOString(),
    });

    // 7. Déclencher le bonus parrain
    await triggerReferralBonus(uid, plan);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true, plan, credits: config.credits, expiry: expiry.toISOString() }),
    };

  } catch (e) {
    console.error('confirmPayment error:', e);
    return { statusCode: 500, headers, body: JSON.stringify({ error: e.message }) };
  }
};
