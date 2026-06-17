# StatAnalyse Pro — Netlify Functions

## Structure
```
netlify/functions/
├── useAICredit.js      → Déduction crédits IA (serveur)
├── confirmPayment.js   → Validation paiement + changement plan
└── package.json
netlify.toml            → Config Netlify
statanalyse_v3-3.html  → App principale (firebaseConfig mis à jour)
.env.example            → Variables d'environnement à configurer
```

## Déploiement

### 1. GitHub
```bash
git init
git add .
git commit -m "StatAnalyse Pro v3.3 - Netlify Functions"
git remote add origin https://github.com/TON_COMPTE/statanalyse-pro.git
git push -u origin main
```

### 2. Netlify — Variables d'environnement
Dashboard Netlify → Site → Site configuration → Environment variables → Add variable :

| Clé | Valeur |
|-----|--------|
| `FIREBASE_SERVICE_ACCOUNT` | Contenu complet du JSON service account (sur une ligne) |
| `NOTCHPAY_PUBLIC_KEY` | Ta clé publique NotchPay (si utilisé) |
| `MONETBIL_SERVICE_KEY` | Ta clé Monetbil (si utilisé) |

⚠️ Pour `FIREBASE_SERVICE_ACCOUNT` : copie tout le contenu du fichier JSON et colle-le comme valeur. Netlify le stocke chiffré.

### 3. Netlify — Connecter GitHub
Dashboard Netlify → Add new site → Import from GitHub → sélectionne le repo → Deploy.

## URLs des fonctions
```
https://tonsite.netlify.app/.netlify/functions/useAICredit
https://tonsite.netlify.app/.netlify/functions/confirmPayment
```

## Appel confirmPayment depuis le HTML
```javascript
const idToken = await auth.currentUser.getIdToken();
const res = await fetch('/.netlify/functions/confirmPayment', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${idToken}` },
  body: JSON.stringify({ txRef: 'TX123', plan: 'memoire', provider: 'notchpay' }),
});
const data = await res.json();
// data = { ok: true, plan: 'memoire', credits: 25, expiry: '...' }
```
