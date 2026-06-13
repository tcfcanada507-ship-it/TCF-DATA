<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>StatAnalyse Pro v29 - Base de Données & Expert Edition</title>
<!-- Bibliothèques CDN stables -->
<script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.2.0/dist/chartjs-plugin-datalabels.min.js"></script>
<script>
// Register datalabels globally
Chart.register(ChartDataLabels);
</script>
<script src="https://cdn.jsdelivr.net/npm/docx@8.5.0/build/index.umd.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/simple-statistics@7.8.0/dist/simple-statistics.min.js"></script>

<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getFirestore, doc, getDoc, setDoc, updateDoc, arrayUnion, collection, query, where, getDocs, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
  
  const firebaseConfig = { apiKey: "AIzaSyCFusk0KoigpT1cZTTbNuIsq2A04Yi1hW8", authDomain: "lumishop-cm.firebaseapp.com", projectId: "lumishop-cm", storageBucket: "lumishop-cm.firebasestorage.app", messagingSenderId: "656076831994", appId: "1:656076831994:web:c6d52ae2c7da380ea01d43" };
  
  try { 
    const app = initializeApp(firebaseConfig); 
    const db = getFirestore(app); 
    const auth = getAuth(app);
    
    window.db = db;
    window.auth = auth;
    
    window.__apiKeys = {}; 
    const snap = await getDoc(doc(db, 'config', 'api_keys')); 
    if (snap.exists()) { 
      const data = snap.data(); 
      ['claude', 'groq', 'gemini', 'cerebras'].forEach(k => { if (data[k]) window.__apiKeys[k] = data[k]; }); 
    }
    
    // Auth désactivé — accès direct sans connexion
    // onAuthStateChanged supprimé
    loadHistory(); // Tenter le chargement (silencieux si non connecté)

  } catch(e) { console.error("Firebase Init Error:", e); }
</script>

<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
<style>
  :root { 
    --bg: #0f172a; 
    --surface: #1e293b; 
    --surface2: #334155; 
    --border: #334155; 
    --accent: #10b981; 
    --accent-glow: rgba(16, 185, 129, 0.15);
    --primary: #3b82f6; 
    --text: #f8fafc; 
    --muted: #94a3b8; 
    --card: #1e293b; 
    --error: #ef4444; 
    --warning: #f59e0b; 
    --nav-w: 260px;
    --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { background:var(--bg); color:var(--text); font-family:'DM Sans',sans-serif; min-height:100vh; overflow-x: hidden; }
  
  /* Layout */
  .app-container { display: flex; min-height: 100vh; }
  .sidebar { width: var(--nav-w); background: var(--surface); border-right: 1px solid var(--border); position: fixed; height: 100vh; z-index: 100; transition: 0.3s; transform: translateX(0); }
  .main-content { flex: 1; margin-left: var(--nav-w); padding: 24px; transition: 0.3s; width: calc(100% - var(--nav-w)); }
  
  @media(max-width: 1024px) {
    .sidebar { transform: translateX(-100%); }
    .sidebar.open { transform: translateX(0); box-shadow: 10px 0 30px rgba(0,0,0,0.5); }
    .main-content { margin-left: 0; width: 100%; }
    #menuBtn { display: flex !important; }
  }
  @media(min-width: 1025px) {
    #menuBtn { display: none !important; }
  }

  header { background: var(--surface); border-bottom: 1px solid var(--border); padding: 0 24px; display: flex; align-items: center; justify-content: space-between; height: 64px; position: sticky; top:0; z-index:90; box-shadow: var(--shadow); }
  .logo { font-family:'Syne',sans-serif; font-weight:800; font-size:1.4rem; letter-spacing: -0.5px; }
  .logo span { color:var(--accent); }
  
  /* Navigation */
  .nav-menu { padding: 20px 12px; display: flex; flex-direction: column; gap: 4px; }
  .nav-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 8px; cursor: pointer; color: var(--muted); font-weight: 500; transition: 0.2s; font-size: 0.9rem; }
  .nav-item:hover { background: var(--surface2); color: var(--text); }
  .nav-item.active { background: var(--accent-glow); color: var(--accent); }
  
  .tabs { display: none; } /* On cache les anciens onglets */
  
  .tab-content { display:none; animation: fadeIn 0.4s ease; max-width: 1200px; margin: 0 auto; }
  .tab-content.active { display:block; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

  /* Dashboard Hub */
  .hub-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 24px; }
  .hub-card { 
    background: var(--card); 
    border: 1px solid var(--border); 
    border-radius: 16px; 
    padding: 24px; 
    cursor: pointer; 
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); 
    position: relative; 
    overflow: hidden; 
    display: flex; 
    flex-direction: column; 
    gap: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  .hub-card:hover { 
    transform: translateY(-8px) scale(1.02); 
    border-color: var(--accent); 
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1); 
  }
  .hub-card::after {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(135deg, transparent 0%, rgba(16, 185, 129, 0.05) 100%);
    opacity: 0;
    transition: 0.3s;
  }
  .hub-card:hover::after { opacity: 1; }
  .hub-card .icon { font-size: 2rem; margin-bottom: 8px; }
  .hub-card h3 { font-family: 'Syne', sans-serif; font-size: 1.1rem; color: var(--text); }
  .hub-card p { font-size: 0.85rem; color: var(--muted); line-height: 1.5; }
  .hub-card .badge { position: absolute; top: 16px; right: 16px; background: var(--accent-glow); color: var(--accent); padding: 4px 8px; border-radius: 6px; font-size: 0.7rem; font-weight: 700; }

  /* Cards & Components */
  .card { 
    background: var(--card); 
    border: 1px solid var(--border); 
    border-radius: 16px; 
    padding: 24px; 
    margin-bottom: 24px; 
    box-shadow: var(--shadow); 
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card:hover {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
  .card-title { font-family:'Syne',sans-serif; font-weight:700; font-size:1.1rem; color:var(--text); margin-bottom:20px; display:flex; justify-content:space-between; align-items:center; border-bottom: 1px solid var(--border); padding-bottom: 12px; }
  .card-title span { color: var(--accent); }
  
  /* Recommandations Tooltips */
  .expert-tip { 
    background: rgba(59, 130, 246, 0.1); 
    border-left: 3px solid #3b82f6; 
    padding: 12px 16px; 
    margin: 10px 0 20px; 
    font-size: 0.85rem; 
    color: var(--text); 
    border-radius: 0 8px 8px 0;
    line-height: 1.4;
  }
  .expert-tip b { color: #3b82f6; }

  .btn { display:inline-flex; align-items:center; justify-content: center; gap:8px; padding:10px 20px; border-radius:8px; font-family:'Syne',sans-serif; font-weight:600; font-size:.85rem; cursor:pointer; border:none; transition:.2s; }
  .btn-primary { background:var(--accent); color:#000; }
  .btn-primary:hover { opacity: 0.9; transform: scale(1.02); }
  .btn-secondary { background:var(--surface2); color:var(--text); border:1px solid var(--border); }
  .btn-ai { background: linear-gradient(135deg, #6366f1, #a855f7); color: white; }
  .btn-back { margin-bottom: 20px; background: transparent; color: var(--muted); border: 1px solid var(--border); }
  .btn-back:hover { color: var(--text); border-color: var(--muted); }

  /* Tables */
  .table-container { overflow-x: auto; border-radius: 12px; border: 1px solid var(--border); margin-top: 12px; }
  table { width:100%; border-collapse:collapse; font-size:.9rem; }
  th { background:var(--surface2); padding:14px 16px; text-align:left; color:var(--text); font-weight:700; border-bottom: 1px solid var(--border); }
  td { padding:12px 16px; border-bottom:1px solid var(--border); color: var(--muted); }
  tr:hover td { background: rgba(255,255,255,0.02); color: var(--text); }

  /* Utils */
  .grid-2 { display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:20px; }
  .upload-zone { border:2px dashed var(--border); border-radius:16px; padding:60px 40px; text-align:center; cursor:pointer; background: rgba(16,185,129,0.02); transition:0.3s; }
  .upload-zone:hover { border-color:var(--accent); background: var(--accent-glow); }
  
  input, select, textarea { background:var(--surface2); border:1px solid var(--border); border-radius:8px; color:var(--text); padding:12px; width:100%; outline:none; transition: 0.2s; }
  input:focus { border-color: var(--accent); }

  .word-mode { --bg: #f8fafc; --surface: #ffffff; --surface2: #f1f5f9; --border: #e2e8f0; --text: #0f172a; --muted: #64748b; --card: #ffffff; --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1); }
  .word-mode .nav-item.active { background: #f1f5f9; }


  /* Type color badges */
  .type-badge { display:inline-block; padding:2px 7px; border-radius:4px; font-size:.68rem; font-weight:700; letter-spacing:.04em; }
  .type-list   { background:rgba(0,212,170,.15); color:#00d4aa; border:1px solid rgba(0,212,170,.3); }
  .type-number { background:rgba(59,130,246,.15); color:#60a5fa; border:1px solid rgba(59,130,246,.3); }
  .type-text   { background:rgba(100,116,139,.15); color:#94a3b8; border:1px solid rgba(100,116,139,.3); }
  .type-date   { background:rgba(251,146,60,.15); color:#fb923c; border:1px solid rgba(251,146,60,.3); }

  /* Accordion pour modalités */
  .modal-accordion { margin-top:8px; }
  .modal-accordion-header { display:flex; align-items:center; gap:6px; cursor:pointer; font-size:.75rem; color:var(--accent); user-select:none; }
  .modal-accordion-header:hover { opacity:.8; }
  .modal-accordion-body { display:none; margin-top:6px; padding:8px; background:rgba(0,212,170,.04); border-radius:6px; border:1px solid rgba(0,212,170,.12); }
  .modal-accordion-body.open { display:block; }
  .modal-tag { display:inline-flex; align-items:center; gap:4px; background:var(--surface2); border:1px solid var(--border); border-radius:4px; padding:3px 7px; font-size:.75rem; margin:2px; }
  .modal-tag button { background:none; border:none; color:var(--muted); cursor:pointer; font-size:.8rem; padding:0; line-height:1; }
  .modal-tag button:hover { color:#ff6b6b; }
  .modal-add-row { display:flex; gap:6px; margin-top:6px; }
  .modal-add-row input { flex:1; font-size:.78rem; padding:4px 8px; }


  /* New Styles for Improvements */
  .export-dropdown { position: relative; display: inline-block; }
  .export-dropdown-content {
    display: none; position: absolute; right: 0; background-color: var(--surface);
    min-width: 200px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 101;
    border: 1px solid var(--border); border-radius: 8px; overflow: hidden;
  }
  .export-dropdown:hover .export-dropdown-content { display: block; }
  .export-dropdown-content button {
    width: 100%; text-align: left; padding: 12px 16px; border: none;
    background: none; color: var(--text); cursor: pointer; transition: 0.2s;
    font-size: 0.85rem;
  }
  .export-dropdown-content button:hover { background: var(--surface2); }
  
  .auth-overlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(4,8,15,0.97); z-index: 2000; display: flex;
    align-items: center; justify-content: center; backdrop-filter: blur(12px);
  }
  .auth-card {
    background: #0d1828;
    border: 1px solid rgba(0,212,170,.15);
    padding: 36px 32px;
    border-radius: 16px;
    width: calc(100% - 32px);
    max-width: 400px;
    box-shadow: 0 32px 64px rgba(0,0,0,.6), 0 0 0 1px rgba(0,212,170,.05);
    position: relative;
    overflow: hidden;
  }
  .auth-card::before {
    content:''; position:absolute; top:-60px; right:-60px;
    width:200px; height:200px; border-radius:50%;
    background: radial-gradient(circle, rgba(0,212,170,.06) 0%, transparent 70%);
    pointer-events:none;
  }
  .auth-logo {
    font-family:'Syne',sans-serif; font-weight:900; font-size:1.4rem;
    text-align:center; margin-bottom:6px;
  }
  .auth-logo span { color: #00d4aa; }
  .auth-eyebrow {
    text-align:center; font-size:.65rem; letter-spacing:3px;
    text-transform:uppercase; color:#4a6380; margin-bottom:28px;
  }
  .auth-title {
    font-family:'Syne',sans-serif; font-weight:800; font-size:1.1rem;
    text-align:center; margin-bottom:24px; color:#e2e8f0;
  }
  .auth-field { margin-bottom:16px; }
  .auth-field label {
    display:block; font-size:.72rem; font-weight:700;
    color:#00d4aa; letter-spacing:.5px; margin-bottom:6px;
    text-transform:uppercase;
  }
  .auth-field input {
    background: #111d30; border: 1px solid rgba(255,255,255,.08);
    border-radius: 8px; color: #e2e8f0; padding: 13px 14px;
    width: 100%; font-size: .9rem; outline: none;
    transition: border-color .2s;
    font-family: 'Space Grotesk', sans-serif;
  }
  .auth-field input:focus { border-color: rgba(0,212,170,.5); }
  .auth-field input::placeholder { color: #2d4060; }
  .auth-submit {
    width:100%; padding:14px; margin-top:8px;
    background: linear-gradient(135deg, #00d4aa, rgba(0,212,170,.8));
    color:#000; font-weight:800; font-size:.95rem;
    font-family:'Syne',sans-serif;
    border:none; border-radius:8px; cursor:pointer;
    box-shadow: 0 8px 24px rgba(0,212,170,.2);
    transition: all .2s;
  }
  .auth-submit:hover { box-shadow: 0 12px 32px rgba(0,212,170,.3); }
  .auth-submit:active { transform: scale(.98); }
  .auth-submit:disabled { opacity:.5; cursor:not-allowed; }
  .auth-toggle {
    display:block; text-align:center; margin-top:20px;
    color:#00d4aa; font-size:.82rem; text-decoration:none;
    border-top: 1px solid rgba(255,255,255,.05); padding-top:16px;
  }
  .auth-error {
    background: rgba(244,63,94,.1); border-left: 3px solid #f43f5e;
    border-radius: 6px; padding: 10px 12px;
    color: #fb7185; font-size:.8rem; margin-top:14px; display:none;
  }
  
  .btn-var-interpret {
    padding: 4px 8px; font-size: 0.7rem; background: var(--accent-glow);
    color: var(--accent); border: 1px solid var(--accent); border-radius: 6px;
    cursor: pointer; transition: 0.2s; margin-left: 10px; display: inline-flex; align-items: center; gap: 4px;
  }
  .btn-var-interpret:hover { background: var(--accent); color: #000; }
  
  .history-item {
    padding: 12px; border-bottom: 1px solid var(--border); font-size: 0.85rem;
    display: flex; justify-content: space-between; align-items: center;
  }
  .history-item:hover { background: rgba(255,255,255,0.02); }

  /* Sélecteur automatique VD */
  .ai-choix-bloc {
    display: none;
    margin-top: 16px;
    padding: 16px 18px;
    background: linear-gradient(135deg, rgba(99,102,241,0.08), rgba(168,85,247,0.06));
    border: 1px solid rgba(99,102,241,0.3);
    border-left: 4px solid #6366f1;
    border-radius: 10px;
    animation: fadeIn 0.4s ease;
  }
  .ai-choix-bloc .choix-header {
    display: flex; align-items: center; gap: 10px; margin-bottom: 10px;
  }
  .ai-choix-bloc .choix-header .choix-icon { font-size: 1.4rem; }
  .ai-choix-bloc .choix-header h4 {
    font-family: 'Syne', sans-serif; font-size: 0.95rem; color: #a78bfa; margin: 0;
  }
  .ai-choix-bloc .vd-badge {
    display: inline-block; background: rgba(16,185,129,0.15); color: #10b981;
    border: 1px solid rgba(16,185,129,0.3); border-radius: 6px;
    padding: 4px 12px; font-size: 0.85rem; font-weight: 700;
    margin: 6px 0 10px; letter-spacing: 0.3px;
  }
  .ai-choix-bloc .choix-justif {
    font-size: 0.875rem; color: var(--text); line-height: 1.6;
    margin-bottom: 10px;
  }
  .ai-choix-bloc .vi-liste {
    display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px;
  }
  .ai-choix-bloc .vi-tag {
    background: rgba(59,130,246,0.12); color: #60a5fa;
    border: 1px solid rgba(59,130,246,0.25); border-radius: 5px;
    padding: 3px 10px; font-size: 0.78rem; font-weight: 500;
  }
  .btn-ai-choix {
    background: linear-gradient(135deg, #6366f1, #a855f7);
    color: white; border: none; border-radius: 8px;
    padding: 9px 16px; font-family: 'Syne', sans-serif;
    font-size: 0.85rem; font-weight: 700; cursor: pointer;
    display: inline-flex; align-items: center; gap: 7px;
    transition: 0.2s; white-space: nowrap;
  }
  .btn-ai-choix:hover { opacity: 0.88; transform: scale(1.02); }
  .btn-ai-choix:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

</style>
</head>
<body>


<!-- Auth désactivé temporairement -->



<div class="app-container">
  <aside class="sidebar" id="sidebar">
    <div style="padding: 24px; border-bottom: 1px solid var(--border);">
      <div class="logo">Stat<span>Analyse</span> Pro</div>
      <p style="font-size: 0.7rem; color: var(--muted); margin-top: 4px;">Expert Academic Edition v29</p>
    </div>
    <nav class="nav-menu">
      <div class="nav-item active" onclick="showTab('hub', this);toggleSidebar(false)">🏠 Dashboard Principal</div>
      
      <div style="margin: 15px 16px 5px; font-size: 0.65rem; color: var(--accent); text-transform: uppercase; letter-spacing: 1.5px; font-weight: 800;">I. Pôle Données</div>
      <div class="nav-item" onclick="showTab('data', this);toggleSidebar(false)">📂 Importation & Collecte</div>
      <div class="nav-item" onclick="showTab('dbbuilder', this);toggleSidebar(false)">🗄️ Base de Données</div>
      <div class="nav-item" onclick="showTab('reponses', this);loadDashboard();toggleSidebar(false)">📡 Réponses en Direct</div>
      
      <div style="margin: 15px 16px 5px; font-size: 0.65rem; color: var(--accent); text-transform: uppercase; letter-spacing: 1.5px; font-weight: 800;">II. Analyse Statistique</div>
      <div class="nav-item" onclick="showTab('desc', this);toggleSidebar(false)">📊 Analyse Descriptive</div>
      <div class="nav-item" onclick="showTab('cross', this);toggleSidebar(false)">🔀 Analyses Croisées</div>
      <div class="nav-item" onclick="showTab('regression', this);toggleSidebar(false)">📈 Modèles de Régression</div>
      <div class="nav-item" onclick="showTab('discussion', this);toggleSidebar(false)">💬 Discussion & Synthèse</div>
      <div class="nav-item" onclick="showTab('conclusion', this);toggleSidebar(false)">🏁 Conclusion Finale</div>
      
      <div style="margin: 15px 16px 5px; font-size: 0.65rem; color: var(--accent); text-transform: uppercase; letter-spacing: 1.5px; font-weight: 800;">III. Export & Soutenance</div>
      <div class="nav-item" onclick="showTab('excel', this);toggleSidebar(false)">📊 Rapport Excel Expert</div>
      <div class="nav-item" onclick="showTab('ppt', this);toggleSidebar(false)">🎓 Support PowerPoint</div>
      <div class="nav-item" onclick="showTab('history', this);loadHistory();toggleSidebar(false)">📜 Historique des Analyses</div>
      <div class="nav-item" onclick="showTab('settings', this);toggleSidebar(false)">⚙️ Paramètres Avancés</div>
    </nav>
  </aside>

  <main class="main-content">
    <header>
      <div style="display: flex; align-items: center; gap: 15px;">
        <button class="btn btn-secondary btn-sm" onclick="toggleSidebar()" style="padding: 8px;" id="menuBtn">☰</button>
        <h2 id="pageTitle" style="font-family: 'Syne', sans-serif; font-size: 1.1rem;">Tableau de Bord</h2>
      </div>
      <div class="export-group" style="display:flex; gap:10px; align-items:center;">
        <div class="export-dropdown">
          <button class="btn btn-secondary btn-sm">📥 Rapports Expert ▾</button>
          <div class="export-dropdown-content">
            <button onclick="exportCompleteWord()">📄 Export Word (.docx)</button>
            <button onclick="exportCompleteExcel()">📊 Export Excel (.xlsx)</button>
            <button onclick="exportCompletePDF()">📑 Export PDF (.pdf)</button>
          </div>
        </div>
        <button class="btn btn-sm" style="background:linear-gradient(135deg,#6366f1,#a855f7);color:#fff;" onclick="openApiKeyModal()">🔑 AI</button>
        <button class="btn btn-secondary btn-sm" onclick="logout()" title="Déconnexion">🚪</button>
      </div>
    </header>

    <div id="tab-hub" class="tab-content active">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-bottom: 32px; align-items: start;">
        <div>
          <h1 style="font-family: 'Syne', sans-serif; font-size: 2.2rem; margin-bottom: 8px;">Bienvenue, Expert</h1>
          <p style="color: var(--muted);">Plateforme d'ingénierie statistique et rédaction académique.</p>
        </div>
        <div class="card" style="margin-bottom: 0; padding: 16px;">
          <div style="font-size: 0.75rem; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; font-weight: 700;">Personnaliser l'interface</div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <input type="color" id="ui_theme_color" value="#10b981" onchange="updateUITheme(this.value)" style="width: 40px; height: 40px; padding: 0; border: none; border-radius: 8px; cursor: pointer;">
            <div style="font-size: 0.85rem; font-weight: 500;">Couleur d'accent</div>
          </div>
        </div>
      </div>

      <div class="card" style="background: linear-gradient(135deg, var(--surface), var(--bg)); border: 1px solid var(--accent-glow);">
        <div class="card-title" style="border-bottom-color: var(--accent-glow);">🎓 Identité & Cadrage du Projet <span>Recommandé</span></div>
        <div class="grid-2">
          <div>
            <label style="font-size: 0.75rem; color: var(--muted);">Thème de l'étude (Titre complet)</label>
            <input type="text" id="main_study_theme" placeholder="Ex: Impact de l'IA sur l'éducation en Afrique centrale" onchange="syncStudyInfo()" style="margin-top: 5px;">
          </div>
          <div>
            <label style="font-size: 0.75rem; color: var(--muted);">Objectif principal</label>
            <input type="text" id="main_study_objective" placeholder="Ex: Analyser les corrélations entre usage et performance" onchange="syncStudyInfo()" style="margin-top: 5px;">
          </div>
          <div>
            <label style="font-size: 0.75rem; color: var(--muted);">Auteur / Étudiant</label>
            <input type="text" id="main_study_author" placeholder="Votre nom complet" onchange="syncStudyInfo()" style="margin-top: 5px;">
          </div>
          <div>
            <label style="font-size: 0.75rem; color: var(--muted);">Institution / Université</label>
            <input type="text" id="main_study_inst" placeholder="Nom de votre établissement" onchange="syncStudyInfo()" style="margin-top: 5px;">
          </div>
        </div>
        <p style="font-size: 0.75rem; color: var(--muted); margin-top: 15px; font-style: italic;">💡 Ces informations sont utilisées pour personnaliser automatiquement vos rapports IA, Excel, Word et PowerPoint.</p>
      </div>

      <div style="margin-top: 32px;">
        <h2 style="font-family: 'Syne', sans-serif; font-size: 1.2rem; color: var(--accent); margin-bottom: 16px;">I. PÔLE DONNÉES & COLLECTE</h2>
        <div class="hub-grid">
          <div class="hub-card" onclick="showTab('data');toggleSidebar(false)">
            <div class="icon">📂</div>
            <h3>Importation & Collecte</h3>
            <p>Importez vos fichiers Excel/CSV ou configurez votre collecte en ligne.</p>
          </div>
          <div class="hub-card" onclick="showTab('dbbuilder');toggleSidebar(false)">
            <div class="icon">🗄️</div>
            <h3>Base de Données</h3>
            <p>Structurez vos variables et gérez vos observations manuellement.</p>
          </div>
          <div class="hub-card" onclick="showTab('reponses');loadDashboard();toggleSidebar(false)">
            <div class="icon">📡</div>
            <h3>Réponses en Direct</h3>
            <p>Suivez les résultats de votre questionnaire en temps réel.</p>
          </div>
        </div>
      </div>

      <div style="margin-top: 40px;">
        <h2 style="font-family: 'Syne', sans-serif; font-size: 1.2rem; color: var(--accent); margin-bottom: 16px;">II. ANALYSE STATISTIQUE ACADÉMIQUE</h2>
        <div class="hub-grid">
          <div class="hub-card" onclick="showTab('desc');toggleSidebar(false)">
            <div class="icon">📊</div>
            <h3>Analyse Descriptive</h3>
            <p>Tableaux de fréquences et graphiques professionnels automatisés.</p>
          </div>
          <div class="hub-card" onclick="showTab('cross');toggleSidebar(false)">
            <div class="icon">🔀</div>
            <h3>Analyses Croisées</h3>
            <p>Tests d'associations (Chi-deux) et significativité (p-value).</p>
          </div>
          <div class="hub-card" onclick="showTab('regression');toggleSidebar(false)">
            <div class="icon">📈</div>
            <h3>Modèles de Régression</h3>
            <p>Analyse des facteurs explicatifs et prédictions avancées.</p>
          </div>
          <div class="hub-card" onclick="showTab('discussion');toggleSidebar(false)">
            <div class="icon">💬</div>
            <h3>Discussion & Conclusion</h3>
            <p>Interprétation académique et synthèse finale des résultats.</p>
          </div>
        </div>
      </div>

      <div style="margin-top: 40px;">
        <h2 style="font-family: 'Syne', sans-serif; font-size: 1.2rem; color: var(--accent); margin-bottom: 16px;">III. EXPORT & LIVRABLES</h2>
        <div class="hub-grid">
          <div class="hub-card" onclick="showTab('excel');toggleSidebar(false)">
            <div class="icon">📊</div>
            <h3>Rapport Excel Expert</h3>
            <p>Export complet des données, tris à plat et bivariés en format tableur.</p>
          </div>
          <div class="hub-card" onclick="exportCompleteWord()">
            <div class="icon">📄</div>
            <h3>Rapport Word Académique</h3>
            <p>Générez un document Word structuré prêt pour la mise en page finale.</p>
          </div>
          <div class="hub-card" onclick="showTab('ppt');toggleSidebar(false)">
            <div class="icon">🎓</div>
            <h3>Support PowerPoint</h3>
            <p>Générez votre soutenance complète (12+ slides) avec graphiques.</p>
          </div>
        </div>
      </div>
    </div>

    <div id="tab-data" class="tab-content">
      <button class="btn btn-back" onclick="showTab('hub');toggleSidebar(false)">← Retour au Dashboard</button>
  <div class="card">
    <div class="upload-zone" onclick="document.getElementById('fileInput').click()">📁 Cliquez pour importer vos données (Excel/CSV)</div>
    <input type="file" id="fileInput" accept=".xlsx,.xls,.csv" style="display:none" onchange="handleFile(event)">
  </div>
  <div id="previewArea" class="card" style="display:none">
    <div class="card-title">Configuration des colonnes</div>
    <div id="dataQuality"></div>
    <div id="colSettings" class="mb" style="margin-bottom:15px"></div>
    <div style="overflow-x:auto"><table id="previewTable"></table></div>
  </div>
</div>

<!-- ═══════════════════════════════════════ ONGLET BASE DE DONNÉES v27 ═══ -->
<div id="tab-dbbuilder" class="tab-content">
  <button class="btn btn-back" onclick="showTab('hub');toggleSidebar(false)">← Retour au Dashboard</button>

  <!-- SECTION 1 : Constructeur de variables -->
  <div class="card">
    <div class="card-title">🗄️ Constructeur de Variables
      <div style="display:flex;gap:6px">
        <button class="btn btn-ai btn-sm" onclick="openAiVarModal()">🤖 Générer via IA</button>
        <button class="btn btn-primary btn-sm" onclick="addDbVariable()">+ Variable</button>
      </div>
    </div>
    <p style="font-size:0.82rem;color:var(--muted);margin-bottom:12px">Créez votre base de données depuis zéro. Définissez les variables, leurs types et modalités.</p>

    <div id="dbVarList" style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
      <!-- Variables ajoutées dynamiquement -->
    </div>
    <div id="dbVarEmpty" style="text-align:center;padding:24px;color:var(--muted);font-size:0.85rem;border:2px dashed var(--border);border-radius:8px">
      Aucune variable. Cliquez sur <b>+ Variable</b> ou utilisez <b>🤖 Générer via IA</b>.
    </div>
  </div>

  <!-- SECTION 2 : Saisie manuelle -->
  <div class="card" id="dbSaisieCard" style="display:none">
    <div class="card-title">📝 Saisie des Observations
      <div style="display:flex;gap:6px;align-items:center">
        <span id="dbRowCount" style="font-size:0.78rem;color:var(--muted);font-family:'DM Sans',sans-serif;font-weight:400">0 ligne(s)</span>
        <button class="btn btn-secondary btn-sm" onclick="clearDbRows()">🗑️ Vider</button>
      </div>
    </div>
    <p style="font-size:0.82rem;color:var(--muted);margin-bottom:12px">Remplissez les données ligne par ligne. Chaque ligne = une observation (un répondant).</p>

    <div id="dbFormZone" style="margin-bottom:12px">
      <!-- Formulaire généré dynamiquement -->
    </div>

    <button class="btn btn-primary" style="width:100%;margin-bottom:10px" onclick="addDbRow()">➕ Ajouter cette ligne</button>

    <!-- Tableau des données saisies -->
    <div id="dbTableZone" style="overflow-x:auto;display:none">
      <table id="dbDataTable"></table>
    </div>
  </div>

  <!-- SECTION 3 : Recodage rapide -->
  <div class="card" id="dbRecodeCard" style="display:none">
    <div class="card-title">🔄 Recodage des Variables</div>
    <p style="font-size:0.82rem;color:var(--muted);margin-bottom:10px">Recodez ou regroupez les modalités d'une variable de votre base construite.</p>
    <button class="btn btn-primary" onclick="openDbRecodeModal()">🔄 Recoder une variable</button>
  </div>

  <!-- SECTION 4 : Export & Injection -->
  <div class="card" id="dbExportCard" style="display:none">
    <div class="card-title">📤 Export & Utilisation</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button class="btn btn-primary" onclick="exportDbExcel()">📊 Export Excel</button>
      <button class="btn btn-secondary" onclick="injectDbIntoAnalysis()">🔬 Utiliser pour l'analyse</button>
    </div>
    <div id="dbExportStatus" style="margin-top:8px;font-size:0.82rem;color:var(--muted)"></div>
  </div>

  <!-- SECTION 5 : Partage questionnaire -->
  <div class="card" id="dbShareCard" style="display:none">
    <div class="card-title">🔗 Partager le Questionnaire
      <span style="font-size:.72rem;color:var(--muted);font-weight:400">Collecte en ligne</span>
    </div>
    <p style="font-size:.82rem;color:var(--muted);margin-bottom:12px">Publie ton questionnaire en ligne. Les répondants remplissent via un lien — toi seul peux voir et télécharger les réponses.</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px">
      <button class="btn btn-ai" onclick="publishQuestionnaire()">🚀 Publier & Générer le lien</button>
      <button class="btn btn-secondary" id="btnLoadResponses" onclick="loadResponses()" style="display:none">📥 Charger les réponses</button>
    </div>
    <div id="shareStatus" style="font-size:.82rem;color:var(--muted)"></div>

    <!-- Liens générés -->
    <div id="shareLinks" style="display:none;margin-top:14px">
      <div style="margin-bottom:10px">
        <label style="font-size:.75rem;color:var(--muted);display:block;margin-bottom:3px">🔗 Lien répondant (à partager)</label>
        <div style="display:flex;gap:6px">
          <input type="text" id="linkRepondant" readonly style="font-size:.78rem;background:rgba(0,212,170,.06);border-color:rgba(0,212,170,.3)">
          <button class="btn btn-primary btn-sm" onclick="copyLink('linkRepondant')">Copier</button>
        </div>
      </div>
      <div>
        <label style="font-size:.75rem;color:var(--muted);display:block;margin-bottom:3px">🔑 Token admin (garde-le secret)</label>
        <div style="display:flex;gap:6px">
          <input type="text" id="linkAdmin" readonly style="font-size:.78rem;background:rgba(251,146,60,.06);border-color:rgba(251,146,60,.3)">
          <button class="btn btn-secondary btn-sm" onclick="copyLink('linkAdmin')">Copier</button>
        </div>
      </div>
      <div class="warning-box" style="margin-top:10px;font-size:.78rem">⚠️ Note ton token admin — sans lui tu ne pourras pas récupérer les réponses.</div>
    </div>

    <!-- Chargement réponses -->
    <div id="loadResponsesZone" style="display:none;margin-top:14px">
      <label style="font-size:.78rem;color:var(--muted)">Token admin</label>
      <div style="display:flex;gap:6px;margin-top:4px">
        <input type="text" id="inputAdminToken" placeholder="Colle ton token admin ici">
        <button class="btn btn-primary btn-sm" onclick="fetchResponses()">Charger</button>
      </div>
      <div id="loadStatus" style="font-size:.82rem;color:var(--muted);margin-top:6px"></div>
    </div>
  </div>
</div>


<!-- ═══════════════════════════════════════ ONGLET RÉPONSES TEMPS RÉEL ═══ -->
<div id="tab-reponses" class="tab-content">
  <button class="btn btn-back" onclick="showTab('hub');toggleSidebar(false)">← Retour au Dashboard</button>

  <!-- Header stats -->
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:16px">
    <div class="card" style="text-align:center;padding:18px 12px">
      <div style="font-size:2.2rem;font-weight:800;color:var(--accent);font-family:'Syne',sans-serif" id="dash_count">—</div>
      <div style="font-size:.78rem;color:var(--muted);margin-top:4px">Répondants</div>
    </div>
    <div class="card" style="text-align:center;padding:18px 12px">
      <div style="font-size:1.1rem;font-weight:700;color:var(--text);font-family:'Syne',sans-serif" id="dash_last">—</div>
      <div style="font-size:.78rem;color:var(--muted);margin-top:4px">Dernière réponse</div>
    </div>
    <div class="card" style="text-align:center;padding:18px 12px">
      <div style="font-size:2.2rem;font-weight:800;color:#6366f1;font-family:'Syne',sans-serif" id="dash_vars">—</div>
      <div style="font-size:.78rem;color:var(--muted);margin-top:4px">Variables</div>
    </div>
    <div class="card" style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:18px 12px;gap:8px">
      <button class="btn btn-primary btn-sm" onclick="loadDashboard()" id="dash_refresh_btn">🔄 Actualiser</button>
      <div style="font-size:.72rem;color:var(--muted)" id="dash_next_refresh">Actualisation auto : 30s</div>
    </div>
  </div>

  <!-- Token input si pas encore chargé -->
  <div id="dash_token_zone" class="card" style="margin-bottom:16px">
    <div class="card-title" style="font-size:.85rem">🔑 Token admin</div>
    <div style="display:flex;gap:8px">
      <input type="text" id="dash_token_input" placeholder="Colle ton token admin ici" style="font-size:.84rem">
      <button class="btn btn-primary" onclick="loadDashboard(true)">Charger</button>
    </div>
    <div id="dash_status" style="font-size:.8rem;color:var(--muted);margin-top:6px"></div>
  </div>

  <!-- Graphiques par variable -->
  <div id="dash_charts" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:14px"></div>

</div>

<!-- ═══ MODAL : Génération IA des variables v4 ═══ -->
<div id="aiVarModal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:1500;align-items:center;justify-content:center;">
  <div class="card" style="width:96%;max-width:700px;max-height:94vh;overflow-y:auto;">
    <div class="card-title">🤖 Variables IA <button class="btn btn-sm btn-secondary" onclick="closeAiVarModal()">✕</button></div>

    <!-- Config -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;align-items:end">
      <div style="grid-column:1/-1">
        <label style="font-size:0.78rem;color:var(--muted)">Description de l'étude</label>
        <textarea id="aiVarStudyDesc" rows="2" placeholder="Ex: Facteurs associés à la malnutrition chez les enfants 0-5 ans, Littoral Cameroun" style="margin-top:3px;font-size:0.84rem"></textarea>
      </div>
      <div>
        <label style="font-size:0.78rem;color:var(--accent);font-weight:600">🎓 Niveau scolaire</label>
        <select id="aiVarLevel" style="margin-top:3px;font-size:0.82rem">
          <option value="12">Licence / Master 1 (10–12 variables)</option>
          <option value="15" selected>Master 1 avancé (12–15 variables)</option>
          <option value="18">Master 2 / Doctorat (15–18 variables)</option>
        </select>
      </div>
      <div style="display:flex;align-items:flex-end">
        <div style="padding:6px 10px;background:rgba(0,212,170,.07);border-radius:6px;font-size:0.75rem;color:var(--muted);line-height:1.4">
          <b style="color:var(--accent)">Règle :</b> Licence = 10-12 · M1 = 12-15 · M2/Doc = 15-18
        </div>
      </div>
    </div>

    <div style="display:flex;gap:8px;align-items:center;margin-bottom:4px">
      <button id="btnGenAiVars" class="btn btn-ai" onclick="generateAiVariables()">🤖 Générer</button>
      <span id="aiVarStatus" style="font-size:0.78rem;color:var(--muted)"></span>
    </div>

    <!-- Liste des variables — affiché après génération -->
    <div id="aiVarResult" style="display:none;margin-top:14px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <span style="font-size:0.82rem;font-weight:600;color:var(--accent)" id="aiVarCount"></span>
        <button class="btn btn-secondary btn-sm" onclick="addAiVarRow()">+ Variable</button>
      </div>

      <!-- Table variables -->
      <div style="overflow-x:auto;margin-bottom:10px">
        <table style="font-size:.82rem">
          <thead><tr>
            <th style="width:28px">#</th>
            <th>Nom</th>
            <th style="width:140px">Type</th>
            <th>Modalités</th>
            <th style="width:32px"></th>
          </tr></thead>
          <tbody id="aiVarTbody"></tbody>
        </table>
      </div>

      <!-- Alerte doublons -->
      <div id="aiVarDupAlert" style="display:none" class="warning-box"></div>

      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="importAiVarTable()">✅ Importer dans la base</button>
        <button class="btn btn-secondary btn-sm" onclick="resetAiVarTable()">🔄 Réinitialiser</button>
      </div>
    </div>
  </div>
</div>

<!-- ═══ MODAL : Recodage base de données ═══ -->
<div id="dbRecodeModal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:1500;align-items:center;justify-content:center;">
  <div class="card" style="width:92%;max-width:560px;max-height:90vh;overflow-y:auto;">
    <div class="card-title">🔄 Recodage (Base construite) <button class="btn btn-sm btn-secondary" onclick="closeDbRecodeModal()">✕</button></div>
    <div style="margin-bottom:12px">
      <label>Variable à recoder</label>
      <select id="dbRecodeVarSelect" onchange="loadDbRecodeValues()"></select>
    </div>
    <div id="dbRecodeMappingArea" style="margin-bottom:12px"></div>
    <div style="margin-bottom:12px">
      <label>Nom de la nouvelle variable</label>
      <input type="text" id="dbNewVarName" placeholder="Ex: Variable_Recodee">
    </div>
    <button class="btn btn-primary" onclick="applyDbRecode()">Appliquer</button>
  </div>
</div>

<div id="tab-desc" class="tab-content">
  <button class="btn btn-back" onclick="showTab('hub');toggleSidebar(false)">← Retour au Dashboard</button>
  <div class="expert-tip">
    <b>💡 Conseil de l'Expert :</b> L'analyse descriptive est le socle de votre travail. Elle permet de présenter le profil de votre échantillon avant de passer aux tests d'hypothèses. Assurez-vous que chaque graphique est accompagné d'un titre clair.
  </div>
  <div class="card" style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:10px">
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <button class="btn btn-ai" onclick="interpretAllDescriptive()">🤖 Interpréter les résultats</button>
      <select id="descInterpretLevel" style="background:var(--surface2);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:5px 10px;font-size:.8rem" onchange="document.getElementById('aiInterpretLevel').value=this.value;localStorage.setItem('ai_interpret_level',this.value)">
        <option value="court" selected>Court</option>
        <option value="moyen">Moyen</option>
        <option value="detaille">Détaillé</option>
        <option value="publication">Publication</option>
      </select>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
      <label style="font-size:.8rem;color:var(--muted)">Données :</label>
      <select id="displayMode" onchange="renderDescriptive()" style="background:var(--surface2);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:4px 8px;font-size:.8rem">
        <option value="both">Fréquence + %</option>
        <option value="freq">Fréquence seule</option>
        <option value="pct">Pourcentage seul</option>
      </select>
      <label style="font-size:.8rem;color:var(--muted)">Affichage :</label>
      <select id="layoutMode" onchange="renderDescriptive()" style="background:var(--surface2);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:4px 8px;font-size:.8rem">
        <option value="table_first">Tableau puis Graphe</option>
        <option value="chart_first">Graphe puis Tableau</option>
        <option value="table_only">Tableau seul</option>
        <option value="chart_only">Graphe seul</option>
      </select>
      <label style="font-size:.8rem;color:var(--muted)">Numérotation :</label>
      <select id="numStyle" onchange="renderDescriptive()" style="background:var(--surface2);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:4px 8px;font-size:.8rem">
        <option value="arabic">1, 2, 3 …</option>
        <option value="roman">I, II, III …</option>
        <option value="decimal">1.1, 1.2 …</option>
        <option value="none">Sans numéro</option>
      </select>
    </div>
  </div>

<div class="card">
  <div class="card-title">Recodage et Transformation</div>
  <p style="font-size:0.85rem; color:var(--muted); margin-bottom:10px;">Transformez vos données en regroupant des modalités ou en créant de nouvelles variables renommables.</p>
  <button class="btn btn-primary" style="width:100%" onclick="openRecodeModal()">
    🔄 Recoder / Regrouper une variable
  </button>
</div>

<!-- Modal de Recodage -->
<div id="recodeModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:1000; align-items:center; justify-content:center;">
  <div class="card" style="width:90%; max-width:600px; max-height:90vh; overflow-y:auto;">
    <div class="card-title">Recodage de variable <button class="btn btn-sm" onclick="closeRecodeModal()">✕</button></div>
    <div style="margin-bottom:15px">
      <label>Variable à recoder</label>
      <select id="recodeVarSelect" onchange="loadRecodeValues()"></select>
    </div>
    <div id="recodeTypeToggle" style="display:flex; gap:10px; margin-bottom:15px">
      <button class="btn btn-secondary btn-sm" id="btnModeModalite" onclick="setRecodeMode('modalite')">Par Modalité</button>
      <button class="btn btn-secondary btn-sm" id="btnModeIntervalle" onclick="setRecodeMode('intervalle')">Par Intervalle (Expert)</button>
    </div>
    <div id="recodeMappingArea" style="margin-bottom:15px"></div>
    <div id="intervalRecodeArea" style="display:none; margin-bottom:15px">
      <p style="font-size:0.75rem; color:var(--muted); margin-bottom:8px">Format: 0 à 15.5 : [1-16] (Une règle par ligne)</p>
      <textarea id="intervalRules" rows="5" placeholder="0 à 15.5 : [1-16]&#10;15.6 à 30 : [17-30]&#10;31 à 100 : [31+]"></textarea>
      <div style="margin-top:10px">
        <button class="btn btn-secondary btn-sm" onclick="document.getElementById('intervalRules').value += '0 à 15.5 : [1-16]\n'">+ Exemple Âge (0-15.5)</button>
      </div>
    </div>
    <div style="margin-bottom:15px">
      <label>Nom de la nouvelle variable</label>
      <input type="text" id="newVarName" placeholder="Ex: Variable_Recodee">
    </div>
    <button class="btn btn-primary" onclick="applyRecode()">Appliquer le recodage</button>
  </div>
</div>

<div id="descContainer"></div>
</div>

<div id="tab-cross" class="tab-content">
  <button class="btn btn-back" onclick="showTab('hub');toggleSidebar(false)">← Retour au Dashboard</button>
  <div class="expert-tip">
    <b>🔍 Conseil de l'Expert :</b> Le moteur statistique sélectionne automatiquement le meilleur test selon les types de variables : <b>Chi²</b> (cat×cat), <b>Fisher exact</b> (auto si effectifs &lt; 5), <b>V de Cramér</b> (force d'association), <b>t-test Welch</b> (num×cat 2 groupes), <b>ANOVA</b> (num×cat &gt; 2 groupes), <b>Pearson/Spearman</b> (num×num). Une <b>p-value &lt; 0,05</b> indique une association significative.
  </div>
  <div class="card">
    <div class="grid-2">
      <div><label>Variable Dépendante (Ligne)</label><select id="rowVarSelect"></select></div>
      <div><label>Variables Indépendantes (Colonnes)</label><div id="colVarList" class="var-selector"></div></div>
    </div>
    <!-- Bloc résultat IA Choix VD (bivariée) -->
    <div id="aiChoixBlocBiv" class="ai-choix-bloc">
      <div class="choix-header"><span class="choix-icon">🎯</span><h4>Sélection automatique de la variable dépendante</h4></div>
      <div id="aiChoixBivVD" class="vd-badge" style="display:none"></div>
      <div id="aiChoixBivJustif" class="choix-justif"></div>
      <div style="margin-top:8px;font-size:0.78rem;color:var(--muted);font-weight:600">Variables indépendantes suggérées :</div>
      <div id="aiChoixBivVI" class="vi-liste"></div>
    </div>
    <div style="margin-top:15px;display:flex;gap:10px;justify-content:space-between;align-items:center;flex-wrap:wrap">
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
        <button class="btn btn-primary" onclick="runBivariateAnalyses()">📊 Lancer les analyses</button>
        <button class="btn-ai-choix" id="btnAideChoixBiv" onclick="aiChoixVariableDependante('biv')">🎯 Aide au choix</button>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button class="btn btn-ai" onclick="interpretAllBivariate()">🤖 Interprétation Globale Expert</button>
        <select id="bivInterpretLevel" style="background:var(--surface2);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:5px 10px;font-size:.8rem" onchange="document.getElementById('aiInterpretLevel').value=this.value;localStorage.setItem('ai_interpret_level',this.value)">
          <option value="court" selected>Court</option>
          <option value="moyen">Moyen</option>
          <option value="detaille">Détaillé</option>
          <option value="publication">Publication</option>
        </select>
      </div>
    </div>
  </div>
  <div id="bivariateResults"></div>
</div>

<div id="tab-regression" class="tab-content">
  <button class="btn btn-back" onclick="showTab('hub');toggleSidebar(false)">← Retour au Dashboard</button>
  <div class="card">
    <div class="card-title">Analyse de Régression</div>
    <div class="grid-2">
      <div><label>Variable Dépendante (Y)</label><select id="regDepVar"></select></div>
      <div><label>Variables Indépendantes (X)</label><div id="regIndepVarList" class="var-selector"></div></div>
    </div>
    <!-- Bloc résultat IA Choix VD (régression) -->
    <div id="aiChoixBlocReg" class="ai-choix-bloc">
      <div class="choix-header"><span class="choix-icon">🎯</span><h4>Sélection automatique de la variable dépendante (Y)</h4></div>
      <div id="aiChoixRegVD" class="vd-badge" style="display:none"></div>
      <div id="aiChoixRegJustif" class="choix-justif"></div>
      <div style="margin-top:8px;font-size:0.78rem;color:var(--muted);font-weight:600">Variables indépendantes (X) suggérées :</div>
      <div id="aiChoixRegVI" class="vi-liste"></div>
    </div>
    <div id="regFeasibilityResult" style="margin-top:12px"></div>
    <div style="margin-top:15px;display:flex;gap:10px;justify-content:space-between;align-items:center;flex-wrap:wrap">
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
        <button class="btn btn-primary" onclick="runRegression()">📈 Calculer la régression</button>
        <button class="btn-ai-choix" id="btnAideChoixReg" onclick="aiChoixVariableDependante('reg')">🎯 Aide au choix</button>
        <button class="btn btn-secondary" onclick="checkRegressionFeasibility()">🔍 Faisabilité IA</button>
      </div>
      <button class="btn btn-ai" onclick="interpretAllRegression()">🤖 Interprétation Globale Expert</button>
    </div>
  </div>
  <div id="regressionResults"></div>
</div>

<div id="tab-discussion" class="tab-content">
  <button class="btn btn-back" onclick="showTab('hub');toggleSidebar(false)">← Retour au Dashboard</button>
  <div class="card">
    <div class="card-title">💬 Discussion des résultats</div>
    <p style="font-size:0.85rem;color:var(--muted);margin-bottom:14px">L'IA structure une discussion académique en confrontant vos résultats à la littérature. Renseignez le thème dans ⚙️ Paramètres et lancez vos analyses d'abord.</p>

    <!-- Profil + contrôles -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px;margin-bottom:14px;align-items:end">
      <div>
        <label style="font-size:0.75rem;color:var(--muted);display:block;margin-bottom:4px">Profil</label>
        <select id="disc_profile" onchange="applyDiscProfile()" style="width:100%;background:var(--input-bg);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:6px 8px;font-size:0.82rem">
          <option value="master">Mémoire Master (CAMES)</option>
          <option value="article">Article scientifique (IMRaD)</option>
          <option value="rapport">Rapport court</option>
          <option value="custom">Personnalisé</option>
        </select>
      </div>
      <div>
        <label style="font-size:0.75rem;color:var(--muted);display:block;margin-bottom:4px">Paragraphes</label>
        <input type="number" id="disc_paras" value="4" min="1" max="8" style="width:100%;background:var(--input-bg);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:6px 8px;font-size:0.82rem">
      </div>
      <div>
        <label style="font-size:0.75rem;color:var(--muted);display:block;margin-bottom:4px">Mots min</label>
        <input type="number" id="disc_words_min" value="300" min="80" max="800" step="50" style="width:100%;background:var(--input-bg);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:6px 8px;font-size:0.82rem">
      </div>
      <div>
        <label style="font-size:0.75rem;color:var(--muted);display:block;margin-bottom:4px">Mots max</label>
        <input type="number" id="disc_words_max" value="400" min="100" max="1000" step="50" style="width:100%;background:var(--input-bg);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:6px 8px;font-size:0.82rem">
      </div>
    </div>

    <!-- Structure sélectionnable -->
    <div id="disc_structure_info" style="font-size:0.78rem;color:var(--muted);margin-bottom:12px;padding:8px 12px;background:rgba(99,102,241,0.07);border-radius:6px;border-left:3px solid #6366f1">
      📐 Structure : <span id="disc_structure_label">① Rappel objectif + résultats clés &nbsp;② Confrontation littérature &nbsp;③ Limites méthodologiques &nbsp;④ Implications pratiques</span>
    </div>

    <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <button class="btn btn-ai" onclick="generateDiscussion()">🤖 Générer la Discussion</button>
      <button class="btn btn-secondary btn-sm" onclick="clearSection('discussionContent')">🗑️ Effacer</button>
      <span id="discussion_status" style="font-size:0.78rem;color:var(--muted)"></span>
      <span id="disc_wordcount" style="font-size:0.75rem;color:var(--muted);margin-left:auto"></span>
    </div>
    <div id="discussionContent" style="display:none;padding:16px;background:rgba(99,102,241,0.08);border-left:4px solid #6366f1;border-radius:6px;font-size:0.9rem;line-height:1.8;white-space:pre-wrap"></div>
  </div>
</div>

<div id="tab-conclusion" class="tab-content">
  <button class="btn btn-back" onclick="showTab('hub');toggleSidebar(false)">← Retour au Dashboard</button>
  <div class="card">
    <div class="card-title">🏁 Conclusion & Recommandations</div>
    <p style="font-size:0.85rem;color:var(--muted);margin-bottom:14px">Synthèse finale et recommandations opérationnelles. Générez la Discussion en premier pour de meilleurs résultats.</p>

    <!-- Profil + contrôles -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px;margin-bottom:14px;align-items:end">
      <div>
        <label style="font-size:0.75rem;color:var(--muted);display:block;margin-bottom:4px">Profil</label>
        <select id="conc_profile" onchange="applyConcProfile()" style="width:100%;background:var(--input-bg);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:6px 8px;font-size:0.82rem">
          <option value="master">Mémoire Master (CAMES)</option>
          <option value="article">Article scientifique (IMRaD)</option>
          <option value="rapport">Rapport court</option>
          <option value="custom">Personnalisé</option>
        </select>
      </div>
      <div>
        <label style="font-size:0.75rem;color:var(--muted);display:block;margin-bottom:4px">Paragraphes</label>
        <input type="number" id="conc_paras" value="3" min="1" max="6" style="width:100%;background:var(--input-bg);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:6px 8px;font-size:0.82rem">
      </div>
      <div>
        <label style="font-size:0.75rem;color:var(--muted);display:block;margin-bottom:4px">Mots min</label>
        <input type="number" id="conc_words_min" value="200" min="60" max="600" step="50" style="width:100%;background:var(--input-bg);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:6px 8px;font-size:0.82rem">
      </div>
      <div>
        <label style="font-size:0.75rem;color:var(--muted);display:block;margin-bottom:4px">Mots max</label>
        <input type="number" id="conc_words_max" value="250" min="80" max="800" step="50" style="width:100%;background:var(--input-bg);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:6px 8px;font-size:0.82rem">
      </div>
    </div>

    <!-- Nb recommandations -->
    <div style="display:flex;gap:12px;align-items:center;margin-bottom:12px;flex-wrap:wrap">
      <label style="font-size:0.78rem;color:var(--muted)">Nombre de recommandations :</label>
      <input type="number" id="conc_reco_count" value="5" min="2" max="10" style="width:70px;background:var(--input-bg);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:5px 8px;font-size:0.82rem">
      <label style="font-size:0.78rem;color:var(--muted)">Destinataires :</label>
      <select id="conc_reco_target" style="background:var(--input-bg);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:5px 8px;font-size:0.82rem">
        <option value="auto">Auto (selon thème)</option>
        <option value="decideurs">Décideurs / Gestionnaires</option>
        <option value="praticiens">Praticiens / Cliniciens</option>
        <option value="chercheurs">Chercheurs</option>
        <option value="politiques">Politiques publiques</option>
      </select>
    </div>

    <div id="conc_structure_info" style="font-size:0.78rem;color:var(--muted);margin-bottom:12px;padding:8px 12px;background:rgba(0,212,170,0.07);border-radius:6px;border-left:3px solid var(--accent)">
      📐 Structure : <span id="conc_structure_label">① Synthèse des apports &nbsp;② Réponse à la problématique &nbsp;③ Recommandations opérationnelles numérotées &nbsp;④ Perspectives de recherche</span>
    </div>

    <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <button class="btn btn-ai" onclick="generateConclusion()">🤖 Générer Conclusion & Recommandations</button>
      <button class="btn btn-secondary btn-sm" onclick="clearSection('conclusionContent')">🗑️ Effacer</button>
      <span id="conclusion_status" style="font-size:0.78rem;color:var(--muted)"></span>
      <span id="conc_wordcount" style="font-size:0.75rem;color:var(--muted);margin-left:auto"></span>
    </div>
    <div id="conclusionContent" style="display:none;padding:16px;background:rgba(0,212,170,0.07);border-left:4px solid var(--accent);border-radius:6px;font-size:0.9rem;line-height:1.8;white-space:pre-wrap"></div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════ ONGLET EXCEL ═══ -->
<div id="tab-excel" class="tab-content">
  <button class="btn btn-back" onclick="showTab('hub');toggleSidebar(false)">← Retour au Dashboard</button>
<div class="card">
  <div class="card-title">📊 Export Excel — Rapport Complet</div>
  <p style="font-size:0.85rem;color:var(--muted);margin-bottom:16px">Génère un fichier Excel structuré avec plusieurs feuilles : données brutes, statistiques descriptives, analyses bivariées, régression, et synthèse des résultats significatifs.</p>

  <div style="padding:12px;background:rgba(0,212,170,0.07);border-radius:8px;border-left:3px solid var(--accent);margin-bottom:16px">
    <div style="font-size:0.8rem;font-weight:600;color:var(--accent);margin-bottom:10px">📋 Feuilles à inclure</div>
    <div style="display:flex;flex-wrap:wrap;gap:12px">
      <label style="font-size:0.85rem;display:flex;align-items:center;gap:6px"><input type="checkbox" id="xl_raw" checked> Données brutes</label>
      <label style="font-size:0.85rem;display:flex;align-items:center;gap:6px"><input type="checkbox" id="xl_desc" checked> Statistiques descriptives</label>
      <label style="font-size:0.85rem;display:flex;align-items:center;gap:6px"><input type="checkbox" id="xl_biv" checked> Analyses bivariées (Chi²)</label>
      <label style="font-size:0.85rem;display:flex;align-items:center;gap:6px"><input type="checkbox" id="xl_reg" checked> Régression</label>
      <label style="font-size:0.85rem;display:flex;align-items:center;gap:6px"><input type="checkbox" id="xl_sig" checked> Synthèse significatifs (p&lt;0,05)</label>
      <label style="font-size:0.85rem;display:flex;align-items:center;gap:6px"><input type="checkbox" id="xl_interp" checked> Interprétations IA</label>
    </div>
  </div>

  <div class="grid-2" style="gap:12px;margin-bottom:16px">
    <div>
      <label style="font-size:0.8rem;color:var(--accent);font-weight:600">Titre du rapport</label>
      <input id="xl_title" placeholder="Titre de l'étude (optionnel)" style="margin-top:4px">
    </div>
    <div>
      <label style="font-size:0.8rem;color:var(--accent);font-weight:600">Auteur(s)</label>
      <input id="xl_author" placeholder="Prénom NOM" style="margin-top:4px">
    </div>
    <div>
      <label style="font-size:0.8rem;color:var(--accent);font-weight:600">Couleur d'en-tête</label>
      <div style="display:flex;gap:8px;align-items:center;margin-top:4px">
        <input type="color" id="xl_color" value="#003087" style="width:36px;height:28px;border:none;border-radius:4px;cursor:pointer">
        <span style="font-size:0.78rem;color:var(--muted)">Couleur principale des en-têtes</span>
      </div>
    </div>
    <div>
      <label style="font-size:0.8rem;color:var(--accent);font-weight:600">Séparateur décimal</label>
      <select id="xl_decimal" style="margin-top:4px">
        <option value="dot">Point (0.05) — international</option>
        <option value="comma" selected>Virgule (0,05) — français</option>
      </select>
    </div>
  </div>

  <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
    <button class="btn btn-primary" style="font-size:0.95rem;padding:10px 24px" onclick="exportExcelPro()">
      📊 Générer Excel Complet
    </button>
    <span id="xl_status" style="font-size:0.8rem;color:var(--muted)"></span>
  </div>
</div>
</div>


    <div id="tab-history" class="tab-content">
      <button class="btn btn-back" onclick="showTab('hub');toggleSidebar(false)">← Retour au Dashboard</button>
      <div class="card">
        <div class="card-title">📜 Historique de vos activités</div>
        <p style="font-size:0.85rem; color:var(--muted); margin-bottom:20px;">Retrouvez ici la trace de vos dernières analyses et exports pour éviter les abus d'API.</p>
        <div id="historyList" class="table-container">
          <!-- Dynamiquement rempli -->
          <div style="padding:20px; text-align:center; color:var(--muted);">Aucun historique pour le moment.</div>
        </div>
        <button class="btn btn-secondary btn-sm" style="margin-top:15px;" onclick="clearHistory()">Effacer l'historique</button>
      </div>
    </div>

    <div id="tab-settings" class="tab-content">
  <button class="btn btn-back" onclick="showTab('hub');toggleSidebar(false)">← Retour au Dashboard</button>
  <div class="card">
    <div class="card-title">Clés API & Modèles</div>
    <p style="font-size: 0.8rem; color: var(--accent); margin-bottom: 10px;">🔒 Les clés API sont sécurisées côté serveur. Aucune clé à saisir ici.</p>
    <div style="margin-top: 15px;">
      <label>Modèle par défaut pour l'interprétation</label>
      <select id="default_model">
        <option value="claude-3-5-sonnet-20240620">Claude 3.5 Sonnet</option>
        <option value="llama-3.3-70b-versatile">Groq: Llama 3.3 70B</option>
        <option value="gemini-1.5-flash">Gemini 1.5 Flash</option>
        <option value="llama3.1-70b">Cerebras: Llama 3.1 70B</option>
      </select>
    </div>
    <div style="margin-top:15px">
      <label>Niveau d'interprétation IA</label>
      <select id="aiInterpretLevel" onchange="
        localStorage.setItem('ai_interpret_level', this.value);
        ['descInterpretLevel','bivInterpretLevel'].forEach(id=>{const el=document.getElementById(id);if(el)el.value=this.value;});
      ">
        <option value="court" selected>Court — 1 phrase (40–75 mots)</option>
        <option value="moyen">Moyen — 1 phrase (80–100 mots)</option>
        <option value="detaille">Détaillé — style mémoire/thèse (300–600 mots)</option>
        <option value="publication">Publication scientifique — Master 2 / Thèse (600–1000 mots)</option>
      </select>
      <p style="font-size:0.75rem;color:var(--muted);margin-top:5px"><b style="color:var(--accent)">Court</b> = 1 phrase (40–75 mots) · <b style="color:var(--accent)">Moyen</b> = 1 phrase (80–100 mots) · <b style="color:var(--accent)">Détaillé</b> = 300–600 mots · <b style="color:var(--accent)">Publication</b> = 600–1000 mots style thèse.</p>
    </div>
    <div class="grid-2" style="margin-top:15px">
      <div>
        <label>Couleur thématique des graphiques</label>
        <div style="display:flex; gap:5px">
          <input type="color" id="chart_color" value="#00d4aa" onchange="renderDescriptive()">
          <button class="btn btn-secondary btn-sm" onclick="document.getElementById('chart_color').value='#00d4aa';renderDescriptive()">Réinit.</button>
        </div>
      </div>
      <div>
        <label>Couleur des Nombres/Variables</label>
        <div style="display:flex; gap:5px; margin-bottom:15px;">
          <input type="color" id="label_custom_color" value="#f8fafc" onchange="renderDescriptive()">
          <span style="font-size:0.8rem; color:var(--muted); align-self:center;">Personnaliser les textes du graphe</span>
        </div>
        <label>Options d'affichage</label>
        <div style="display:flex; gap:10px; margin-top:5px">
          <label style="font-size:0.8rem"><input type="checkbox" id="show_labels" checked onchange="renderDescriptive()"> Afficher nombres</label>
          <label style="font-size:0.8rem"><input type="checkbox" id="hide_borders" checked onchange="renderDescriptive()"> Masquer grilles/axes</label>
          <label style="font-size:0.8rem"><input type="checkbox" id="dark_labels" onchange="renderDescriptive()"> Labels sombres (Word)</label>
          <label style="font-size:0.8rem"><input type="checkbox" id="word_ui_mode" onchange="toggleWordMode()"> Mode Interface Claire</label>
        </div>
        <div style="margin-top:10px">
          <label style="font-size:0.8rem">Couleur des chiffres :</label>
          <select id="label_color_mode" onchange="renderDescriptive()" style="width:auto; padding:2px 5px; font-size:0.8rem; background:var(--surface2); color:var(--text); border:1px solid var(--border); border-radius:4px;">
            <option value="expert">Recommandation Expert</option>
            <option value="black">Noir Profond</option>
            <option value="white">Blanc Pur</option>
          </select>
        </div>
      </div>
    </div>
    <div style="margin-top:15px;padding:12px;background:rgba(99,102,241,0.08);border-radius:8px;border-left:3px solid #6366f1">
      <label style="font-weight:600;color:var(--accent)">🎯 Thème de l'étude <span style="font-weight:400;font-size:0.78rem;color:var(--muted)">(optionnel — génère titres et noms automatiques)</span></label>
      <input type="text" id="study_theme" placeholder="Ex: Facteurs associés à la malnutrition chez les enfants de 0-5 ans au Cameroun" style="width:100%;margin-top:6px;padding:8px 10px;background:var(--surface2);border:1px solid var(--border);border-radius:6px;color:var(--text);font-size:0.85rem">
      <p style="font-size:0.75rem;color:var(--muted);margin-top:5px">Si renseigné : les tableaux et figures seront nommés selon votre thème, les titres de section contextualisés, et l'IA interprétera en tenant compte du contexte.</p>
    </div>
    <button class="btn btn-primary" style="margin-top:10px" onclick="saveLocalKeys()">💾 Sauvegarder les paramètres</button>
    <button class="btn btn-secondary btn-sm" style="margin-top:8px" onclick="clearAiCache()">🗑️ Effacer cache IA</button>
  </div>

  <!-- ═══════ PANNEAU TYPOGRAPHIE WORD ═══════ -->
  <div class="card" style="margin-top:20px">
    <div class="card-title">🖋️ Typographie du Document Word <span style="font-size:0.75rem;font-weight:400;color:var(--muted)">Contrôles appliqués à l'export .docx</span></div>

    <!-- Styles communs pour les groupes -->
    <style>
      .typo-group { background:rgba(255,255,255,0.03); border:1px solid var(--border); border-radius:10px; padding:14px 16px; margin-bottom:14px; }
      .typo-group-title { font-size:0.78rem; font-weight:700; color:var(--accent); text-transform:uppercase; letter-spacing:.04em; margin-bottom:10px; }
      .typo-row { display:flex; flex-wrap:wrap; gap:10px; align-items:center; }
      .typo-field { display:flex; flex-direction:column; gap:3px; }
      .typo-field label { font-size:0.72rem; color:var(--muted); }
      .typo-field select, .typo-field input[type="number"], .typo-field input[type="color"] { background:var(--surface2); border:1px solid var(--border); border-radius:5px; color:var(--text); padding:4px 6px; font-size:0.8rem; }
      .typo-field select { min-width:120px; }
      .typo-field input[type="number"] { width:60px; }
      .typo-field input[type="color"] { width:40px; height:30px; padding:2px; cursor:pointer; }
      .typo-field input[type="checkbox"] { width:16px; height:16px; cursor:pointer; accent-color:var(--accent); }
      .typo-check { display:flex; align-items:center; gap:6px; font-size:0.8rem; color:var(--text); }
    </style>

    <!-- 1. Titre du rapport -->
    <div class="typo-group">
      <div class="typo-group-title">📄 Titre du rapport</div>
      <div class="typo-row">
        <div class="typo-field"><label>Police</label>
          <select id="ty_title_font"><option>Times New Roman</option><option>Arial</option><option>Calibri</option><option>Georgia</option></select>
        </div>
        <div class="typo-field"><label>Taille (pt)</label>
          <input type="number" id="ty_title_size" value="20" min="10" max="36">
        </div>
        <div class="typo-field"><label>Gras</label>
          <input type="checkbox" id="ty_title_bold" checked>
        </div>
        <div class="typo-field"><label>Couleur</label>
          <input type="color" id="ty_title_color" value="#000000">
        </div>
      </div>
    </div>

    <!-- 2. Titres de section (1. 2. 3…) -->
    <div class="typo-group">
      <div class="typo-group-title">📑 Titres de section (1. 2. 3…)</div>
      <div class="typo-row">
        <div class="typo-field"><label>Police</label>
          <select id="ty_section_font"><option>Times New Roman</option><option>Arial</option><option>Calibri</option><option>Georgia</option></select>
        </div>
        <div class="typo-field"><label>Taille (pt)</label>
          <input type="number" id="ty_section_size" value="14" min="10" max="28">
        </div>
        <div class="typo-field"><label>Gras</label>
          <input type="checkbox" id="ty_section_bold" checked>
        </div>
        <div class="typo-field"><label>Italique</label>
          <input type="checkbox" id="ty_section_italic">
        </div>
        <div class="typo-field"><label>Couleur</label>
          <input type="color" id="ty_section_color" value="#1a365d">
        </div>
      </div>
    </div>

    <!-- 3. Sous-titres variables -->
    <div class="typo-group">
      <div class="typo-group-title">🔖 Sous-titres variables</div>
      <div class="typo-row">
        <div class="typo-field"><label>Police</label>
          <select id="ty_sub_font"><option>Times New Roman</option><option>Arial</option><option>Calibri</option><option>Georgia</option></select>
        </div>
        <div class="typo-field"><label>Taille (pt)</label>
          <input type="number" id="ty_sub_size" value="13" min="10" max="24">
        </div>
        <div class="typo-field"><label>Gras</label>
          <input type="checkbox" id="ty_sub_bold" checked>
        </div>
        <div class="typo-field"><label>Italique</label>
          <input type="checkbox" id="ty_sub_italic">
        </div>
        <div class="typo-field"><label>Couleur</label>
          <input type="color" id="ty_sub_color" value="#2c5282">
        </div>
      </div>
    </div>

    <!-- 4. Captions tableau/figure -->
    <div class="typo-group">
      <div class="typo-group-title">🏷️ Captions tableau / figure</div>
      <div class="typo-row">
        <div class="typo-field"><label>Taille (pt)</label>
          <input type="number" id="ty_caption_size" value="9" min="7" max="14">
        </div>
        <div class="typo-field"><label>Italique</label>
          <input type="checkbox" id="ty_caption_italic" checked>
        </div>
        <div class="typo-field"><label>Couleur</label>
          <input type="color" id="ty_caption_color" value="#555555">
        </div>
      </div>
    </div>

    <!-- 5. Corps du texte -->
    <div class="typo-group">
      <div class="typo-group-title">📝 Corps du texte (données tableau)</div>
      <div class="typo-row">
        <div class="typo-field"><label>Police</label>
          <select id="ty_body_font"><option>Times New Roman</option><option>Arial</option><option>Calibri</option><option>Georgia</option></select>
        </div>
        <div class="typo-field"><label>Taille (pt)</label>
          <input type="number" id="ty_body_size" value="12" min="8" max="16">
        </div>
      </div>
    </div>

    <!-- 6. Interprétation IA -->
    <div class="typo-group">
      <div class="typo-group-title">🤖 Interprétation IA</div>
      <div class="typo-row">
        <div class="typo-field"><label>Taille (pt)</label>
          <input type="number" id="ty_ai_size" value="12" min="8" max="14">
        </div>
        <div class="typo-field"><label>Italique</label>
          <input type="checkbox" id="ty_ai_italic">
        </div>
        <div class="typo-field"><label>Couleur</label>
          <input type="color" id="ty_ai_color" value="#333333">
        </div>
      </div>
    </div>

    <!-- 7. Recommandations -->
    <div class="typo-group">
      <div class="typo-group-title">✅ Recommandations</div>
      <div class="typo-row">
        <div class="typo-check"><input type="checkbox" id="ty_reco_bold" checked><label>Gras</label></div>
        <div class="typo-check"><input type="checkbox" id="ty_reco_indent" checked><label>Retrait (indentation)</label></div>
      </div>
    </div>

    <div style="display:flex;gap:10px;margin-top:4px;flex-wrap:wrap">
      <button class="btn btn-primary" onclick="saveTypoSettings()">💾 Sauvegarder Typographie</button>
      <button class="btn btn-secondary btn-sm" onclick="resetTypoSettings()">↩️ Valeurs par défaut</button>
    </div>
    <p style="font-size:0.72rem;color:var(--muted);margin-top:8px">Les tailles sont en points (pt). 1 pt = 2 demi-points dans docx. Corps 12 pt = taille standard mémoire.</p>
  </div>
</div>

<script>
let DATA = []; let COLS = [];

function updateUITheme(color) {
  document.documentElement.style.setProperty('--accent', color);
  const glow = color + '26'; // Ajoute 15% d'opacité en hexa (26 = 38/255)
  document.documentElement.style.setProperty('--accent-glow', glow);
  localStorage.setItem('sa_ui_theme', color);
  // Mettre à jour aussi la couleur des graphiques par défaut
  const chartColorInput = document.getElementById('chart_color');
  if(chartColorInput) {
    chartColorInput.value = color;
    if(typeof renderDescriptive === 'function') renderDescriptive();
  }
}

function syncStudyInfo() {
  const theme = document.getElementById('main_study_theme').value;
  const author = document.getElementById('main_study_author').value;
  const inst = document.getElementById('main_study_inst').value;
  
  // Sync vers les anciens champs pour compatibilité
  const oldTheme = document.getElementById('study_theme');
  if(oldTheme) oldTheme.value = theme;
  
  const pptTitle = document.getElementById('ppt_title');
  if(pptTitle) pptTitle.value = theme;
  
  const pptAuthor = document.getElementById('ppt_author');
  if(pptAuthor) pptAuthor.value = author;
  
  const pptInst = document.getElementById('ppt_inst');
  if(pptInst) pptInst.value = inst;
  
  const xlTitle = document.getElementById('xl_title');
  if(xlTitle) xlTitle.value = theme;
  
  const xlAuthor = document.getElementById('xl_author');
  if(xlAuthor) xlAuthor.value = author;
}

// Au chargement
window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 1024) toggleSidebar(false);
  const savedColor = localStorage.getItem('sa_ui_theme');
  if(savedColor) {
    updateUITheme(savedColor);
    const input = document.getElementById('ui_theme_color');
    if(input) input.value = savedColor;
  }
  loadTypoSettings();
});

function showTab(id, el) {
  // Gestion de la sidebar active
  document.querySelectorAll('.nav-item').forEach(t => t.classList.remove('active'));
  if(el) {
    el.classList.add('active');
  } else {
    // Si appelé sans element (ex: via hub-card), trouver le nav-item correspondant
    const items = document.querySelectorAll('.nav-item');
    items.forEach(item => {
      if(item.getAttribute('onclick')?.includes(`'${id}'`)) item.classList.add('active');
    });
  }

  // Affichage du contenu
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  const target = document.getElementById('tab-'+id);
  if(target) target.classList.add('active');
  
  // Mise à jour du titre de la page
  const titles = {
    'hub': 'Tableau de Bord',
    'data': 'Importation des Données',
    'dbbuilder': 'Constructeur de Base de Données',
    'reponses': 'Dashboard des Réponses',
    'desc': 'Analyses Descriptives',
    'cross': 'Analyses Bivariées',
    'regression': 'Analyse de Régression',
    'discussion': 'Discussion & Interprétation',
    'conclusion': 'Conclusion & Recommandations',
    'excel': 'Export Excel Expert',
    'ppt': 'Génération PowerPoint',
    'settings': 'Paramètres de l\'Application'
  };
  document.getElementById('pageTitle').innerText = titles[id] || 'StatAnalyse Pro';

  if(id === 'desc') renderDescriptive();
  if(window.innerWidth <= 1024) toggleSidebar(false);
  window.scrollTo(0,0);
}

function toggleSidebar(force) {
  const sb = document.getElementById('sidebar');
  if(force !== undefined) {
    force ? sb.classList.add('open') : sb.classList.remove('open');
  } else {
    sb.classList.toggle('open');
  }
}

function toggleWordMode() {
  document.body.classList.toggle('word-mode');
  renderDescriptive();
}

function handleFile(e) {
  const file = e.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    const workbook = XLSX.read(evt.target.result, {type:'binary'});
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    DATA = XLSX.utils.sheet_to_json(sheet);
    if(DATA.length) { 
      COLS = Object.keys(DATA[0]).map(name => ({ name, type: detectType(name) })); 
      initDataUI(); 
    }
  };
  reader.readAsBinaryString(file);
}

function detectType(name) {
  const vals = DATA.map(r => String(r[name]).trim().toLowerCase()).filter(v => v && v !== 'undefined');
  const unique = [...new Set(vals)];
  if(vals.every(v => !isNaN(v.replace(',', '.'))) && unique.length > 10) return 'num';
  return 'cat';
}

function checkDataQuality() {
  let issues = [];
  let warnings = [];
  
  // Vérifier les valeurs manquantes
  COLS.forEach(col => {
    const missing = DATA.filter(r => !r[col.name] || r[col.name] === 'undefined').length;
    if (missing > 0) warnings.push(`${col.name}: ${missing} valeurs manquantes`);
  });
  
  // Vérifier les doublons
  const uniqueRows = new Set(DATA.map(r => JSON.stringify(r))).size;
  if (uniqueRows < DATA.length) warnings.push(`${DATA.length - uniqueRows} lignes dupliquées détectées`);
  
  // Vérifier la taille
  if (DATA.length < 30) warnings.push("⚠️ Taille d'échantillon petite (< 30)");
  
  let html = '';
  if (warnings.length > 0) {
    html += '<div class="warning-box">⚠️ ' + warnings.join('<br>') + '</div>';
  }
  if (issues.length === 0 && warnings.length === 0) {
    html += '<div class="success-box">✓ Données valides</div>';
  }
  return html;
}

function initDataUI() {
  document.getElementById('previewArea').style.display = 'block';
  document.getElementById('dataQuality').innerHTML = checkDataQuality();
  document.getElementById('colSettings').innerHTML = COLS.map((c,i) => `<div class="chip">${c.name} <select onchange="COLS[${i}].type=this.value"><option value="cat" ${c.type==='cat'?'selected':''}>Quali</option><option value="num" ${c.type==='num'?'selected':''}>Quanti</option></select></div>`).join('');
  document.getElementById('rowVarSelect').innerHTML = COLS.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
  document.getElementById('colVarList').innerHTML = COLS.map(c => `<label class="var-item"><input type="checkbox" name="bivCol" value="${c.name}"><span>${c.name}</span></label>`).join('');
  document.getElementById('regDepVar').innerHTML = COLS.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
  document.getElementById('regIndepVarList').innerHTML = COLS.map(c => `<label class="var-item"><input type="checkbox" name="regCol" value="${c.name}"><span>${c.name}</span></label>`).join('');
  const table = document.getElementById('previewTable');
  table.innerHTML = `<thead><tr>${COLS.map(c=>`<th>${c.name}</th>`).join('')}</tr></thead><tbody>${DATA.slice(0,5).map(r=>`<tr>${COLS.map(c=>`<td>${r[c.name]||''}</td>`).join('')}</tr>`).join('')}</tbody>`;
}
// Nettoie les valeurs manquantes/undefined
function cleanVals(colName) {
  return DATA.map(r => {
    const v = r[colName];
    if (v === null || v === undefined) return null;
    const s = String(v).trim();
    if (s === '' || s.toLowerCase() === 'undefined' || s.toLowerCase() === 'null' || s === 'NA' || s === 'N/A') return null;
    return s;
  }).filter(v => v !== null);
}

function renderDescriptive() {
  const container = document.getElementById('descContainer');
  if (!DATA.length) return;

  const displayMode = (document.getElementById('displayMode') || {}).value || 'both';
  const layoutMode  = (document.getElementById('layoutMode')  || {}).value || 'table_first';
  const showTable   = layoutMode !== 'chart_only';
  const showChart   = layoutMode !== 'table_only';

  if (window.__descCharts) { window.__descCharts.forEach(c => { try { c.destroy(); } catch(e){} }); }
  window.__descCharts = [];

  resetCounters();
  const theme = getTheme();
  const numStyle = (document.getElementById('numStyle')||{value:'arabic'}).value;

  // Formateur de numéro selon style choisi
  function fmtNum(n, type) {
    // type = 'tab' ou 'fig', n = entier
    if (numStyle === 'none') return '';
    if (numStyle === 'roman') {
      const romans = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX'];
      return romans[n-1] || n;
    }
    if (numStyle === 'decimal') return type === 'tab' ? `1.${n}` : `2.${n}`;
    return n; // arabic
  }

  // Récupérer les préférences individuelles d/f/both par variable (stocké dans window.__varDisplay)
  if (!window.__varDisplay) window.__varDisplay = {};

  container.innerHTML = COLS.map((col, index) => {
    const vals = cleanVals(col.name);
    const missing = DATA.length - vals.length;
    const missingNote = missing > 0
      ? `<div style="font-size:.75rem;color:var(--muted);margin-top:4px">\u26a0\ufe0f ${missing} valeur(s) manquante(s) exclue(s)</div>`
      : '';

    // Choix individuel : 'table','chart','both' — par défaut = layoutMode global
    const varPref = window.__varDisplay[col.name];
    const varShowTable = varPref ? (varPref !== 'chart') : showTable;
    const varShowChart = varPref ? (varPref !== 'table') : showChart;

    let tableHTML = '';
    const chartPlaceholder = varShowChart ? `<canvas id="chart_${index}" style="max-height:300px;margin-top:12px"></canvas>` : '';

    // Boutons choix individuel
    const interpretBtn = `<button class="btn-var-interpret" id="btn_interp_${col.name.replace(/[^a-zA-Z0-9]/g,'')}" onclick="interpretSingleVariable('${col.name.replace(/'/g,"\\'")}')">🤖 Interpréter</button>`;
    const toggleBtns = `<div style="display:flex;gap:4px;margin-left:auto">${interpretBtn}
      <button title="Tableau seul" class="btn btn-sm ${varPref==='table'?'btn-primary':'btn-secondary'}" style="padding:2px 7px;font-size:0.7rem" onclick="setVarDisplay('${col.name.replace(/'/g,"\\'")}','table')">▦</button>
      <button title="Figure seule" class="btn btn-sm ${varPref==='chart'?'btn-primary':'btn-secondary'}" style="padding:2px 7px;font-size:0.7rem" onclick="setVarDisplay('${col.name.replace(/'/g,"\\'")}','chart')">📊</button>
      <button title="Tableau + Figure" class="btn btn-sm ${varPref==='both'?'btn-primary':'btn-secondary'}" style="padding:2px 7px;font-size:0.7rem" onclick="setVarDisplay('${col.name.replace(/'/g,"\\'")}','both')">▦📊</button>
    </div>`;

    if (col.type === 'num') {
      const numVals = vals.map(v => parseFloat(v.replace(',', '.'))).filter(v => !isNaN(v));
      if (!numVals.length) return '';
      const mean   = numVals.reduce((a,b)=>a+b,0) / numVals.length;
      const std    = Math.sqrt(numVals.reduce((a,v)=>(a+(v-mean)**2),0) / numVals.length);
      const sorted = [...numVals].sort((a,b)=>a-b);
      const median = sorted[Math.floor(sorted.length/2)];
      if (varShowTable) {
        tableHTML = `<table class="desc-table">
          <tr><td><b>N valides</b></td><td>${numVals.length}</td></tr>
          <tr><td><b>Moyenne</b></td><td>${mean.toFixed(3)}</td></tr>
          <tr><td><b>\u00c9cart-type</b></td><td>${std.toFixed(3)}</td></tr>
          <tr><td><b>M\u00e9diane</b></td><td>${median.toFixed(3)}</td></tr>
          <tr><td><b>Min</b></td><td>${sorted[0].toFixed(3)}</td></tr>
          <tr><td><b>Max</b></td><td>${sorted[sorted.length-1].toFixed(3)}</td></tr>
        </table>`;
      }
      const tabN = varShowTable ? nextTableNum() : null;
      const figN = varShowChart ? nextFigNum() : null;
      const tabLabel = tabN !== null ? `${numStyle !== 'none' ? 'Tableau '+fmtNum(tabN,'tab')+' : ' : ''}Statistiques descriptives de ${col.name}` : '';
      const figLabel = figN !== null ? `${numStyle !== 'none' ? 'Figure '+fmtNum(figN,'fig')+' : ' : ''}Distribution de ${col.name}` : '';
      const tabCaption = varShowTable && tabLabel ? `<div class="fig-caption" data-label="${tabLabel}" style="font-size:0.75rem;color:var(--muted);margin-bottom:4px">${tabLabel}</div>` : '';
      const figCaption = varShowChart && figLabel ? `<div class="fig-caption" data-label="${figLabel}" style="font-size:0.75rem;color:var(--muted);margin-top:4px;text-align:center;font-style:italic">${figLabel}</div>` : '';
      const tableBlock = varShowTable ? tabCaption + tableHTML : '';
      const chartBlock = varShowChart ? chartPlaceholder + figCaption : '';
      const blockContent = layoutMode === 'chart_first' ? chartBlock + tableBlock : tableBlock + chartBlock;

      // Grand titre si thème
      const sectionNum = numStyle !== 'none' ? fmtNum(index+1,'tab')+'. ' : '';
      const varTitle = theme
        ? `<div style="font-size:1rem;font-weight:700;color:var(--text);border-bottom:2px solid var(--border);padding-bottom:6px;margin-bottom:12px;display:flex;align-items:center">${sectionNum}Répartition de ${col.name}${toggleBtns}</div>`
        : `<div style="font-size:0.95rem;font-weight:600;color:var(--text);border-bottom:1px solid var(--border);padding-bottom:5px;margin-bottom:12px;display:flex;align-items:center">${col.name}${toggleBtns}</div>`;

      const aiSlotNum = varShowTable && !varShowChart
        ? `<div class="ai-desc-var ai-interpretation" style="display:none;margin-bottom:10px"></div>`  // tableau seul → en haut
        : `<div class="ai-desc-var ai-interpretation" style="display:none;margin-top:10px"></div>`;    // figure présente → en bas
      const contentWithAiNum = varShowTable && !varShowChart
        ? aiSlotNum + blockContent
        : blockContent + aiSlotNum;
      return `<div class="card" data-col="${col.name}" data-type="num" data-index="${index}" data-tabref="${tabLabel}" data-figref="${figLabel}">
        ${varTitle}
        ${missingNote}${contentWithAiNum}
      </div>`;

    } else {
      const freq = {};
      vals.forEach(v => freq[v] = (freq[v]||0)+1);
      const total = vals.length;
      const sorted = Object.entries(freq).sort((a,b)=>b[1]-a[1]);
      if (varShowTable) {
        let header = '<tr><th>Modalit\u00e9</th>';
        if (displayMode !== 'pct')  header += '<th>n</th>';
        if (displayMode !== 'freq') header += '<th>%</th>';
        header += '</tr>';
        const rows = sorted.map(([v, n]) => {
          let cells = `<tr><td>${v}</td>`;
          if (displayMode !== 'pct')  cells += `<td><b>${n}</b></td>`;
          if (displayMode !== 'freq') cells += `<td>${((n/total)*100).toFixed(1)}%</td>`;
          return cells + '</tr>';
        }).join('');
        tableHTML = `<table class="desc-table">${header}${rows}</table>`;
      }
      const tabN = varShowTable ? nextTableNum() : null;
      const figN = varShowChart ? nextFigNum() : null;
      const tabLabel = tabN !== null ? `${numStyle !== 'none' ? 'Tableau '+fmtNum(tabN,'tab')+' : ' : ''}Répartition de ${col.name}` : '';
      const figLabel = figN !== null ? `${numStyle !== 'none' ? 'Figure '+fmtNum(figN,'fig')+' : ' : ''}Distribution de ${col.name}` : '';
      const tabCaption = varShowTable && tabLabel ? `<div class="fig-caption" data-label="${tabLabel}" style="font-size:0.75rem;color:var(--muted);margin-bottom:4px">${tabLabel}</div>` : '';
      const figCaption = varShowChart && figLabel ? `<div class="fig-caption" data-label="${figLabel}" style="font-size:0.75rem;color:var(--muted);margin-top:4px;text-align:center;font-style:italic">${figLabel}</div>` : '';
      const tableBlock = varShowTable ? tabCaption + tableHTML : '';
      const chartBlock = varShowChart ? chartPlaceholder + figCaption : '';
      const blockContent = layoutMode === 'chart_first' ? chartBlock + tableBlock : tableBlock + chartBlock;

      const sectionNum = numStyle !== 'none' ? fmtNum(index+1,'tab')+'. ' : '';
      const varTitle = theme
        ? `<div style="font-size:1rem;font-weight:700;color:var(--text);border-bottom:2px solid var(--border);padding-bottom:6px;margin-bottom:12px;display:flex;align-items:center">${sectionNum}Répartition de ${col.name}${toggleBtns}</div>`
        : `<div style="font-size:0.95rem;font-weight:600;color:var(--text);border-bottom:1px solid var(--border);padding-bottom:5px;margin-bottom:12px;display:flex;align-items:center">${col.name}${toggleBtns}</div>`;

      const aiSlotCat = varShowTable && !varShowChart
        ? `<div class="ai-desc-var ai-interpretation" style="display:none;margin-bottom:10px"></div>`  // tableau seul → en haut
        : `<div class="ai-desc-var ai-interpretation" style="display:none;margin-top:10px"></div>`;    // figure présente → en bas
      const contentWithAiCat = varShowTable && !varShowChart
        ? aiSlotCat + blockContent
        : blockContent + aiSlotCat;
      return `<div class="card" data-col="${col.name}" data-type="cat" data-index="${index}" data-tabref="${tabLabel}" data-figref="${figLabel}">
        ${varTitle}
        ${missingNote}${contentWithAiCat}
      </div>`;
    }
  }).join('');

  // ── Restaurer les interprétations IA depuis le cache ──────────────────────
  const theme4restore = getTheme ? getTheme() : (document.getElementById('study_theme')||{value:''}).value.trim();
  document.querySelectorAll('#descContainer .card').forEach(card => {
    const colName = card.getAttribute('data-col');
    if (!colName) return;
    const cacheKey = `desc_${colName}_${theme4restore}_${getInterpretLevel()}`;
    const cached = AI_CACHE.get(cacheKey);
    if (cached) {
      let bloc = card.querySelector('.ai-desc-var');
      if (!bloc) { bloc = document.createElement('div'); bloc.className = 'ai-desc-var ai-interpretation'; bloc.style.marginTop = '10px'; card.appendChild(bloc); }
      // Le cache stocke du texte brut (nettoyé) → reformater en HTML
      const htmlLines = cached.split('\n').map(line => {
        const t = line.trim();
        if (!t) return '<br>';
        if (t.length >= 4 && t === t.toUpperCase() && /[A-ZÀÂÇÉÈÊËÎÏÔŒÙÛÜŸ]/.test(t)) {
          return `<div style="font-weight:700;font-size:0.95rem;margin-top:12px;margin-bottom:4px;color:var(--accent)">${t}</div>`;
        }
        return `<div style="margin-bottom:4px">${t}</div>`;
      }).join('');
      bloc.innerHTML = htmlLines;
      bloc.style.display = 'block';
    }
  });

  if (showChart) {
    COLS.forEach((col, index) => {
      const canvas = document.getElementById('chart_' + index);
      if (!canvas) return;
      const vals = cleanVals(col.name);

      if (col.type === 'cat') {
        const freq = {};
        vals.forEach(v => freq[v] = (freq[v]||0)+1);
        const labels = Object.keys(freq);
        const values = Object.values(freq);
        const total  = vals.length;
        const isPie  = labels.length <= 4;
        const type   = isPie ? 'pie' : 'bar';
        const baseColor = document.getElementById('chart_color').value || '#00d4aa';
        const hideBorders = document.getElementById('hide_borders').checked;
        const showLabels = document.getElementById('show_labels').checked;
        const darkLabels = document.getElementById('dark_labels').checked;
        const labelColorMode = (document.getElementById('label_color_mode') || {value:'expert'}).value;
        
        let labelColor = document.getElementById('label_custom_color')?.value || (darkLabels ? '#000000' : '#e2e8f0');
        if (labelColorMode === 'black') labelColor = '#000000';
        if (labelColorMode === 'white') labelColor = '#ffffff';
        
        const tickColor = darkLabels ? '#000000' : '#94a3b8';
        const labelFontSize = darkLabels ? 14 : 11;
        const tickFontSize = darkLabels ? 12 : 10;
        
        const colors = isPie 
          ? labels.map((_,i) => `hsl(${(i*47+160)%360},65%,55%)`)
          : labels.map(() => baseColor);

        // Wrapper pour forcer ratio 1:1 sur pie
        if (isPie) {
          canvas.style.maxHeight = '280px';
          canvas.style.maxWidth  = '280px';
          canvas.style.margin    = '0 auto';
          canvas.style.display   = 'block';
        }

        const datalabelsConfig = {
          display: showLabels,
          color: (isPie && labelColorMode === 'expert') ? '#fff' : labelColor,
          font: { weight: 'bold', size: isPie ? 13 : labelFontSize },
          anchor: isPie ? 'center' : 'end',
          align: isPie ? 'center' : 'top',
          formatter: (value) => {
            const pct = ((value / total) * 100).toFixed(1);
            if (displayMode === 'freq') return `${value}`;
            if (displayMode === 'pct')  return `${pct}%`;
            return isPie ? `${value}\n(${pct}%)` : `${value} (${pct}%)`;
          },
          textAlign: 'center'
        };

        const chart = new Chart(canvas, {
          type,
          data: { labels, datasets: [{ data: values, backgroundColor: colors, borderWidth: isPie ? 2 : 1, borderColor: isPie ? '#0f172a' : colors }] },
          options: {
            responsive: true,
            maintainAspectRatio: isPie,
            aspectRatio: isPie ? 1 : 1.8,
            layout: { padding: { top: isPie ? 0 : 20 } },
            plugins: {
              legend: {
                display: isPie,
                position: 'bottom',
                labels: { color: tickColor, font: { size: 12, weight: darkLabels ? 'bold' : 'normal' }, padding: 12, usePointStyle: true }
              },
              tooltip: {
                callbacks: {
                  label: ctx => {
                    const n = isPie ? ctx.parsed : ctx.parsed.y;
                    const pct = ((n / total) * 100).toFixed(1);
                    if (displayMode === 'freq') return ` n = ${n}`;
                    if (displayMode === 'pct')  return ` ${pct}%`;
                    return ` n = ${n}  (${pct}%)`;
                  }
                }
              },
              datalabels: datalabelsConfig
            },
            scales: type === 'bar' ? {
              x: { 
                ticks: { color: tickColor, font: { size: tickFontSize, weight: 'bold' } }, 
                grid: { display: false },
                border: { display: !hideBorders, color: tickColor, width: 2 }
              },
              y: {
                ticks: { display: !hideBorders, color: tickColor, font: { size: tickFontSize, weight: 'bold' } }, 
                grid: { display: false },
                border: { display: !hideBorders, color: tickColor, width: 2 },
                beginAtZero: true,
                title: { display: false }
              }
            } : {}
          }
        });
        window.__descCharts.push(chart);

      } else {
        const nums = vals.map(v => parseFloat(v.replace(',','.'))).filter(v => !isNaN(v));
        if (!nums.length) return;
        const bins = Math.min(10, Math.ceil(Math.sqrt(nums.length)));
        const mn = Math.min(...nums), mx = Math.max(...nums);
        const step = (mx - mn) / bins || 1;
        const binLabels = [], counts = new Array(bins).fill(0);
        for (let i = 0; i < bins; i++) binLabels.push((mn+i*step).toFixed(1)+'-'+(mn+(i+1)*step).toFixed(1));
        nums.forEach(n => { let idx = Math.min(Math.floor((n-mn)/step), bins-1); counts[idx]++; });
        const baseColor = document.getElementById('chart_color').value || '#00d4aa';
        const hideBorders = document.getElementById('hide_borders').checked;
        const showLabels = document.getElementById('show_labels').checked;
        const darkLabels = document.getElementById('dark_labels').checked;
        const labelColorMode = (document.getElementById('label_color_mode') || {value:'expert'}).value;
        
        let labelColor = document.getElementById('label_custom_color')?.value || (darkLabels ? '#000000' : '#e2e8f0');
        if (labelColorMode === 'black') labelColor = '#000000';
        if (labelColorMode === 'white') labelColor = '#ffffff';
        
        const tickColor = darkLabels ? '#000000' : '#94a3b8';
        const labelFontSize = darkLabels ? 14 : 11;
        const tickFontSize = darkLabels ? 12 : 10;
        
        const chart = new Chart(canvas, {
          type: 'bar',
          data: { 
            labels: binLabels, 
            datasets: [{ 
              data: counts, 
              backgroundColor: baseColor + 'b3', // 70% opacity
              borderColor: baseColor, 
              borderWidth: 1 
            }] 
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            layout: { padding: { top: 25 } },
            plugins: {
              legend: { display: false },
              datalabels: {
                display: showLabels,
                anchor: 'end', align: 'top',
                color: labelColor,
                font: { size: labelFontSize, weight: 'bold' },
                formatter: v => v > 0 ? v : ''
              }
            },
            scales: {
              x: { 
                ticks: { color: tickColor, font: { size: tickFontSize, weight: 'bold' }, maxRotation: 45 }, 
                grid: { display: false },
                border: { display: !hideBorders, color: tickColor, width: 2 }
              },
              y: { 
                ticks: { display: !hideBorders, color: tickColor, font: { size: tickFontSize, weight: 'bold' } }, 
                grid: { display: false }, 
                border: { display: !hideBorders, color: tickColor, width: 2 },
                beginAtZero: true,
                title: { display: false } 
              }
            }
          }
        });
        window.__descCharts.push(chart);
      }
    });
  }
}



// --- MATHS ROBUSTES (CHI²) ---
function chi2pvalue(chi2, df) {
  if (df <= 0 || chi2 < 0) return 1;
  if (chi2 === 0) return 1;
  if (chi2 > 200 || df > 100) {
    const z = (Math.pow(chi2 / df, 1/3) - (1 - 2/(9*df))) / Math.sqrt(2/(9*df));
    return 0.5 * erfc(z / Math.sqrt(2));
  }
  return 1 - regularizedIncompleteGamma(df / 2, chi2 / 2);
}

function erfc(x) {
  const t = 1.0 / (1.0 + 0.5 * Math.abs(x));
  const ans = t * Math.exp(-x * x - 1.26551223 + t * (1.00002368 + t * (0.37409196 + t * (0.09678418 + 
              t * (-0.18628806 + t * (0.27886807 + t * (-1.13520398 + t * (1.48851587 + 
              t * (-0.82215223 + t * 0.17087277)))))))));
  return x >= 0 ? ans : 2.0 - ans;
}

function regularizedIncompleteGamma(a, x) {
  if (x < 0 || a <= 0) return 0;
  if (x === 0) return 0;
  if (x >= a + 1) return 1 - gammaContFraction(a, x);
  return gammaSeries(a, x);
}

function gammaSeries(a, x) {
  const logG = logGamma(a);
  let sum = 1/a, term = 1/a;
  for (let i = 1; i < 500; i++) {
    term *= x / (a + i);
    sum += term;
    if (Math.abs(term) < Math.abs(sum) * 1e-14) break;
  }
  return Math.exp(a * Math.log(x) - x - logG) * sum;
}

function gammaContFraction(a, x) {
  const logG = logGamma(a);
  let b = x + 1 - a;
  let c = 1 / 1e-30;
  let d = 1 / b;
  let h = d;
  for (let i = 1; i < 500; i++) {
    const an = -i * (i - a);
    b += 2;
    d = an * d + b;
    if (Math.abs(d) < 1e-30) d = 1e-30;
    c = b + an / c;
    if (Math.abs(c) < 1e-30) c = 1e-30;
    d = 1 / d;
    const delta = c * d;
    h *= delta;
    if (Math.abs(delta - 1) < 1e-14) break;
  }
  return Math.exp(a * Math.log(x) - x - logG) * h;
}

function logGamma(z) {
  const c = [76.18009172947146,-86.50532032941677,24.01409824083091,-1.231739572450155,0.1208650973866179e-2,-0.5395239384953e-5];
  let y = z, x = z, tmp = x + 5.5;
  tmp -= (x + 0.5) * Math.log(tmp);
  let ser = 1.000000000190015;
  for (let j = 0; j < 6; j++) ser += c[j] / ++y;
  return -tmp + Math.log(2.5066282746310005 * ser / x);
}

function getSig(chi2, df) {
  const p = chi2pvalue(chi2, df);
  if (p < 0.001) return '<b style="color:#ff4444">p &lt; 0.001 ✅✅</b>';
  if (p < 0.01)  return `<b style="color:#ff4444">p &lt; 0.01 ✅✅</b>`;
  if (p < 0.05)  return `<b style="color:#ff4444">p &lt; 0.05 ✅</b>`;
  return `p = ${p.toFixed(3)} ❌`;
}

function pValDisplay(p) {
  if (p < 0.001) return '<b style="color:#ff4444;font-weight:700">p &lt; 0.001 ✅✅</b>';
  if (p < 0.01)  return '<b style="color:#ff4444;font-weight:700">p &lt; 0.01 ✅✅</b>';
  if (p < 0.05)  return '<b style="color:#ff4444;font-weight:700">p &lt; 0.05 ✅</b>';
  return `p = ${p.toFixed(3)} ❌`;
}

// --- COCHRAN'S RULE CHECK ---
function checkCochranRule(res) {
  let totalCells = 0, cellsBelow5 = 0;
  res.rowVals.forEach(rv => {
    res.colVals.forEach(cv => {
      const exp = (res.rowTotals[rv] * res.colTotals[cv]) / res.grandTotal;
      totalCells++;
      if (exp < 5) cellsBelow5++;
    });
  });
  const pctBelow5 = (cellsBelow5 / totalCells) * 100;
  const valid = pctBelow5 <= 20 && cellsBelow5 === 0;
  return { valid, pctBelow5, cellsBelow5, totalCells };
}

// ══════════════════════════════════════════════════════════════════
// MOTEUR STATISTIQUE — Fisher Exact, V de Cramér, t-test, ANOVA,
// Pearson, Spearman — sélection automatique du bon test
// ══════════════════════════════════════════════════════════════════

// --- t-CDF (déjà définie plus bas, alias sûr) ---
function _tCDF(t, df) { return typeof tCDF === 'function' ? tCDF(t, df) : 0.5; }

// --- F-distribution p-value via Wilson-Hilferty ---
function fPvalue(F, df1, df2) {
  if (F <= 0 || df1 <= 0 || df2 <= 0) return 1;
  const x = df2 / (df2 + df1 * F);
  return regularizedIncompleteBeta(df2/2, df1/2, x);
}

function regularizedIncompleteBeta(a, b, x) {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const lbeta = logGamma(a) + logGamma(b) - logGamma(a + b);
  const front = Math.exp(a * Math.log(x) + b * Math.log(1-x) - lbeta) / a;
  // Continued fraction (Lentz)
  function betaCF(aa, bb, xx) {
    const MAXIT = 200, EPS = 3e-14, FPMIN = 1e-30;
    const qab = aa+bb, qap = aa+1, qam = aa-1;
    let c = 1, d = 1-(qab*xx/qap);
    if (Math.abs(d) < FPMIN) d = FPMIN;
    d = 1/d; let h = d;
    for (let m = 1; m <= MAXIT; m++) {
      const m2 = 2*m;
      let aa2 = m*(bb-m)*xx/((qam+m2)*(aa+m2));
      d = 1 + aa2*d; if (Math.abs(d)<FPMIN) d=FPMIN;
      c = 1 + aa2/c; if (Math.abs(c)<FPMIN) c=FPMIN;
      d=1/d; h*=d*c;
      aa2 = -(aa+m)*(qab+m)*xx/((aa+m2)*(qap+m2));
      d=1+aa2*d; if(Math.abs(d)<FPMIN)d=FPMIN;
      c=1+aa2/c; if(Math.abs(c)<FPMIN)c=FPMIN;
      d=1/d; const del=d*c; h*=del;
      if(Math.abs(del-1)<EPS) break;
    }
    return h;
  }
  if (x < (a+1)/(a+b+2)) return front * betaCF(a, b, x);
  // Use symmetry
  const front2 = Math.exp(b*Math.log(1-x)+a*Math.log(x)-lbeta)/b;
  return 1 - front2 * betaCF(b, a, 1-x);
}

// --- Fisher Exact Test (2×2) ---
function fisherExact2x2(a, b, c, d) {
  const n = a+b+c+d;
  function logFact(k) { let s=0; for(let i=2;i<=k;i++) s+=Math.log(i); return s; }
  function hyperProb(a,b,c,d) {
    const n=a+b+c+d;
    return Math.exp(logFact(a+b)+logFact(c+d)+logFact(a+c)+logFact(b+d)-logFact(n)-logFact(a)-logFact(b)-logFact(c)-logFact(d));
  }
  const pObs = hyperProb(a,b,c,d);
  let p = 0;
  const r1=a+b, r2=c+d, c1=a+c;
  const minK = Math.max(0, r1+c1-n), maxK = Math.min(r1, c1);
  for (let k=minK; k<=maxK; k++) {
    const pp = hyperProb(k, r1-k, c1-k, n-r1-c1+k);
    if (pp <= pObs + 1e-10) p += pp;
  }
  return Math.min(1, p);
}

// --- Fisher Exact Test (r×c générique via simulation Monte-Carlo) ---
function fisherExactRC(table, rowVals, colVals, rowTotals, colTotals, grandTotal, nSim=5000) {
  // Chi2 observé
  let chi2Obs = 0;
  rowVals.forEach(rv => colVals.forEach(cv => {
    const exp = (rowTotals[rv]*colTotals[cv])/grandTotal;
    if (exp>0) chi2Obs += (table[rv][cv]-exp)**2/exp;
  }));
  // Monte Carlo
  let count = 0;
  const rT = rowVals.map(rv=>rowTotals[rv]);
  const cT = colVals.map(cv=>colTotals[cv]);
  for (let s=0; s<nSim; s++) {
    // Générer table aléatoire avec mêmes marges (méthode r×c simple)
    const sim = rowVals.map(()=>colVals.map(()=>0));
    const pool = [];
    cT.forEach((ct,j) => { for(let k=0;k<ct;k++) pool.push(j); });
    // Shuffle Fisher-Yates
    for (let i=pool.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [pool[i],pool[j]]=[pool[j],pool[i]]; }
    let idx=0;
    rT.forEach((rt,i) => { for(let k=0;k<rt;k++) { sim[i][pool[idx++]]++; } });
    let chi2Sim=0;
    sim.forEach((row,i) => row.forEach((obs,j) => {
      const exp=(rT[i]*cT[j])/grandTotal;
      if(exp>0) chi2Sim+=(obs-exp)**2/exp;
    }));
    if (chi2Sim >= chi2Obs - 1e-10) count++;
  }
  return count/nSim;
}

// --- V de Cramér ---
function cramerV(chi2, n, r, c) {
  if (n<=0) return 0;
  const minDim = Math.min(r,c)-1;
  if (minDim<=0) return 0;
  return Math.sqrt(chi2/(n*minDim));
}

function cramerVLabel(v, r, c) {
  // Seuils Cohen adaptés (min dim)
  const minDim = Math.min(r,c)-1;
  let weak, mod, strong;
  if (minDim===1) { weak=0.1; mod=0.3; strong=0.5; }
  else if (minDim===2) { weak=0.07; mod=0.21; strong=0.35; }
  else { weak=0.06; mod=0.17; strong=0.29; }
  if (v >= strong) return 'forte 🔴';
  if (v >= mod)    return 'modérée 🟠';
  if (v >= weak)   return 'faible 🟡';
  return 'très faible ⚪';
}

// --- Spearman rank correlation ---
function spearmanCorr(x, y) {
  const n = x.length;
  function ranks(arr) {
    const idx = arr.map((v,i)=>({v,i})).sort((a,b)=>a.v-b.v);
    const r = new Array(n);
    let i=0;
    while(i<n) {
      let j=i;
      while(j<n-1 && idx[j+1].v===idx[j].v) j++;
      const avgRank = (i+j)/2+1;
      for(let k=i;k<=j;k++) r[idx[k].i]=avgRank;
      i=j+1;
    }
    return r;
  }
  const rx=ranks(x), ry=ranks(y);
  const mx=rx.reduce((a,b)=>a+b,0)/n, my=ry.reduce((a,b)=>a+b,0)/n;
  let num=0,dx=0,dy=0;
  for(let i=0;i<n;i++){num+=(rx[i]-mx)*(ry[i]-my);dx+=(rx[i]-mx)**2;dy+=(ry[i]-my)**2;}
  const rho = (dx>0&&dy>0) ? num/Math.sqrt(dx*dy) : 0;
  const t = n>2 ? rho*Math.sqrt((n-2)/(1-rho**2+1e-15)) : 0;
  const p = n>2 ? 2*(1-_tCDF(Math.abs(t),n-2)) : 1;
  return {rho, t, p, n};
}

// --- Pearson correlation ---
function pearsonCorr(x, y) {
  const n=x.length;
  const mx=x.reduce((a,b)=>a+b,0)/n, my=y.reduce((a,b)=>a+b,0)/n;
  let num=0,dx=0,dy=0;
  for(let i=0;i<n;i++){num+=(x[i]-mx)*(y[i]-my);dx+=(x[i]-mx)**2;dy+=(y[i]-my)**2;}
  const r=(dx>0&&dy>0)?num/Math.sqrt(dx*dy):0;
  const t=n>2?r*Math.sqrt((n-2)/(1-r**2+1e-15)):0;
  const p=n>2?2*(1-_tCDF(Math.abs(t),n-2)):1;
  return {r, t, p, n};
}

// --- t-test indépendant (Welch) ---
function welchTtest(g1, g2) {
  const n1=g1.length, n2=g2.length;
  if(n1<2||n2<2) return null;
  const m1=g1.reduce((a,b)=>a+b,0)/n1, m2=g2.reduce((a,b)=>a+b,0)/n2;
  const v1=g1.reduce((a,v)=>a+(v-m1)**2,0)/(n1-1), v2=g2.reduce((a,v)=>a+(v-m2)**2,0)/(n2-1);
  const se=Math.sqrt(v1/n1+v2/n2);
  if(se===0) return null;
  const t=(m1-m2)/se;
  const df=(v1/n1+v2/n2)**2/((v1/n1)**2/(n1-1)+(v2/n2)**2/(n2-1));
  const p=2*(1-_tCDF(Math.abs(t),df));
  return {t,df,p,m1,m2,n1,n2,sd1:Math.sqrt(v1),sd2:Math.sqrt(v2)};
}

// --- ANOVA one-way ---
function oneWayAnova(groups) {
  // groups: { label: [vals] }
  const labels=Object.keys(groups), k=labels.length;
  if(k<2) return null;
  const allVals=labels.flatMap(l=>groups[l]);
  const N=allVals.length;
  const grandMean=allVals.reduce((a,b)=>a+b,0)/N;
  let SSB=0,SSW=0;
  const means={}, ns={}, sds={};
  labels.forEach(l=>{
    const g=groups[l], n=g.length;
    ns[l]=n;
    const m=g.reduce((a,b)=>a+b,0)/n;
    means[l]=m;
    SSB+=n*(m-grandMean)**2;
    const vw=g.reduce((a,v)=>a+(v-m)**2,0);
    SSW+=vw;
    sds[l]=Math.sqrt(vw/Math.max(n-1,1));
  });
  const dfB=k-1, dfW=N-k;
  if(dfW<=0) return null;
  const MSB=SSB/dfB, MSW=SSW/dfW;
  if(MSW===0) return null;
  const F=MSB/MSW;
  const p=fPvalue(F,dfB,dfW);
  return {F,dfB,dfW,p,MSB,MSW,means,ns,sds,k,N};
}

// --- Normalité simplifiée (heuristique pour décider Pearson vs Spearman) ---
function isApproxNormal(arr) {
  if(arr.length<8) return false;
  const n=arr.length, m=arr.reduce((a,b)=>a+b,0)/n;
  const s2=arr.reduce((a,v)=>a+(v-m)**2,0)/n;
  const s=Math.sqrt(s2);
  if(s===0) return false;
  const skew=arr.reduce((a,v)=>a+(v-m)**3,0)/(n*s**3);
  const kurt=arr.reduce((a,v)=>a+(v-m)**4,0)/(n*s**4);
  return Math.abs(skew)<1.5 && kurt<7;
}

// --- Détecter le type d'une variable ---
function getColTypeInfo(colName) {
  const col = COLS.find(c=>c.name===colName);
  return col ? col.type : 'cat';
}

function getNumericVals(colName) {
  return DATA.map(r=>parseFloat(String(r[colName]).replace(',','.'))).filter(v=>!isNaN(v));
}

// ── Moteur principal de sélection du test ────────────────────────
function selectAndRunTest(rowVar, colVar) {
  const typeR = getColTypeInfo(rowVar);
  const typeC = getColTypeInfo(colVar);

  // 1. num × num → Pearson ou Spearman
  if (typeR==='num' && typeC==='num') {
    const pairsR=[], pairsC=[];
    DATA.forEach(r=>{
      const vr=parseFloat(String(r[rowVar]).replace(',','.'));
      const vc=parseFloat(String(r[colVar]).replace(',','.'));
      if(!isNaN(vr)&&!isNaN(vc)){pairsR.push(vr);pairsC.push(vc);}
    });
    if(pairsR.length<5) return {testType:'correlation',error:'Trop peu de données numériques communes (n<5)'};
    const useNormal = isApproxNormal(pairsR)&&isApproxNormal(pairsC);
    if(useNormal){
      const res=pearsonCorr(pairsR,pairsC);
      return {testType:'pearson', ...res};
    } else {
      const res=spearmanCorr(pairsR,pairsC);
      return {testType:'spearman', ...res};
    }
  }

  // 2. num × cat OU cat × num → t-test (2 groupes) ou ANOVA (>2)
  if ((typeR==='num'&&typeC==='cat')||(typeR==='cat'&&typeC==='num')) {
    const numVar = typeR==='num' ? rowVar : colVar;
    const catVar = typeR==='cat' ? rowVar : colVar;
    const catVals=[...new Set(DATA.map(r=>String(r[catVar]).trim()).filter(v=>v&&v!=='undefined'))];
    const groups={};
    catVals.forEach(cv=>{
      groups[cv]=DATA.map(r=>{
        if(String(r[catVar]).trim()!==cv) return null;
        const v=parseFloat(String(r[numVar]).replace(',','.'));
        return isNaN(v)?null:v;
      }).filter(v=>v!==null);
    });
    const validGroups=Object.fromEntries(Object.entries(groups).filter(([,arr])=>arr.length>=2));
    const k=Object.keys(validGroups).length;
    if(k<2) return {testType:'anova',error:'Moins de 2 groupes avec des données numériques suffisantes'};
    if(k===2){
      const [g1,g2]=Object.values(validGroups);
      const res=welchTtest(g1,g2);
      if(!res) return {testType:'ttest',error:'Données insuffisantes pour le t-test'};
      const labels=Object.keys(validGroups);
      return {testType:'ttest',...res,groups:validGroups,labels,numVar,catVar};
    } else {
      const res=oneWayAnova(validGroups);
      if(!res) return {testType:'anova',error:'Données insuffisantes pour l\'ANOVA'};
      return {testType:'anova',...res,groups:validGroups,numVar,catVar};
    }
  }

  // 3. cat × cat → Chi2 ou Fisher Exact
  const rowVals=[...new Set(DATA.map(r=>String(r[rowVar]).trim()).filter(v=>v&&v!=='undefined'))].sort();
  const colVals=[...new Set(DATA.map(r=>String(r[colVar]).trim()).filter(v=>v&&v!=='undefined'))].sort();
  const table={};
  rowVals.forEach(rv=>{table[rv]={};colVals.forEach(cv=>table[rv][cv]=0);});
  DATA.forEach(r=>{
    const rv=String(r[rowVar]).trim(), cv=String(r[colVar]).trim();
    if(table[rv]&&table[rv][cv]!==undefined) table[rv][cv]++;
  });
  const rowTotals={};rowVals.forEach(rv=>rowTotals[rv]=colVals.reduce((a,cv)=>a+table[rv][cv],0));
  const colTotals={};colVals.forEach(cv=>colTotals[cv]=rowVals.reduce((a,rv)=>a+table[rv][cv],0));
  const grandTotal=Object.values(rowTotals).reduce((a,b)=>a+b,0);

  let chi2=0;
  rowVals.forEach(rv=>colVals.forEach(cv=>{
    const exp=(rowTotals[rv]*colTotals[cv])/grandTotal;
    if(exp>0) chi2+=(table[rv][cv]-exp)**2/exp;
  }));
  const df=(rowVals.length-1)*(colVals.length-1);

  // Vérifier Cochran
  let minExpected=Infinity, countBelow5=0, totalCells=0;
  rowVals.forEach(rv=>colVals.forEach(cv=>{
    const exp=(rowTotals[rv]*colTotals[cv])/grandTotal;
    totalCells++;
    if(exp<minExpected) minExpected=exp;
    if(exp<5) countBelow5++;
  }));
  const pctBelow5=(countBelow5/totalCells)*100;
  const needFisher = (rowVals.length===2&&colVals.length===2) ? (minExpected<5) : (pctBelow5>20);

  const V = cramerV(chi2, grandTotal, rowVals.length, colVals.length);
  const Vlabel = cramerVLabel(V, rowVals.length, colVals.length);

  if(needFisher&&rowVals.length===2&&colVals.length===2){
    const a=table[rowVals[0]][colVals[0]], b=table[rowVals[0]][colVals[1]];
    const c=table[rowVals[1]][colVals[0]], d=table[rowVals[1]][colVals[1]];
    const pFisher=fisherExact2x2(a,b,c,d);
    return {testType:'fisher',rowVar,colVar,rowVals,colVals,table,rowTotals,colTotals,grandTotal,chi2,df,p:pFisher,V,Vlabel,cochranInfo:{countBelow5,totalCells,pctBelow5}};
  } else if(needFisher){
    const pMC=fisherExactRC(table,rowVals,colVals,rowTotals,colTotals,grandTotal,3000);
    return {testType:'fisher_mc',rowVar,colVar,rowVals,colVals,table,rowTotals,colTotals,grandTotal,chi2,df,p:pMC,V,Vlabel,cochranInfo:{countBelow5,totalCells,pctBelow5}};
  } else {
    const pChi2=chi2pvalue(chi2,df);
    return {testType:'chi2',rowVar,colVar,rowVals,colVals,table,rowTotals,colTotals,grandTotal,chi2,df,p:pChi2,V,Vlabel,cochranInfo:{countBelow5,totalCells,pctBelow5}};
  }
}

// --- LOGIQUE BIVARIÉE ---
function runBivariateAnalyses() {
  const rowVar = document.getElementById('rowVarSelect').value;
  const selectedCols = Array.from(document.querySelectorAll('input[name="bivCol"]:checked')).map(cb => cb.value);
  const resultsDiv = document.getElementById('bivariateResults'); resultsDiv.innerHTML = '';
  window.__bivTabCounter = 0;
  selectedCols.forEach(colVar => { if(rowVar !== colVar) renderBivariateResult(selectAndRunTest(rowVar, colVar), resultsDiv); });
}

function calculateChi2(rowVar, colVar) {
  const rowVals = [...new Set(DATA.map(r=>String(r[rowVar]).trim()).filter(v=>v&&v!=='undefined'))].sort();
  const colVals = [...new Set(DATA.map(r=>String(r[colVar]).trim()).filter(v=>v&&v!=='undefined'))].sort();
  const table = {}; rowVals.forEach(rv => { table[rv] = {}; colVals.forEach(cv => table[rv][cv] = 0); });
  DATA.forEach(r => { const rv = String(r[rowVar]).trim(); const cv = String(r[colVar]).trim(); if(table[rv] && table[rv][cv] !== undefined) table[rv][cv]++; });
  const rowTotals = {}; rowVals.forEach(rv => rowTotals[rv] = colVals.reduce((a,cv)=>a+table[rv][cv],0));
  const colTotals = {}; colVals.forEach(cv => colTotals[cv] = rowVals.reduce((a,rv)=>a+table[rv][cv],0));
  const grandTotal = Object.values(rowTotals).reduce((a,b)=>a+b,0);
  let chi2 = 0; rowVals.forEach(rv => { colVals.forEach(cv => { const exp = (rowTotals[rv] * colTotals[cv]) / grandTotal; if(exp > 0) chi2 += Math.pow(table[rv][cv] - exp, 2) / exp; }); });
  return { rowVar, colVar, rowVals, colVals, table, rowTotals, colTotals, grandTotal, chi2 };
}

function renderBivariateResult(res, container) {
  if (!window.__bivTabCounter) window.__bivTabCounter = 0;
  window.__bivTabCounter++;
  const n = window.__bivTabCounter;
  const numStyle = (document.getElementById('numStyle')||{value:'arabic'}).value;
  function fmtBivNum(n) {
    if (numStyle === 'none') return '';
    if (numStyle === 'roman') { const r=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX']; return r[n-1]||n; }
    if (numStyle === 'decimal') return `3.${n}`;
    return n;
  }
  const sectionNum = numStyle !== 'none' ? fmtBivNum(n) + '. ' : '';
  const theme = getTheme();
  const titreFormules = ['Lien entre', 'Relation entre', 'Lien statistique entre'];

  // ── Gestion erreur ──
  if (res.error) {
    container.insertAdjacentHTML('beforeend',
      `<div class="card"><div style="color:#ff6b6b">⚠️ ${res.error}</div></div>`);
    return;
  }

  // ═══════════════════════════════════════════════════════
  // CAS 1 : Corrélation (Pearson / Spearman)
  // ═══════════════════════════════════════════════════════
  if (res.testType==='pearson'||res.testType==='spearman') {
    const rOrRho = res.testType==='pearson' ? res.r : res.rho;
    const rLabel = res.testType==='pearson' ? 'r de Pearson' : 'ρ de Spearman';
    const tLabel = res.testType==='pearson' ? 't' : 't(ρ)';
    const isSignif = res.p < 0.05;
    const pStyle = isSignif ? 'color:#ff4444;font-weight:700' : '';
    const pText = res.p < 0.001 ? 'p < 0,001' : `p = ${res.p.toFixed(3)}`;
    const rowVar = res.testType==='pearson' ? (res.rowVar||'') : (res.rowVar||'');
    const colVar = res.testType==='pearson' ? (res.colVar||'') : (res.colVar||'');
    // rowVar/colVar not in res — reconstruct from call context
    const rv = container._lastRowVar||'Variable 1';
    const cv = container._lastColVar||'Variable 2';
    const cardTitle = `${titreFormules[(n-1)%titreFormules.length]} ${cv} et ${rv}`;
    const tabLabel = numStyle!=='none' ? `Tableau ${fmtBivNum(n)} : Corrélation entre ${rv} et ${cv}` : `Corrélation entre ${rv} et ${cv}`;
    const resultId = `res_${rv}_${cv}`.replace(/\s+/g,'_');
    const varTitle = theme
      ? `<div class="biv-card-title" style="font-size:1rem;font-weight:700;color:var(--text);border-bottom:2px solid var(--border);padding-bottom:6px;margin-bottom:12px">${sectionNum}${cardTitle}</div>`
      : `<div class="biv-card-title" style="font-size:0.95rem;font-weight:600;color:var(--text);border-bottom:1px solid var(--border);padding-bottom:5px;margin-bottom:12px">${cardTitle}</div>`;
    const tabCaption = tabLabel ? `<div class="fig-caption" style="font-size:0.75rem;color:var(--muted);margin-bottom:4px">${tabLabel}</div>` : '';
    const badge = `<span style="background:rgba(99,102,241,0.15);color:#818cf8;border:1px solid rgba(99,102,241,0.3);border-radius:4px;padding:2px 8px;font-size:0.72rem;font-weight:700;margin-left:8px">${res.testType==='pearson'?'PEARSON':'SPEARMAN'}</span>`;
    const html = `<div class="card" id="${resultId}" data-cardtitle="${cardTitle.replace(/"/g,'&quot;')}" data-tablabel="${tabLabel.replace(/"/g,'&quot;')}" data-chi2="" data-df="" data-pval="${res.p.toFixed(4)}">
      ${varTitle}
      <div id="ai_${resultId}" class="ai-interpretation" style="display:none;margin-top:10px;margin-bottom:10px"></div>
      ${tabCaption}
      <div style="overflow-x:auto">
        <table>
          <thead><tr><th>Statistique</th><th>Valeur</th><th>Signification</th></tr></thead>
          <tbody>
            <tr><td>Test utilisé</td><td>Corrélation de ${res.testType==='pearson'?'Pearson':'Spearman'}${badge}</td><td style="font-size:0.78rem;color:var(--muted)">${res.testType==='spearman'?'Distribution non normale ou rangs':'Distribution normale supposée'}</td></tr>
            <tr><td>${rLabel}</td><td><b>${rOrRho.toFixed(4)}</b></td><td style="font-size:0.78rem;color:var(--muted)">${Math.abs(rOrRho)>=0.7?'Forte':Math.abs(rOrRho)>=0.4?'Modérée':'Faible'} (${rOrRho>=0?'positive':'négative'})</td></tr>
            <tr><td>n (paires)</td><td>${res.n}</td><td></td></tr>
            <tr><td>${tLabel}</td><td>${res.t.toFixed(4)}</td><td></td></tr>
            <tr><td>p-value</td><td><span style="${pStyle}">${pValDisplay(res.p)}</span></td><td style="font-size:0.78rem;color:var(--muted)">${isSignif?'Association significative ✅':'Non significatif ❌'}</td></tr>
          </tbody>
        </table>
      </div>
      <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn-var-interpret" onclick="interpretBivResult('${resultId}')">🤖 Interpréter</button>
      </div>
    </div>`;
    container.insertAdjacentHTML('beforeend', html);
    return;
  }

  // ═══════════════════════════════════════════════════════
  // CAS 2 : t-test (2 groupes indépendants)
  // ═══════════════════════════════════════════════════════
  if (res.testType==='ttest') {
    const isSignif = res.p < 0.05;
    const cardTitle = `${titreFormules[(n-1)%titreFormules.length]} ${res.catVar} et ${res.numVar}`;
    const tabLabel = numStyle!=='none' ? `Tableau ${fmtBivNum(n)} : Comparaison de ${res.numVar} selon ${res.catVar}` : `Comparaison de ${res.numVar} selon ${res.catVar}`;
    const resultId = `res_${res.catVar}_${res.numVar}`.replace(/\s+/g,'_');
    const varTitle = theme
      ? `<div class="biv-card-title" style="font-size:1rem;font-weight:700;color:var(--text);border-bottom:2px solid var(--border);padding-bottom:6px;margin-bottom:12px">${sectionNum}${cardTitle}</div>`
      : `<div class="biv-card-title" style="font-size:0.95rem;font-weight:600;color:var(--text);border-bottom:1px solid var(--border);padding-bottom:5px;margin-bottom:12px">${cardTitle}</div>`;
    const tabCaption = `<div class="fig-caption" style="font-size:0.75rem;color:var(--muted);margin-bottom:4px">${tabLabel}</div>`;
    const badge = `<span style="background:rgba(251,146,60,0.15);color:#fb923c;border:1px solid rgba(251,146,60,0.3);border-radius:4px;padding:2px 8px;font-size:0.72rem;font-weight:700;margin-left:8px">T-TEST WELCH</span>`;
    const groupRows = res.labels.map(l=>{
      const g=res.groups[l], n2=g.length, m=g.reduce((a,b)=>a+b,0)/n2;
      const sd=Math.sqrt(g.reduce((a,v)=>a+(v-m)**2,0)/Math.max(n2-1,1));
      return `<tr><td><b>${l}</b></td><td>${n2}</td><td>${m.toFixed(3)}</td><td>${sd.toFixed(3)}</td></tr>`;
    }).join('');
    const html = `<div class="card" id="${resultId}" data-cardtitle="${cardTitle.replace(/"/g,'&quot;')}" data-tablabel="${tabLabel.replace(/"/g,'&quot;')}" data-chi2="" data-df="${res.df.toFixed(1)}" data-pval="${res.p.toFixed(4)}">
      ${varTitle}
      <div id="ai_${resultId}" class="ai-interpretation" style="display:none;margin-top:10px;margin-bottom:10px"></div>
      ${tabCaption}
      <div style="overflow-x:auto">
        <table>
          <thead><tr><th>Groupe</th><th>n</th><th>Moyenne</th><th>Écart-type</th></tr></thead>
          <tbody>${groupRows}</tbody>
        </table>
      </div>
      <div style="margin-top:12px;overflow-x:auto">
        <table>
          <thead><tr><th>Test${badge}</th><th>t</th><th>ddl</th><th>p-value</th></tr></thead>
          <tbody>
            <tr>
              <td>Test t de Student (Welch)</td>
              <td>${res.t.toFixed(4)}</td>
              <td>${res.df.toFixed(1)}</td>
              <td><span${isSignif?' style="color:#ff4444;font-weight:700"':''}>${pValDisplay(res.p)}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn-var-interpret" onclick="interpretBivResult('${resultId}')">🤖 Interpréter</button>
      </div>
    </div>`;
    container.insertAdjacentHTML('beforeend', html);
    return;
  }

  // ═══════════════════════════════════════════════════════
  // CAS 3 : ANOVA one-way
  // ═══════════════════════════════════════════════════════
  if (res.testType==='anova') {
    const isSignif = res.p < 0.05;
    const cardTitle = `${titreFormules[(n-1)%titreFormules.length]} ${res.catVar} et ${res.numVar}`;
    const tabLabel = numStyle!=='none' ? `Tableau ${fmtBivNum(n)} : ANOVA — ${res.numVar} selon ${res.catVar}` : `ANOVA — ${res.numVar} selon ${res.catVar}`;
    const resultId = `res_${res.catVar}_${res.numVar}`.replace(/\s+/g,'_');
    const varTitle = theme
      ? `<div class="biv-card-title" style="font-size:1rem;font-weight:700;color:var(--text);border-bottom:2px solid var(--border);padding-bottom:6px;margin-bottom:12px">${sectionNum}${cardTitle}</div>`
      : `<div class="biv-card-title" style="font-size:0.95rem;font-weight:600;color:var(--text);border-bottom:1px solid var(--border);padding-bottom:5px;margin-bottom:12px">${cardTitle}</div>`;
    const tabCaption = `<div class="fig-caption" style="font-size:0.75rem;color:var(--muted);margin-bottom:4px">${tabLabel}</div>`;
    const badge = `<span style="background:rgba(16,185,129,0.15);color:#10b981;border:1px solid rgba(16,185,129,0.3);border-radius:4px;padding:2px 8px;font-size:0.72rem;font-weight:700;margin-left:8px">ANOVA</span>`;
    const groupRows = Object.keys(res.groups).map(l=>{
      const g=res.groups[l], n2=g.length, m=g.reduce((a,b)=>a+b,0)/n2;
      const sd=Math.sqrt(g.reduce((a,v)=>a+(v-m)**2,0)/Math.max(n2-1,1));
      return `<tr><td><b>${l}</b></td><td>${n2}</td><td>${m.toFixed(3)}</td><td>${sd.toFixed(3)}</td></tr>`;
    }).join('');
    const html = `<div class="card" id="${resultId}" data-cardtitle="${cardTitle.replace(/"/g,'&quot;')}" data-tablabel="${tabLabel.replace(/"/g,'&quot;')}" data-chi2="" data-df="${res.dfB}/${res.dfW}" data-pval="${res.p.toFixed(4)}">
      ${varTitle}
      <div id="ai_${resultId}" class="ai-interpretation" style="display:none;margin-top:10px;margin-bottom:10px"></div>
      ${tabCaption}
      <div style="overflow-x:auto">
        <table>
          <thead><tr><th>Groupe</th><th>n</th><th>Moyenne</th><th>Écart-type</th></tr></thead>
          <tbody>${groupRows}</tbody>
        </table>
      </div>
      <div style="margin-top:12px;overflow-x:auto">
        <table>
          <thead><tr><th>Source${badge}</th><th>F</th><th>ddl</th><th>p-value</th></tr></thead>
          <tbody>
            <tr>
              <td>ANOVA one-way (${res.k} groupes, N=${res.N})</td>
              <td>${res.F.toFixed(4)}</td>
              <td>${res.dfB} / ${res.dfW}</td>
              <td><span${isSignif?' style="color:#ff4444;font-weight:700"':''}>${pValDisplay(res.p)}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn-var-interpret" onclick="interpretBivResult('${resultId}')">🤖 Interpréter</button>
      </div>
    </div>`;
    container.insertAdjacentHTML('beforeend', html);
    return;
  }

  // ═══════════════════════════════════════════════════════
  // CAS 4 : Chi² ou Fisher (cat × cat)
  // ═══════════════════════════════════════════════════════
  const isFisher = res.testType==='fisher'||res.testType==='fisher_mc';
  const df = res.df;
  const cochran = res.cochranInfo || {countBelow5:0,totalCells:1,pctBelow5:0};
  const resultId = `res_${res.rowVar}_${res.colVar}`.replace(/\s+/g, '_');
  const cardTitle = `${titreFormules[(n-1)%titreFormules.length]} ${res.colVar} et ${res.rowVar}`;
  const tabLabel = numStyle!=='none'
    ? `Tableau ${fmtBivNum(n)} : Répartition de ${res.rowVar} selon ${res.colVar}`
    : `Répartition de ${res.rowVar} selon ${res.colVar}`;

  const varTitle = theme
    ? `<div class="biv-card-title" style="font-size:1rem;font-weight:700;color:var(--text);border-bottom:2px solid var(--border);padding-bottom:6px;margin-bottom:12px">${sectionNum}${cardTitle}</div>`
    : `<div class="biv-card-title" style="font-size:0.95rem;font-weight:600;color:var(--text);border-bottom:1px solid var(--border);padding-bottom:5px;margin-bottom:12px">${cardTitle}</div>`;
  const tabCaption = `<div class="fig-caption" style="font-size:0.75rem;color:var(--muted);margin-bottom:4px">${tabLabel}</div>`;

  let cochranWarning = '';
  if (cochran.countBelow5 > 0) {
    const verb = isFisher ? 'Test de Fisher appliqué automatiquement.' : '';
    cochranWarning = `<div class="warning-box">⚠️ Règle de Cochran : ${cochran.countBelow5}/${cochran.totalCells} cellule(s) (${cochran.pctBelow5.toFixed(1)}%) avec effectif théorique < 5. ${verb}</div>`;
  }

  const isSignif = res.p < 0.05;
  const pValCell = pValDisplay(res.p);
  const testLabel = isFisher ? (res.testType==='fisher_mc'?'Fisher exact (Monte-Carlo)':'Fisher exact') : 'Chi²';
  const testBadge = isFisher
    ? `<span style="background:rgba(168,85,247,0.15);color:#c084fc;border:1px solid rgba(168,85,247,0.3);border-radius:4px;padding:2px 8px;font-size:0.72rem;font-weight:700;margin-left:8px">FISHER</span>`
    : `<span style="background:rgba(59,130,246,0.15);color:#60a5fa;border:1px solid rgba(59,130,246,0.3);border-radius:4px;padding:2px 8px;font-size:0.72rem;font-weight:700;margin-left:8px">CHI²</span>`;

  // V de Cramér
  const vBadge = `<span style="background:rgba(0,212,170,0.1);color:#00d4aa;border:1px solid rgba(0,212,170,0.2);border-radius:4px;padding:2px 8px;font-size:0.72rem;font-weight:600">V = ${res.V.toFixed(3)} (${res.Vlabel})</span>`;

  const html = `<div class="card" id="${resultId}" data-cardtitle="${cardTitle.replace(/"/g,'&quot;')}" data-tablabel="${tabLabel.replace(/"/g,'&quot;')}" data-chi2="${res.chi2.toFixed(3)}" data-df="${df}" data-pval="${res.p.toFixed(4)}">
    ${varTitle}
    ${cochranWarning}
    <div id="ai_${resultId}" class="ai-interpretation" style="display:none;margin-top:10px;margin-bottom:10px"></div>
    ${tabCaption}
    <div style="overflow-x:auto">
      <table><thead><tr><th>${res.rowVar} / ${res.colVar}</th>${res.colVals.map(cv=>`<th>${cv}</th>`).join('')}<th>Total</th></tr></thead>
      <tbody>${res.rowVals.map(rv => {
        const total = res.rowTotals[rv] || 0;
        return `<tr><td><b>${rv}</b></td>${res.colVals.map(cv => {
          const obs = res.table[rv][cv];
          const pct = total > 0 ? ((obs/total)*100).toFixed(1) : '0.0';
          return `<td>${obs} (${pct}%)</td>`;
        }).join('')}<td><b>${total}</b></td></tr>`;
      }).join('')}
      </tbody></table>
    </div>
    <div style="margin-top:12px;overflow-x:auto">
      <table>
        <thead><tr><th>Test${testBadge}</th><th>Statistique</th><th>ddl</th><th>p-value</th><th>Force</th></tr></thead>
        <tbody>
          <tr>
            <td>${testLabel}</td>
            <td>${isFisher?'—':res.chi2.toFixed(3)}</td>
            <td>${isFisher?'—':df}</td>
            <td>${pValCell}</td>
            <td>${vBadge}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
      <button class="btn-var-interpret" onclick="interpretBivResult('${resultId}')">🤖 Interpréter</button>
    </div>
  </div>`;
  container.insertAdjacentHTML('beforeend', html);
}

// Patch runBivariateAnalyses to pass context for correlation labels
const _origRunBiv = runBivariateAnalyses;
window.runBivariateAnalyses = function() {
  const rowVar = document.getElementById('rowVarSelect').value;
  const selectedCols = Array.from(document.querySelectorAll('input[name="bivCol"]:checked')).map(cb => cb.value);
  const resultsDiv = document.getElementById('bivariateResults'); resultsDiv.innerHTML = '';
  window.__bivTabCounter = 0;
  selectedCols.forEach(colVar => {
    if(rowVar === colVar) return;
    resultsDiv._lastRowVar = rowVar;
    resultsDiv._lastColVar = colVar;
    const r = selectAndRunTest(rowVar, colVar);
    // Inject var names for correlation
    if(!r.rowVar) r.rowVar = rowVar;
    if(!r.colVar) r.colVar = colVar;
    renderBivariateResult(r, resultsDiv);
  });
};

// --- RÉGRESSION LINÉAIRE ---
// ─── AIDE RÉGRESSION : vérification locale, 0 token IA ───────────────────────
function checkRegressionFeasibility() {
  if (!DATA.length) return alert('Chargez des données d\'abord');
  const depVar = document.getElementById('regDepVar').value;
  const selectedIndep = Array.from(document.querySelectorAll('input[name="regCol"]:checked')).map(cb => cb.value);
  const out = document.getElementById('regFeasibilityResult');

  // Stats sur chaque variable
  function getNumInfo(colName) {
    const vals = DATA.map(r => parseFloat(String(r[colName]).replace(',','.'))).filter(v => !isNaN(v));
    return { n: vals.length, isNum: vals.length >= DATA.length * 0.5 };
  }
  function getColType(colName) {
    return (COLS.find(c => c.name === colName) || {type:'cat'}).type;
  }

  const depInfo = getNumInfo(depVar);
  const depType = getColType(depVar);

  let html = '<div style="background:var(--surface2);border-radius:8px;padding:12px;font-size:0.85rem;line-height:1.7">';
  html += `<b>Variable dépendante (Y) : ${depVar}</b><br>`;

  // Vérif Y
  const depOk = depType === 'num' && depInfo.n >= 5;
  if (!depOk) {
    html += `<span style="color:#ff6b6b">⛔ ${depVar} n'est pas numérique ou a trop peu de valeurs (n=${depInfo.n}). La régression linéaire nécessite une Y quantitative continue.</span>`;
    html += '</div>';
    out.innerHTML = html;
    return;
  }
  html += `<span style="color:#00d4aa">✅ ${depVar} : quantitative — n=${depInfo.n} — conforme</span><br><br>`;

  if (selectedIndep.length === 0) {
    html += '<span style="color:#ffa94d">⚠️ Aucune variable indépendante sélectionnée.</span>';
    html += '</div>'; out.innerHTML = html; return;
  }

  html += '<b>Variables indépendantes (X) :</b><br>';
  const possible = [], impossible = [];

  selectedIndep.forEach(xName => {
    if (xName === depVar) {
      html += `<span style="color:#ff6b6b">⛔ ${xName} : identique à Y — impossible.</span><br>`;
      impossible.push(xName); return;
    }
    const xType = getColType(xName);
    const xInfo = getNumInfo(xName);
    const nCommon = Math.min(depInfo.n, xInfo.n);

    if (xType !== 'num') {
      html += `<span style="color:#ff6b6b">⛔ ${xName} : qualitative — non compatible avec régression linéaire simple (transformer en variable indicatrice si nécessaire).</span><br>`;
      impossible.push(xName); return;
    }
    if (xInfo.n < 5) {
      html += `<span style="color:#ff6b6b">⛔ ${xName} : trop peu de valeurs numériques (n=${xInfo.n}).</span><br>`;
      impossible.push(xName); return;
    }
    if (nCommon < depInfo.n * 0.5) {
      html += `<span style="color:#ffa94d">⚠️ ${xName} : peu d'observations communes avec Y (n≈${nCommon}) — résultat peu fiable.</span><br>`;
      possible.push(xName); return;
    }
    // Vérif variance nulle
    const xVals = DATA.map(r => parseFloat(String(r[xName]).replace(',','.'))).filter(v => !isNaN(v));
    const meanX = xVals.reduce((a,b)=>a+b,0)/xVals.length;
    const varX = xVals.reduce((a,v)=>a+(v-meanX)**2,0)/xVals.length;
    if (varX === 0) {
      html += `<span style="color:#ff6b6b">⛔ ${xName} : variance nulle (valeur constante) — régression impossible.</span><br>`;
      impossible.push(xName); return;
    }
    html += `<span style="color:#00d4aa">✅ ${xName} : quantitative — n=${xInfo.n} — compatible</span><br>`;
    possible.push(xName);
  });

  html += '<br>';
  if (possible.length > 0) {
    html += `<b>Régressions possibles avec ${depVar} :</b> ${possible.map(x=>`<span style="background:rgba(0,212,170,0.15);border-radius:4px;padding:1px 6px">${depVar} ~ ${x}</span>`).join(' ')}`;
  }
  if (impossible.length > 0) {
    html += `<br><b>Impossible :</b> ${impossible.join(', ')}`;
  }
  if (possible.length === 0 && impossible.length > 0) {
    html += '<br><span style="color:#ff6b6b">Aucune régression réalisable avec les variables sélectionnées.</span>';
  }
  html += '</div>';
  out.innerHTML = html;
}

function runRegression() {
  const depVar = document.getElementById('regDepVar').value;
  const selectedIndep = Array.from(document.querySelectorAll('input[name="regCol"]:checked')).map(cb => cb.value);
  const resultsDiv = document.getElementById('regressionResults');
  resultsDiv.innerHTML = '';
  
  if (selectedIndep.length === 0) return alert('Sélectionnez au moins une variable indépendante');

  // Pas de titre de section affiché
  const theme = getTheme();

  const numStyle = (document.getElementById('numStyle')||{value:'arabic'}).value;
  function fmtRegNum(n) {
    if (numStyle === 'none') return '';
    if (numStyle === 'roman') { const r=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX']; return r[n-1]||n; }
    if (numStyle === 'decimal') return `4.${n}`;
    return n;
  }

  // Filtrer les variables numériques valides
  const validIndep = selectedIndep.filter(col => {
    const colType = (COLS.find(c => c.name === col) || {type:'cat'}).type;
    if (colType !== 'num') return false;
    const vals = DATA.map(r => parseFloat(String(r[col]).replace(',','.'))).filter(v => !isNaN(v));
    return vals.length >= 5;
  });

  if (validIndep.length === 0) {
    resultsDiv.insertAdjacentHTML('beforeend', '<div class="error-box">❌ Aucune variable indépendante numérique valide sélectionnée. Utilisez "Aide IA variables" pour vérifier la compatibilité.</div>');
    return;
  }

  // Extraire toutes les données en paires complètes (listwise deletion)
  function getCompleteData(yCol, xCols) {
    const rows = DATA.map(r => {
      const y = parseFloat(String(r[yCol]).replace(',','.'));
      const xs = xCols.map(col => parseFloat(String(r[col]).replace(',','.')));
      if (isNaN(y) || xs.some(v => isNaN(v))) return null;
      return { y, xs };
    }).filter(Boolean);
    return rows;
  }

  // Régression simple : 1 variable indépendante
  function simpleRegression(yVals, xVals) {
    const n = yVals.length;
    const meanY = yVals.reduce((a,b)=>a+b,0)/n;
    const meanX = xVals.reduce((a,b)=>a+b,0)/n;
    let sumXY=0, sumX2=0, sumY2=0;
    for(let i=0;i<n;i++){
      sumXY += (xVals[i]-meanX)*(yVals[i]-meanY);
      sumX2 += (xVals[i]-meanX)**2;
      sumY2 += (yVals[i]-meanY)**2;
    }
    const beta = sumX2 > 0 ? sumXY/sumX2 : 0;
    const alpha = meanY - beta*meanX;
    const r2 = sumX2>0 && sumY2>0 ? (sumXY**2)/(sumX2*sumY2) : 0;
    let sse=0;
    for(let i=0;i<n;i++) sse += (yVals[i]-(alpha+beta*xVals[i]))**2;
    const se = Math.sqrt(sse/(n-2));
    const seBeta = sumX2>0 ? se/Math.sqrt(sumX2) : 0;
    const tStat = seBeta>0 ? beta/seBeta : 0;
    const pVal = 2*(1 - tCDF(Math.abs(tStat), n-2));
    return { alpha, beta, r2, r: Math.sqrt(Math.abs(r2)), se, seBeta, tStat, pVal, n };
  }

  // Régression multiple OLS via moindres carrés (Gauss-Jordan)
  function multipleRegression(yVals, xMatrix) {
    const n = yVals.length;
    const k = xMatrix[0].length; // nb variables
    // Construire X avec colonne constante
    const X = xMatrix.map(row => [1, ...row]);
    const p = k + 1;
    // X'X
    const XtX = Array.from({length:p}, (_,i) => Array.from({length:p}, (_,j) => {
      let s=0; for(let r=0;r<n;r++) s += X[r][i]*X[r][j]; return s;
    }));
    // X'Y
    const XtY = Array.from({length:p}, (_,i) => { let s=0; for(let r=0;r<n;r++) s += X[r][i]*yVals[r]; return s; });
    // Résoudre (X'X)β = X'Y par Gauss-Jordan
    const aug = XtX.map((row,i) => [...row, XtY[i]]);
    for(let col=0;col<p;col++){
      let maxRow=col;
      for(let r2=col+1;r2<p;r2++) if(Math.abs(aug[r2][col])>Math.abs(aug[maxRow][col])) maxRow=r2;
      [aug[col],aug[maxRow]]=[aug[maxRow],aug[col]];
      const piv=aug[col][col];
      if(Math.abs(piv)<1e-12) continue;
      for(let j=col;j<=p;j++) aug[col][j]/=piv;
      for(let r2=0;r2<p;r2++){
        if(r2===col) continue;
        const f=aug[r2][col];
        for(let j=col;j<=p;j++) aug[r2][j]-=f*aug[col][j];
      }
    }
    const coeffs = aug.map(row=>row[p]);
    const alpha = coeffs[0];
    const betas = coeffs.slice(1);
    // Résidus et R²
    const meanY = yVals.reduce((a,b)=>a+b,0)/n;
    let sse=0, sst=0;
    for(let i=0;i<n;i++){
      const yHat = alpha + betas.reduce((s,b,j)=>s+b*xMatrix[i][j],0);
      sse += (yVals[i]-yHat)**2;
      sst += (yVals[i]-meanY)**2;
    }
    const r2 = sst>0 ? 1-sse/sst : 0;
    const r2adj = 1 - (1-r2)*(n-1)/(n-p);
    const mse = sse/(n-p);
    const fStat = sst>0 ? (r2/k)/((1-r2)/(n-p)) : 0;
    const fPval = 1 - fCDF(fStat, k, n-p);
    // Inversion (X'X)^-1 pour SE des coefficients
    const inv = Array.from({length:p}, (_,i) => Array.from({length:p}, (_,j) => i===j?1:0));
    const aug2 = XtX.map((row,i)=>[...row,...inv[i]]);
    for(let col=0;col<p;col++){
      let maxRow=col;
      for(let r2=col+1;r2<p;r2++) if(Math.abs(aug2[r2][col])>Math.abs(aug2[maxRow][col])) maxRow=r2;
      [aug2[col],aug2[maxRow]]=[aug2[maxRow],aug2[col]];
      const piv=aug2[col][col];
      if(Math.abs(piv)<1e-12) continue;
      for(let j=col;j<2*p;j++) aug2[col][j]/=piv;
      for(let r2=0;r2<p;r2++){
        if(r2===col) continue;
        const f=aug2[r2][col];
        for(let j=col;j<2*p;j++) aug2[r2][j]-=f*aug2[col][j];
      }
    }
    const invXtX = aug2.map(row=>row.slice(p));
    const seCoeffs = invXtX.map((row,i) => Math.sqrt(Math.abs(row[i]*mse)));
    const tStats = coeffs.map((c,i) => seCoeffs[i]>0 ? c/seCoeffs[i] : 0);
    const pVals = tStats.map((t,i) => 2*(1-tCDF(Math.abs(t), n-p)));
    return { alpha, betas, coeffs, seCoeffs, tStats, pVals, r2, r2adj, mse, fStat, fPval, n, p };
  }

  // CDF approximations
  function tCDF(t, df) {
    if (df <= 0) return 0.5;
    const x = df/(df+t*t);
    return 1 - 0.5*regularizedIncompleteGamma(df/2, df/(2*(df+t*t)))*Math.sign(t+0.0001);
  }
  function fCDF(f, d1, d2) {
    if (f <= 0) return 0;
    return regularizedIncompleteGamma(d1/2, d1*f/(d1*f+d2));
  }
  function pStar(p) {
    if (p < 0.001) return '<b style="color:#ff4444">p &lt; 0.001 ✅✅</b>';
    if (p < 0.01)  return `<b style="color:#ff4444">p &lt; 0.01 ✅✅</b>`;
    if (p < 0.05)  return `<b style="color:#ff4444">p &lt; 0.05 ✅</b>`;
    return `p = ${p.toFixed(3)} ❌`;
  }

  let tabCounter = 0;

  // === CAS 1 : Régression simple (1 variable) ===
  if (validIndep.length === 1) {
    const xCol = validIndep[0];
    const rows = getCompleteData(depVar, [xCol]);
    if (rows.length < 5) {
      resultsDiv.insertAdjacentHTML('beforeend', `<div class="error-box">❌ Pas assez d'observations communes entre ${depVar} et ${xCol} (n=${rows.length})</div>`);
      return;
    }
    const yVals = rows.map(r=>r.y), xVals = rows.map(r=>r.xs[0]);
    const reg = simpleRegression(yVals, xVals);
    tabCounter++;
    const tabLabel = numStyle !== 'none' ? `Tableau ${fmtRegNum(tabCounter)} : Régression linéaire simple — ${depVar} ~ ${xCol}` : `Régression linéaire simple — ${depVar} ~ ${xCol}`;
    // Grand titre variable — identique varTitle descriptif
    const sectionNumS = numStyle !== 'none' ? fmtRegNum(tabCounter) + '. ' : '';
    const cardTitleS = `Influence de ${xCol} sur ${depVar}`;
    const varTitleS = theme
      ? `<div style="font-size:1rem;font-weight:700;color:var(--text);border-bottom:2px solid var(--border);padding-bottom:6px;margin-bottom:12px">${sectionNumS}${cardTitleS}</div>`
      : `<div style="font-size:0.95rem;font-weight:600;color:var(--text);border-bottom:1px solid var(--border);padding-bottom:5px;margin-bottom:12px">${cardTitleS}</div>`;
    // Caption tableau — identique tabCaption descriptif
    const tabCaptionS = `<div class="fig-caption" style="font-size:0.75rem;color:var(--muted);margin-bottom:4px">${tabLabel}</div>`;
    const html = `<div class="card" id="regResultCard" data-cardtitle="${cardTitleS.replace(/"/g,'&quot;')}" data-tablabel="${tabLabel.replace(/"/g,'&quot;')}">
      ${varTitleS}
      <div id="ai_reg_card" class="ai-interpretation" style="display:none;margin-top:10px;margin-bottom:10px"></div>
      ${tabCaptionS}
      <table>
        <tr><th>Paramètre</th><th>Valeur</th></tr>
        <tr><td><b>Équation</b></td><td>Y = ${reg.alpha.toFixed(4)} + ${reg.beta.toFixed(4)} × X</td></tr>
        <tr><td><b>R²</b></td><td>${reg.r2.toFixed(4)}</td></tr>
        <tr><td><b>R</b></td><td>${reg.r.toFixed(4)}</td></tr>
        <tr><td><b>Coefficient β</b></td><td>${reg.beta.toFixed(4)} (SE: ${reg.seBeta.toFixed(4)})</td></tr>
        <tr><td><b>t-statistique</b></td><td>${reg.tStat.toFixed(4)}</td></tr>
        <tr><td><b>p-value</b></td><td>${pStar(reg.pVal)}</td></tr>
        <tr><td><b>N</b></td><td>${reg.n}</td></tr>
      </table>
    </div>`;
    resultsDiv.insertAdjacentHTML('beforeend', html);

  } else {
    // === CAS 2 : Régression multiple ===
    const rows = getCompleteData(depVar, validIndep);
    if (rows.length < validIndep.length + 2) {
      resultsDiv.insertAdjacentHTML('beforeend', `<div class="error-box">❌ Pas assez d'observations complètes (n=${rows.length}) pour ${validIndep.length} variables indépendantes</div>`);
      return;
    }
    const yVals = rows.map(r=>r.y);
    const xMatrix = rows.map(r=>r.xs);
    const reg = multipleRegression(yVals, xMatrix);
    tabCounter++;
    const tabLabel = numStyle !== 'none' ? `Tableau ${fmtRegNum(tabCounter)} : Régression linéaire multiple — ${depVar} ~ ${validIndep.join(' + ')}` : `Régression linéaire multiple — ${depVar} ~ ${validIndep.join(' + ')}`;
    
    // Grand titre variable — identique varTitle descriptif
    const sectionNumM = numStyle !== 'none' ? fmtRegNum(tabCounter) + '. ' : '';
    const cardTitleM = validIndep.length === 2
      ? `Influence de ${validIndep[0]} et ${validIndep[1]} sur ${depVar}`
      : `Facteurs explicatifs de ${depVar} (${validIndep.length} prédicteurs)`;
    const varTitleM = theme
      ? `<div style="font-size:1rem;font-weight:700;color:var(--text);border-bottom:2px solid var(--border);padding-bottom:6px;margin-bottom:12px">${sectionNumM}${cardTitleM}</div>`
      : `<div style="font-size:0.95rem;font-weight:600;color:var(--text);border-bottom:1px solid var(--border);padding-bottom:5px;margin-bottom:12px">${cardTitleM}</div>`;
    // Caption tableau — identique tabCaption descriptif
    const tabCaptionM = `<div class="fig-caption" style="font-size:0.75rem;color:var(--muted);margin-bottom:4px">${tabLabel}</div>`;

    // Tableau des coefficients
    const coeffRows = validIndep.map((xName, i) => {
      const b = reg.betas[i], se = reg.seCoeffs[i+1], t = reg.tStats[i+1], p = reg.pVals[i+1];
      return `<tr><td><b>${xName}</b></td><td>${b.toFixed(4)}</td><td>${se.toFixed(4)}</td><td>${t.toFixed(4)}</td><td>p ${pStar(p)}</td></tr>`;
    }).join('');

    const html = `<div class="card" id="regResultCard" data-cardtitle="${cardTitleM.replace(/"/g,'&quot;')}" data-tablabel="${tabLabel.replace(/"/g,'&quot;')}">
      ${varTitleM}
      <div id="ai_reg_card" class="ai-interpretation" style="display:none;margin-top:10px;margin-bottom:10px"></div>
      ${tabCaptionM}
      <div style="margin-bottom:12px;padding:10px;background:var(--surface2);border-radius:8px;">
        <div style="font-size:.8rem;color:var(--muted);margin-bottom:6px;font-weight:600">QUALITÉ DU MODÈLE</div>
        <div style="display:flex;flex-wrap:wrap;gap:16px;font-size:.85rem;">
          <span>R² = <b style="color:var(--accent)">${reg.r2.toFixed(4)}</b></span>
          <span>R² ajusté = <b style="color:var(--accent)">${reg.r2adj.toFixed(4)}</b></span>
          <span>F = <b>${reg.fStat.toFixed(4)}</b></span>
          <span>p (modèle) ${pStar(reg.fPval)}</span>
          <span>N = <b>${reg.n}</b></span>
        </div>
      </div>
      <div style="font-size:.8rem;color:var(--muted);margin-bottom:6px;font-weight:600">COEFFICIENTS</div>
      <table>
        <tr><th>Variable</th><th>β</th><th>SE</th><th>t</th><th>Significativité</th></tr>
        <tr><td><b>Constante</b></td><td>${reg.alpha.toFixed(4)}</td><td>${reg.seCoeffs[0].toFixed(4)}</td><td>${reg.tStats[0].toFixed(4)}</td><td>p ${pStar(reg.pVals[0])}</td></tr>
        ${coeffRows}
      </table>
    </div>`;
    resultsDiv.insertAdjacentHTML('beforeend', html);
  }
}

// --- LOGIQUE IA ---
async function interpretResult(id, rowVar, colVar) {
  const container = document.getElementById('ai_' + id);
  const btn = document.querySelector(`#${id} .btn-ai`);
  const res = calculateChi2(rowVar, colVar);
  const df = (res.rowVals.length - 1) * (res.colVals.length - 1);
  const p = chi2pvalue(res.chi2, df);
  
  let dataSummary = `Analyse croisée entre "${rowVar}" (lignes) et "${colVar}" (colonnes).\n`;
  dataSummary += `Résultats statistiques : Chi² = ${res.chi2.toFixed(3)}, ddl = ${df}, p-value = ${p.toFixed(4)}.\n`;
  dataSummary += `Table de contingence (Effectifs et % en ligne) :\n`;
  res.rowVals.forEach(rv => {
    dataSummary += `- ${rv} : `;
    res.colVals.forEach(cv => {
      const n = res.table[rv][cv];
      const pct = res.rowTotals[rv] > 0 ? ((n/res.rowTotals[rv])*100).toFixed(1) : '0';
      dataSummary += `${cv}=${n}(${pct}%), `;
    });
    dataSummary += `Total=${res.rowTotals[rv]}\n`;
  });

  const prompt = `En tant qu'expert en statistiques, interprète les résultats suivants de manière concise et professionnelle (en français). 
  Analyse si la relation est statistiquement significative et décris les tendances majeures observées dans les pourcentages. 
  Données :\n${dataSummary}`;

  container.style.display = 'block';
  container.innerHTML = '<div class="loading-spinner"></div> Analyse en cours par l\'IA...';
  btn.disabled = true;

  try {
    btn.disabled = true;
    await callAI(prompt, container);
  } finally {
    btn.disabled = false;
  }
}

// --- EXPORTS COMPLETS ---
async function exportCompleteExcel() {
  if (!DATA.length) return alert("Aucune donnée chargée.");
  const wb = XLSX.utils.book_new();
  
  // Sheet 1: Descriptif
  const descRows = [];
  COLS.forEach(col => {
    const vals = DATA.map(r => String(r[col.name]).trim()).filter(v => v && v !== 'undefined');
    if (col.type === 'num') {
      const numVals = vals.map(v => parseFloat(v.replace(',', '.'))).filter(v => !isNaN(v));
      const mean = numVals.reduce((a,b)=>a+b,0) / numVals.length;
      const std = Math.sqrt(numVals.reduce((a,v)=>(a+(v-mean)**2),0) / numVals.length);
      descRows.push({ Variable: col.name, Type: 'Quantitative', Moyenne: mean.toFixed(3), EcartType: std.toFixed(3), N: numVals.length });
    } else {
      const freq = {}; vals.forEach(v => freq[v] = (freq[v]||0)+1);
      Object.entries(freq).sort((a,b)=>b[1]-a[1]).forEach(([v,n]) => {
        descRows.push({ Variable: col.name, Type: 'Qualitative', Modalité: v, N: n, Pct: ((n/vals.length)*100).toFixed(1)+'%' });
      });
    }
  });
  const ws1 = XLSX.utils.json_to_sheet(descRows);
  XLSX.utils.book_append_sheet(wb, ws1, "Descriptif");
  
  // Sheet 2: Données brutes
  const ws2 = XLSX.utils.json_to_sheet(DATA);
  XLSX.utils.book_append_sheet(wb, ws2, "Données");
  
  XLSX.writeFile(wb, "Rapport_Complet.xlsx");
}

// Utilitaire : convertit un canvas Chart.js en ArrayBuffer PNG
async function canvasToArrayBuffer(canvas) {
  // Créer un canvas intermédiaire avec fond blanc
  const offscreen = document.createElement('canvas');
  offscreen.width  = canvas.width;
  offscreen.height = canvas.height;
  const ctx = offscreen.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, offscreen.width, offscreen.height);
  ctx.drawImage(canvas, 0, 0);
  canvas = offscreen; // utiliser la version avec fond blanc
  // suite identique ↓
  return new Promise((resolve, reject) => {
    try {
      canvas.toBlob(blob => {
        if (!blob) { reject(new Error('canvas vide')); return; }
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsArrayBuffer(blob);
      }, 'image/png');
    } catch(e) { reject(e); }
  });
}

async function exportCompleteWord() {
  if (!DATA.length) return alert("Aucune donnée chargée.");
  const docxLib = getDocxLib();
  if (!docxLib) return alert("❌ Librairie Word non chargée.");
  
  const { Document, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, Packer, ImageRun, AlignmentType, HeadingLevel, BorderStyle } = docxLib;

  // ── Typo settings ──────────────────────────────────────────────────────────
  const TY = getTypoSettings();
  const pt = n => n * 2; // pt → demi-points docx

  // ── Helpers visuels ────────────────────────────────────────────────────────
  function makeSectionTitle(text) {
    return new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [new TextRun({ text, bold: TY.section.bold, italics: !!TY.section.italic, size: pt(TY.section.size), font: TY.section.font, color: TY.section.color })],
      spacing: { before: 480, after: 160 }
    });
  }
  function makeSubTitle(text) {
    return new Paragraph({
      heading: HeadingLevel.HEADING_2,
      children: [new TextRun({ text, bold: TY.sub.bold, italics: !!TY.sub.italic, size: pt(TY.sub.size), font: TY.sub.font, color: TY.sub.color })],
      spacing: { before: 280, after: 80 }
    });
  }
  function makeCaption(text, align) {
    return new Paragraph({
      alignment: align || AlignmentType.LEFT,
      spacing: { before: 60, after: 40 },
      children: [new TextRun({ text, size: pt(TY.caption.size), italics: !!TY.caption.italic, color: TY.caption.color, font: TY.body.font })]
    });
  }
  function spacer(after) {
    return new Paragraph({ children: [new TextRun({ text: '' })], spacing: { after: after || 120 } });
  }
  // IA : texte déjà dans le DOM — aucun appel API. Toujours AVANT tableau+figure.
  function pushAiText(rawText) {
    if (!rawText || rawText.includes('Analyse en cours') || rawText.includes('loading') || rawText.trim().length < 5) return;
    rawText.split(/\n+/).forEach(line => {
      const t = line.trim();
      if (!t) return;
      children.push(new Paragraph({
        children: [new TextRun({
          text: t,
          size: pt(TY.ai.size),
          italics: !!TY.ai.italic,
          color: TY.ai.color,
          font: TY.ai.font || TY.body.font   // respecte la police IA des réglages
        })],
        spacing: { before: 40, after: 40 }
      }));
    });
    children.push(spacer(80));
  }
  function makeStyledHeaderRow(...labels) {
    return new TableRow({
      children: labels.map(l => new TableCell({
        shading: { fill: 'D9D9D9', type: 'clear', color: 'auto' },
        children: [new Paragraph({
          children: [new TextRun({ text: String(l), bold: true, size: pt(TY.body.size), font: TY.body.font })],
          spacing: { before: 60, after: 60 }
        })]
      }))
    });
  }
  function makeStyledDataRow(...values) {
    return new TableRow({
      children: values.map((v, i) => {
        const str = String(v);
        const isNum = i > 0 && /^[\d\.,\-\+\s%]+$/.test(str.trim());
        return new TableCell({
          children: [new Paragraph({
            alignment: isNum ? AlignmentType.RIGHT : AlignmentType.LEFT,
            children: [new TextRun({ text: str, size: pt(TY.body.size), font: TY.body.font })],
            spacing: { before: 40, after: 40 }
          })]
        });
      })
    });
  }
  function htmlTableToWordRows(tableEl) {
    const rows = [];
    tableEl.querySelectorAll('tr').forEach((tr, i) => {
      const cells = Array.from(tr.querySelectorAll('th,td')).map(c => (c.innerText || c.textContent || '').trim());
      if (!cells.length) return;
      rows.push(i === 0 ? makeStyledHeaderRow(...cells) : makeStyledDataRow(...cells));
    });
    return rows;
  }
  function pushLongText(rawText) {
    const blocks = rawText.split(/\n{2,}/);
    blocks.forEach(block => {
      const lines = block.split(/\n/).map(l => l.trim()).filter(Boolean);
      lines.forEach(line => {
        const clean = line.replace(/\*\*/g, '').replace(/^#+\s*/, '').trim();
        if (!clean) return;
        const isSub = /^##/.test(line) || (clean === clean.toUpperCase() && clean.length <= 80 && /[A-ZÀÂÉÈÊËÎÏÔÙÛÜ]{3,}/.test(clean));
        if (isSub) {
          children.push(makeSubTitle(clean));
        } else {
          const isReco = /^\d+[\.\)]\s/.test(clean);
          children.push(new Paragraph({
            children: [new TextRun({ text: clean, size: pt(TY.body.size), font: TY.body.font, bold: isReco && TY.reco.bold })],
            spacing: { before: isReco ? 100 : 80, after: isReco ? 60 : 80 },
            indent: isReco && TY.reco.indent ? { left: 360 } : undefined
          }));
        }
      });
      children.push(spacer(100));
    });
  }

  // ── En-tête du document ────────────────────────────────────────────────────
  const children = [
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [new TextRun({ text: "Rapport d'Analyse Statistique Complet", bold: TY.title.bold, size: pt(TY.title.size), font: TY.title.font, color: TY.title.color })],
      spacing: { after: 120 }
    }),
    new Paragraph({
      children: [new TextRun({ text: `Généré le ${new Date().toLocaleString('fr-FR')}`, size: pt(9), color: '888888', italics: true, font: TY.body.font })],
      spacing: { after: 400 }
    })
  ];

  // ── Lire les 3 selects du HTML ─────────────────────────────────────────────
  const wordLayout  = (document.getElementById('layoutMode')  || { value: 'table_first' }).value;
  const wordDisplay = (document.getElementById('displayMode') || { value: 'both' }).value;   // freq | pct | both
  const wordNumStyle = (document.getElementById('numStyle')   || { value: 'arabic' }).value; // arabic | roman | decimal | none

  const wordShowTable = wordLayout !== 'chart_only';
  const wordShowChart = wordLayout !== 'table_only';
  const wordChartFirst = wordLayout === 'chart_first';

  // Formatteur de numéro identique au HTML
  function wFmtNum(n, type) {
    if (wordNumStyle === 'none') return '';
    if (wordNumStyle === 'roman') {
      const r = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX'];
      return r[n - 1] || String(n);
    }
    if (wordNumStyle === 'decimal') return type === 'fig' ? `2.${n}` : `1.${n}`;
    return String(n); // arabic
  }
  function wTabLabel(n, text) {
    return wordNumStyle !== 'none' ? `Tableau ${wFmtNum(n, 'tab')} : ${text}` : text;
  }
  function wFigLabel(n, text) {
    return wordNumStyle !== 'none' ? `Figure ${wFmtNum(n, 'fig')} : ${text}` : text;
  }

  // ── Collecter les graphiques ───────────────────────────────────────────────
  const chartMap = {};
  if (wordShowChart) {
    for (const card of document.querySelectorAll('#descContainer .card')) {
      const colName = card.getAttribute('data-col');
      const canvasEl = card.querySelector('canvas');
      if (colName && canvasEl) {
        const col = COLS.find(c => c.name === colName);
        if (col) {
          try {
            const vals = cleanVals(col.name);
            const freq = {}; vals.forEach(v => freq[v] = (freq[v] || 0) + 1);
            const isPie = Object.keys(freq).length <= 4 && col.type !== 'num';
            chartMap[col.name] = { buffer: await canvasToArrayBuffer(canvasEl), isPie };
          } catch(e) { chartMap[col.name] = null; }
        }
      }
    }
  }

  // ── 1. Statistiques Descriptives ───────────────────────────────────────────
  children.push(makeSectionTitle('1. Statistiques Descriptives'));
  let wTabN = 1; let wFigN = 1;

  for (const col of COLS) {
   try {
    const vals = DATA.map(r => String(r[col.name]).trim()).filter(v => v && v !== 'undefined');

    // Titre de carte : lire depuis le DOM (respecte numStyle + thème)
    const descCard = Array.from(document.querySelectorAll('#descContainer .card')).find(c => c.getAttribute('data-col') === col.name);
    let descCardTitle = col.name;
    if (descCard) {
      const titleEl = descCard.querySelector('div[style*="font-weight:700"]') || descCard.querySelector('div[style*="font-weight:600"]');
      if (titleEl) {
        const clone = titleEl.cloneNode(true);
        clone.querySelectorAll('button,div').forEach(n => n.remove());
        descCardTitle = (clone.innerText || clone.textContent || '').trim() || col.name;
      }
    }
    children.push(makeSubTitle(descCardTitle));

    // ── Bloc tableau ──
    function pushTableBlock() {
      if (!wordShowTable) return;
      if (col.type === 'num') {
        const numVals = vals.map(v => parseFloat(v.replace(',', '.'))).filter(v => !isNaN(v));
        if (!numVals.length) return;
        const mean = numVals.reduce((a, b) => a + b, 0) / numVals.length;
        const std = Math.sqrt(numVals.reduce((a, v) => a + (v - mean) ** 2, 0) / numVals.length);
        const sorted = [...numVals].sort((a, b) => a - b);
        const median = sorted[Math.floor(sorted.length / 2)];
        children.push(makeCaption(wTabLabel(wTabN++, `Statistiques descriptives de ${col.name}`)));
        children.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: [
          makeStyledHeaderRow('Statistique', 'Valeur'),
          makeStyledDataRow('N', numVals.length),
          makeStyledDataRow('Moyenne', mean.toFixed(3)),
          makeStyledDataRow('Écart-type', std.toFixed(3)),
          makeStyledDataRow('Médiane', median.toFixed(3)),
          makeStyledDataRow('Min', sorted[0].toFixed(3)),
          makeStyledDataRow('Max', sorted[sorted.length - 1].toFixed(3))
        ]}));
      } else {
        const freq = {}; vals.forEach(v => freq[v] = (freq[v] || 0) + 1);
        const total = vals.length;
        // Colonnes selon displayMode
        const showN   = wordDisplay !== 'pct';
        const showPct = wordDisplay !== 'freq';
        const headers = ['Modalité'];
        if (showN)   headers.push('n');
        if (showPct) headers.push('%');
        const rows = [makeStyledHeaderRow(...headers)];
        Object.entries(freq).sort((a, b) => b[1] - a[1]).forEach(([v, n]) => {
          const rowVals = [v];
          if (showN)   rowVals.push(n);
          if (showPct) rowVals.push(((n / total) * 100).toFixed(1) + '%');
          rows.push(makeStyledDataRow(...rowVals));
        });
        children.push(makeCaption(wTabLabel(wTabN++, `Répartition de ${col.name}`)));
        children.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows }));
      }
      children.push(spacer(80));
    }

    // ── Bloc figure ──
    function pushFigBlock() {
      if (!wordShowChart || !chartMap[col.name]) return;
      try {
        const { buffer, isPie } = chartMap[col.name];
        children.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 80, after: 40 },
          children: [new ImageRun({ data: buffer, transformation: isPie ? { width: 320, height: 320 } : { width: 560, height: 300 }, type: 'png' })]
        }));
        children.push(makeCaption(wFigLabel(wFigN++, `Distribution de ${col.name}`), AlignmentType.CENTER));
        children.push(spacer(60));
      } catch(e) { /* image non bloquante */ }
    }

    // ── IA : TOUJOURS avant tableau et figure ──
    if (descCard) {
      const aiBloc = descCard.querySelector('.ai-desc-var');
      pushAiText(aiBloc ? (aiBloc.innerText || '').trim() : '');
    }

    // ── Ordre fidèle au select Affichage ──
    if (wordChartFirst) {
      pushFigBlock();
      pushTableBlock();
    } else {
      pushTableBlock();
      pushFigBlock();
    }

    children.push(spacer(60));
   } catch(e) { console.warn('[Export Word] Variable ignorée :', col.name, e.message); }
  }

  // ── 2. Analyses Bivariées ──────────────────────────────────────────────────
  const bivCards = document.querySelectorAll('#bivariateResults .card');
  if (bivCards.length > 0) {
    children.push(makeSectionTitle('2. Analyses Bivariées'));
    bivCards.forEach(card => {
      const cardTitle = card.getAttribute('data-cardtitle') || '';
      const tabLabelAttr = card.getAttribute('data-tablabel') || '';
      if (cardTitle) children.push(makeSubTitle(cardTitle));

      // IA (avant le tableau) → Caption → Tableau(x)
      const bivAiBloc = document.getElementById('ai_' + card.id);
      pushAiText(bivAiBloc ? (bivAiBloc.innerText || '').trim() : '');

      if (tabLabelAttr) children.push(makeCaption(tabLabelAttr));
      card.querySelectorAll('table').forEach(tableEl => {
        const rows = htmlTableToWordRows(tableEl);
        if (rows.length) {
          children.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows }));
          children.push(spacer(60));
        }
      });

      children.push(spacer(120));
    });
  }

  // ── 3. Régression ─────────────────────────────────────────────────────────
  const regCards = document.querySelectorAll('#regressionResults .card');
  if (regCards.length > 0) {
    children.push(makeSectionTitle('3. Analyse de Régression'));
    regCards.forEach(card => {
      const cardTitle = card.getAttribute('data-cardtitle') || '';
      const tabLabelAttr = card.getAttribute('data-tablabel') || '';
      if (cardTitle) children.push(makeSubTitle(cardTitle));

      const regAiBloc = document.getElementById('ai_reg_card');
      pushAiText(regAiBloc ? (regAiBloc.innerText || '').trim() : '');

      if (tabLabelAttr) children.push(makeCaption(tabLabelAttr));
      card.querySelectorAll('table').forEach(tableEl => {
        const rows = htmlTableToWordRows(tableEl);
        if (rows.length) {
          children.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows }));
          children.push(spacer(60));
        }
      });

      children.push(spacer(80));
    });
  }

  // ── 4. Discussion ─────────────────────────────────────────────────────────
  const discussionEl = document.getElementById('discussionContent');
  const discussionText = discussionEl ? (discussionEl.innerText || '').trim() : '';
  if (discussionText) {
    children.push(makeSectionTitle('4. Discussion'));
    pushLongText(discussionText);
  }

  // ── 5. Conclusion & Recommandations ───────────────────────────────────────
  const conclusionEl = document.getElementById('conclusionContent');
  const conclusionText = conclusionEl ? (conclusionEl.innerText || '').trim() : '';
  if (conclusionText) {
    children.push(makeSectionTitle('5. Conclusion et Recommandations'));
    pushLongText(conclusionText);
  }

  const doc = new Document({
    styles: {
      default: { document: { run: { font: TY.body.font, size: pt(TY.body.size) } } },
      paragraphStyles: [
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { size: pt(TY.section.size), bold: TY.section.bold, font: TY.section.font, color: TY.section.color },
          paragraph: { spacing: { before: 400, after: 160 }, outlineLevel: 0 } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { size: pt(TY.sub.size), bold: TY.sub.bold, font: TY.sub.font, color: TY.sub.color },
          paragraph: { spacing: { before: 240, after: 80 }, outlineLevel: 1 } },
      ]
    },
    sections: [{ children }]
  });
  const blob = await Packer.toBlob(doc);
  downloadBlob(blob, "Rapport_Complet.docx");
}

async function exportCompletePDF() {
  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    const margin = 10;
    const pageWidth = doc.internal.pageSize.getWidth();
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(0, 212, 170);
    doc.text("Rapport d'Analyse Statistique Complet", margin, 20);
    
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Généré le ${new Date().toLocaleString()}`, margin, 28);
    
    let currentY = 40;

    // Créer un conteneur temporaire pour tous les résultats
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px';
    tempContainer.style.top = '-9999px';
    tempContainer.style.width = '800px';
    tempContainer.style.backgroundColor = '#141d2e';
    
    // Copier tous les résultats visibles
    const descCards = document.querySelectorAll('#descContainer .card');
    const bivCards = document.querySelectorAll('#bivariateResults .card');
    const regCards = document.querySelectorAll('#regressionResults .card');
    
    if (descCards.length === 0 && bivCards.length === 0 && regCards.length === 0) {
      alert("Aucun résultat à exporter. Lancez des analyses d'abord.");
      return;
    }
    
    // Ajouter titre
    const titleDiv = document.createElement('div');
    titleDiv.style.padding = '20px';
    titleDiv.style.fontSize = '18px';
    titleDiv.style.fontWeight = 'bold';
    titleDiv.style.color = '#00d4aa';
    titleDiv.style.backgroundColor = '#141d2e';
    titleDiv.innerHTML = '📊 Statistiques Descriptives';
    tempContainer.appendChild(titleDiv);
    
    descCards.forEach(card => {
      const clone = card.cloneNode(true);
      tempContainer.appendChild(clone);
    });
    
    if (bivCards.length > 0) {
      const bivTitle = document.createElement('div');
      bivTitle.style.padding = '20px';
      bivTitle.style.fontSize = '18px';
      bivTitle.style.fontWeight = 'bold';
      bivTitle.style.color = '#00d4aa';
      bivTitle.style.backgroundColor = '#141d2e';
      bivTitle.innerHTML = '🔀 Analyses Bivariées';
      tempContainer.appendChild(bivTitle);
      
      bivCards.forEach(card => {
        const clone = card.cloneNode(true);
        tempContainer.appendChild(clone);
      });
    }
    
    if (regCards.length > 0) {
      const regTitle = document.createElement('div');
      regTitle.style.padding = '20px';
      regTitle.style.fontSize = '18px';
      regTitle.style.fontWeight = 'bold';
      regTitle.style.color = '#00d4aa';
      regTitle.style.backgroundColor = '#141d2e';
      regTitle.innerHTML = '📈 Régression';
      tempContainer.appendChild(regTitle);
      
      regCards.forEach(card => {
        const clone = card.cloneNode(true);
        tempContainer.appendChild(clone);
      });
    }
    
    document.body.appendChild(tempContainer);
    
    // Capturer le conteneur
    const canvas = await html2canvas(tempContainer, {
      backgroundColor: '#141d2e',
      scale: 1.5,
      logging: false,
      useCORS: true,
      allowTaint: true
    });
    
    // Diviser le canvas en pages
    const imgData = canvas.toDataURL('image/png');
    const imgProps = doc.getImageProperties(imgData);
    const pdfWidth = pageWidth - (2 * margin);
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    const pageHeight = 277; // hauteur utile de la page A4
    
    let yPosition = 0;
    let pageNum = 0;
    
    while (yPosition < imgProps.height) {
      if (pageNum > 0) doc.addPage();
      
      const sourceY = yPosition;
      const sourceHeight = Math.min(pageHeight * imgProps.height / pdfHeight, imgProps.height - yPosition);
      
      // Créer un canvas pour cette portion
      const pageCanvas = document.createElement('canvas');
      pageCanvas.width = canvas.width;
      pageCanvas.height = (sourceHeight * canvas.width) / imgProps.width;
      
      const ctx = pageCanvas.getContext('2d');
      ctx.drawImage(canvas, 0, -sourceY * canvas.width / imgProps.width);
      
      const pageImgData = pageCanvas.toDataURL('image/png');
      doc.addImage(pageImgData, 'PNG', margin, 30, pdfWidth, (sourceHeight * pdfWidth) / imgProps.width);
      
      yPosition += sourceHeight;
      pageNum++;
    }
    
    document.body.removeChild(tempContainer);
    doc.save("Rapport_Complet.pdf");
    alert('✓ PDF exporté avec succès!');
    
  } catch (err) {
    console.error('Erreur PDF:', err);
    alert('❌ Erreur lors de l\'export PDF: ' + err.message);
  }
}

// --- HELPERS ---
function getDocxLib() {
  const raw = window.docx;
  if (!raw) return null;
  if (raw.Document && raw.Packer) return raw;
  if (raw.default && raw.default.Document) return raw.default;
  return null;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

function makeHeaderRow(docxLib, ...labels) {
  const { TableRow, TableCell, Paragraph, TextRun } = docxLib;
  return new TableRow({ children: labels.map(l => new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: l, bold: true })] })] })) });
}

function makeDataRow(docxLib, ...values) {
  const { TableRow, TableCell, Paragraph } = docxLib;
  return new TableRow({ children: values.map(v => new TableCell({ children: [new Paragraph(String(v))] })) });
}

// ─── CACHE IA : sauvegarde des interprétations ───────────────────────────────
const AI_CACHE = {
  get(key) { try { return localStorage.getItem('ai_cache_' + key) || null; } catch(e) { return null; } },
  set(key, val) { try { localStorage.setItem('ai_cache_' + key, val); } catch(e) {} },
  clear() { Object.keys(localStorage).filter(k => k.startsWith('ai_cache_')).forEach(k => localStorage.removeItem(k)); }
};

function getTheme() { return (document.getElementById('study_theme') || {value:''}).value.trim(); }

// ─── NIVEAU D'INTERPRÉTATION IA ───────────────────────────────────────────────
function getInterpretLevel() {
  // Le select a toujours priorité ; localStorage seulement si pas de select dispo
  const mainSel = document.getElementById('aiInterpretLevel');
  if (mainSel && mainSel.value) return mainSel.value;
  return localStorage.getItem('ai_interpret_level') || 'court';
}
function buildLevelInstruction(level) {
  const map = {
    court:       "LONGUEUR STRICTE : exactement 1 phrase unique de 40 à 75 mots, pas plus, pas moins. Une seule phrase, point final. Cite les chiffres clés.",
    moyen:       "LONGUEUR STRICTE : exactement 1 phrase de 80 à 100 mots. Une seule phrase, point final. Inclure significativité, chiffres principaux et brève mise en perspective.",
    detaille:    "LONGUEUR : 300 à 600 mots, style mémoire de Master. Plusieurs paragraphes thématiques (titres en majuscules si besoin). Analyse approfondie : significativité, effet, magnitude, comparaisons internes, implications méthodologiques.",
    publication: "LONGUEUR : 600 à 1000 mots, style article de revue indexée ou thèse de doctorat. Titres de section en majuscules. Couvre : (1) résultats précis, (2) significativité et effet, (3) comparaison avec la littérature, (4) implications cliniques ou épidémiologiques, (5) limites, (6) recommandations."
  };
  return map[level] || map.court;
}
function getStudyNum() {
  // Numéro d'ordre tableau/figure stocké par session
  if (!window._figCounter) window._figCounter = { tab:0, fig:0 };
  return window._figCounter;
}
function nextTableNum() { const c = getStudyNum(); c.tab++; return c.tab; }
function nextFigNum()   { const c = getStudyNum(); c.fig++; return c.fig; }
function resetCounters() { window._figCounter = { tab:0, fig:0 }; }
function setVarDisplay(colName, mode) {
  if (!window.__varDisplay) window.__varDisplay = {};
  // Toggle : si déjà ce mode → retour au global
  window.__varDisplay[colName] = (window.__varDisplay[colName] === mode) ? null : mode;
  renderDescriptive();
}

// ══════════════ TYPOGRAPHIE WORD ══════════════
const TYPO_DEFAULTS = {
  title:   { font:'Times New Roman', size:20, bold:true,  italic:false, color:'#000000' },
  section: { font:'Times New Roman', size:14, bold:true,  italic:false, color:'#1a365d' },
  sub:     { font:'Times New Roman', size:13, bold:true,  italic:false, color:'#2c5282' },
  caption: { size:9,  italic:true,  color:'#555555' },
  body:    { font:'Times New Roman', size:12 },
  ai:      { font:'Times New Roman', size:12, italic:false, color:'#333333' },
  reco:    { bold:true, indent:true }
};

function getTypoSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem('sa_typo') || '{}');
    const d = TYPO_DEFAULTS;
    // parseBool : retourne la valeur sauvegardée si présente, sinon le défaut
    const bool = (val, def) => (val !== undefined && val !== null) ? !!val : def;
    const color = (val, def) => ((val || def) + '').replace(/^#/, '');
    return {
      title:   { font: saved.title_font   || d.title.font,   size: parseInt(saved.title_size   || d.title.size),   bold: bool(saved.title_bold,   d.title.bold),   italic: bool(saved.title_italic,   false),            color: color(saved.title_color,   d.title.color)   },
      section: { font: saved.section_font || d.section.font, size: parseInt(saved.section_size || d.section.size), bold: bool(saved.section_bold, d.section.bold), italic: bool(saved.section_italic, d.section.italic), color: color(saved.section_color, d.section.color) },
      sub:     { font: saved.sub_font     || d.sub.font,     size: parseInt(saved.sub_size     || d.sub.size),     bold: bool(saved.sub_bold,     d.sub.bold),     italic: bool(saved.sub_italic,     d.sub.italic),     color: color(saved.sub_color,     d.sub.color)     },
      caption: { size: parseInt(saved.caption_size || d.caption.size), italic: bool(saved.caption_italic, d.caption.italic), color: color(saved.caption_color, d.caption.color) },
      body:    { font: saved.body_font || d.body.font, size: parseInt(saved.body_size || d.body.size) },
      ai:      { font: saved.ai_font || d.ai.font, size: parseInt(saved.ai_size || d.ai.size), italic: bool(saved.ai_italic, d.ai.italic), color: color(saved.ai_color, d.ai.color) },
      reco:    { bold: bool(saved.reco_bold, d.reco.bold), indent: bool(saved.reco_indent, d.reco.indent) }
    };
  } catch(e) { return TYPO_DEFAULTS; }
}

function saveTypoSettings() {
  const d = {
    title_font:    document.getElementById('ty_title_font').value,
    title_size:    document.getElementById('ty_title_size').value,
    title_bold:    document.getElementById('ty_title_bold').checked,
    title_color:   document.getElementById('ty_title_color').value,
    section_font:  document.getElementById('ty_section_font').value,
    section_size:  document.getElementById('ty_section_size').value,
    section_bold:  document.getElementById('ty_section_bold').checked,
    section_italic:document.getElementById('ty_section_italic').checked,
    section_color: document.getElementById('ty_section_color').value,
    sub_font:      document.getElementById('ty_sub_font').value,
    sub_size:      document.getElementById('ty_sub_size').value,
    sub_bold:      document.getElementById('ty_sub_bold').checked,
    sub_italic:    document.getElementById('ty_sub_italic').checked,
    sub_color:     document.getElementById('ty_sub_color').value,
    caption_size:  document.getElementById('ty_caption_size').value,
    caption_italic:document.getElementById('ty_caption_italic').checked,
    caption_color: document.getElementById('ty_caption_color').value,
    body_font:     document.getElementById('ty_body_font').value,
    body_size:     document.getElementById('ty_body_size').value,
    ai_size:       document.getElementById('ty_ai_size').value,
    ai_italic:     document.getElementById('ty_ai_italic').checked,
    ai_color:      document.getElementById('ty_ai_color').value,
    reco_bold:     document.getElementById('ty_reco_bold').checked,
    reco_indent:   document.getElementById('ty_reco_indent').checked,
  };
  localStorage.setItem('sa_typo', JSON.stringify(d));
  alert('✅ Typographie sauvegardée.');
}

function resetTypoSettings() {
  localStorage.removeItem('sa_typo');
  loadTypoSettings();
  alert('↩️ Valeurs par défaut restaurées.');
}

function loadTypoSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem('sa_typo') || '{}');
    const d = TYPO_DEFAULTS;
    const set = (id, val) => { const el = document.getElementById(id); if(el) { if(el.type==='checkbox') el.checked = !!val; else el.value = val; } };
    set('ty_title_font',     saved.title_font    || d.title.font);
    set('ty_title_size',     saved.title_size    || d.title.size);
    set('ty_title_bold',     saved.title_bold    !== undefined ? saved.title_bold    : d.title.bold);
    set('ty_title_color',    saved.title_color   || d.title.color);
    set('ty_section_font',   saved.section_font  || d.section.font);
    set('ty_section_size',   saved.section_size  || d.section.size);
    set('ty_section_bold',   saved.section_bold  !== undefined ? saved.section_bold  : d.section.bold);
    set('ty_section_italic', saved.section_italic!== undefined ? saved.section_italic: d.section.italic);
    set('ty_section_color',  saved.section_color || d.section.color);
    set('ty_sub_font',       saved.sub_font      || d.sub.font);
    set('ty_sub_size',       saved.sub_size      || d.sub.size);
    set('ty_sub_bold',       saved.sub_bold      !== undefined ? saved.sub_bold      : d.sub.bold);
    set('ty_sub_italic',     saved.sub_italic    !== undefined ? saved.sub_italic    : d.sub.italic);
    set('ty_sub_color',      saved.sub_color     || d.sub.color);
    set('ty_caption_size',   saved.caption_size  || d.caption.size);
    set('ty_caption_italic', saved.caption_italic!== undefined ? saved.caption_italic: d.caption.italic);
    set('ty_caption_color',  saved.caption_color || d.caption.color);
    set('ty_body_font',      saved.body_font     || d.body.font);
    set('ty_body_size',      saved.body_size     || d.body.size);
    set('ty_ai_size',        saved.ai_size       || d.ai.size);
    set('ty_ai_italic',      saved.ai_italic     !== undefined ? saved.ai_italic     : d.ai.italic);
    set('ty_ai_color',       saved.ai_color      || d.ai.color);
    set('ty_reco_bold',      saved.reco_bold     !== undefined ? saved.reco_bold     : d.reco.bold);
    set('ty_reco_indent',    saved.reco_indent   !== undefined ? saved.reco_indent   : d.reco.indent);
  } catch(e) {}
}
// ══════════════════════════════════════════════

// ─── 🎯 SÉLECTEUR AUTOMATIQUE DE VARIABLE DÉPENDANTE (Partie 2) ───────────────
async function aiChoixVariableDependante(context) {
  // context : 'biv' (analyses croisées) ou 'reg' (régression)
  if (!COLS || !COLS.length) return alert('⚠️ Aucune variable disponible. Importez des données d\'abord.');
  const theme = getTheme();
  if (!theme) return alert('⚠️ Renseignez le thème de l\'étude dans le Dashboard ou les Paramètres.');

  const btnId     = context === 'biv' ? 'btnAideChoixBiv'  : 'btnAideChoixReg';
  const blocId    = context === 'biv' ? 'aiChoixBlocBiv'   : 'aiChoixBlocReg';
  const vdId      = context === 'biv' ? 'aiChoixBivVD'     : 'aiChoixRegVD';
  const justifId  = context === 'biv' ? 'aiChoixBivJustif' : 'aiChoixRegJustif';
  const viId      = context === 'biv' ? 'aiChoixBivVI'     : 'aiChoixRegVI';
  const selectId  = context === 'biv' ? 'rowVarSelect'     : 'regDepVar';

  const btn = document.getElementById(btnId);
  const bloc = document.getElementById(blocId);
  if (btn) { btn.disabled = true; btn.innerHTML = '<div class="loading-spinner" style="width:14px;height:14px;border-width:2px"></div> Analyse...'; }

  const contextLabel = context === 'reg'
    ? 'régression (modélisation statistique)'
    : 'analyse bivariée (tableaux croisés, tests statistiques)';

  // Construire la liste numérotée des noms exacts pour le prompt
  const varsExactes = COLS.map((c, i) => {
    const typeLabel = c.type === 'num' ? 'quantitative' : c.type === 'cat' ? 'qualitative' : c.type;
    return `${i + 1}. "${c.name}" [${typeLabel}]`;
  }).join('\n');

  const prompt = `Biostatisticien expert. Étude : "${theme}". Analyse : ${contextLabel}.

VARIABLES DISPONIBLES (utilise UNIQUEMENT ces noms exacts) :
${varsExactes}

RÈGLES ABSOLUES :
1. "variable_dependante" = nom COPIÉ mot pour mot depuis la liste ci-dessus
2. "variables_independantes_suggerees" = noms COPIÉS mot pour mot depuis la liste
3. Choisis la VD qui mesure directement l'outcome principal de l'étude
4. Priorité aux variables avec p-value potentiellement significative (p<0,05) — préfère les variables qualitatives pour ${context === 'biv' ? 'le Chi²' : 'la régression logistique'} si la VD est catégorielle, ou numériques continues pour la régression linéaire
5. "justification" : 2 phrases max, directes — pourquoi cette variable est l'outcome central et pourquoi les VI choisies sont les facteurs associés les plus probables (significatifs)

JSON STRICT, aucun texte autour :
{"variable_dependante":"NomExactIci","justification":"2 phrases max.","variables_independantes_suggerees":["Var1","Var2","Var3"]}`;

  // Appel IA direct (sans container DOM, on parse le JSON)
  bloc.style.display = 'block';
  document.getElementById(justifId).innerHTML = '<span style="color:var(--muted);font-size:0.85rem">⏳ L\'IA analyse votre étude et vos variables...</span>';
  document.getElementById(vdId).style.display = 'none';
  document.getElementById(viId).innerHTML = '';

  try {
    // Utiliser la cascade SPI existante via une promesse
    let result = null;
    const cascade = [
      { name: 'Cerebras', fn: callProviderCerebras, provider: 'cerebras' },
      { name: 'Groq',     fn: callProviderGroq,     provider: 'groq'     },
      { name: 'Gemini',   fn: callProviderGemini,   provider: 'gemini'   },
      { name: 'Claude',   fn: callProviderClaude,   provider: 'claude'   },
    ];

    const selectedModel = document.getElementById('default_model').value;
    let preferredProvider = '';
    if (selectedModel.includes('claude'))   preferredProvider = 'claude';
    else if (selectedModel.includes('gemini')) preferredProvider = 'gemini';
    else if (selectedModel.includes('cerebras') || selectedModel === 'llama3.1-70b') preferredProvider = 'cerebras';
    else if (selectedModel.includes('llama')) preferredProvider = 'groq';

    let orderedCascade = [...cascade];
    if (preferredProvider) {
      const idx = orderedCascade.findIndex(c => c.provider === preferredProvider);
      if (idx > 0 && getKey(preferredProvider)) {
        const [pref] = orderedCascade.splice(idx, 1);
        orderedCascade.unshift(pref);
      }
    }

    let lastErr = null;
    for (const step of orderedCascade) {
      const key = getKey(step.provider);
      if (!key) continue;
      try {
        const text = await step.fn(prompt, key);
        // Nettoyer et parser JSON
        const clean = text.replace(/```json|```/g, '').trim();
        // Extraire l'objet JSON
        const match = clean.match(/\{[\s\S]*\}/);
        if (!match) throw new Error('Pas de JSON trouvé dans la réponse');
        result = JSON.parse(match[0]);
        break;
      } catch (e) { lastErr = e; console.warn('[AideChoix]', step.name, e.message); }
    }

    if (!result) throw new Error(lastErr ? lastErr.message : 'Aucune clé API configurée.');

    // ── Afficher le résultat ──────────────────────────────────────────────────
    const vdNom = result.variable_dependante || '';
    const justif = result.justification || '';
    const vis = result.variables_independantes_suggerees || [];

    // Justification
    document.getElementById(justifId).innerHTML = `<span style="font-size:1.1rem">💡</span> ${justif}`;

    // Badge VD
    const vdEl = document.getElementById(vdId);
    vdEl.textContent = '📌 Variable dépendante suggérée : ' + vdNom;
    vdEl.style.display = 'inline-block';

    // Variables indépendantes
    const viEl = document.getElementById(viId);
    viEl.innerHTML = vis.length
      ? vis.map(v => `<span class="vi-tag">${v}</span>`).join('')
      : '<span style="color:var(--muted);font-size:0.8rem">Toutes les autres variables peuvent être testées.</span>';

    // ── Sélectionner automatiquement dans le select ──────────────────────────
    const sel = document.getElementById(selectId);
    if (sel && vdNom) {
      // Cherche correspondance exacte ou partielle (insensible à la casse)
      const opts = Array.from(sel.options);
      const exact = opts.find(o => o.value === vdNom);
      const partial = !exact && opts.find(o =>
        o.value.toLowerCase().includes(vdNom.toLowerCase()) ||
        vdNom.toLowerCase().includes(o.value.toLowerCase())
      );
      const target = exact || partial;
      if (target) {
        sel.value = target.value;
        sel.dispatchEvent(new Event('change'));
        // Flash visuel sur le select
        sel.style.borderColor = '#10b981';
        sel.style.boxShadow = '0 0 0 2px rgba(16,185,129,0.25)';
        setTimeout(() => { sel.style.borderColor = ''; sel.style.boxShadow = ''; }, 2500);
      }
    }

    // Pour la régression, cocher aussi les VI suggérées
    if (context === 'reg' && vis.length) {
      setTimeout(() => {
        const checkboxes = document.querySelectorAll('#regIndepVarList input[type="checkbox"]');
        checkboxes.forEach(cb => {
          const label = cb.parentElement ? cb.parentElement.textContent.trim() : cb.value;
          const shouldCheck = vis.some(v =>
            v.toLowerCase() === label.toLowerCase() ||
            label.toLowerCase().includes(v.toLowerCase()) ||
            v.toLowerCase().includes(label.toLowerCase())
          );
          cb.checked = shouldCheck;
        });
      }, 300);
    }

    // Pour la bivariée, cocher les VI dans colVarList
    if (context === 'biv' && vis.length) {
      setTimeout(() => {
        const checkboxes = document.querySelectorAll('#colVarList input[type="checkbox"]');
        checkboxes.forEach(cb => {
          const label = cb.parentElement ? cb.parentElement.textContent.trim() : cb.value;
          const shouldCheck = vis.some(v =>
            v.toLowerCase() === label.toLowerCase() ||
            label.toLowerCase().includes(v.toLowerCase()) ||
            v.toLowerCase().includes(label.toLowerCase())
          );
          cb.checked = shouldCheck;
        });
      }, 300);
    }

  } catch (err) {
    document.getElementById(justifId).innerHTML =
      `<span style="color:#ff4444">❌ ${err.message}<br><small>Vérifiez vos clés API dans ⚙️ Paramètres.</small></span>`;
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = '🎯 Aide au choix'; }
  }
}
// ── Fin sélecteur automatique VD ─────────────────────────────────────────────

function saveLocalKeys() { 
  ['claude','groq','gemini','cerebras'].forEach(k => { 
    const val = document.getElementById('key_'+k).value.trim(); 
    if(val) localStorage.setItem('api_'+k, val); 
  }); 
  localStorage.setItem('default_model', document.getElementById('default_model').value);
  const theme = document.getElementById('study_theme').value.trim();
  if(theme) localStorage.setItem('study_theme', theme);
  const level = document.getElementById('aiInterpretLevel').value;
  localStorage.setItem('ai_interpret_level', level);
  alert('Paramètres sauvegardés localement.'); 
}

function clearSection(id) {
  const el = document.getElementById(id);
  if (el) { el.innerHTML = ''; el.style.display = 'none'; }
  const wc = document.getElementById(id === 'discussionContent' ? 'disc_wordcount' : 'conc_wordcount');
  if (wc) wc.textContent = '';
  const st = document.getElementById(id === 'discussionContent' ? 'discussion_status' : 'conclusion_status');
  if (st) st.textContent = '';
}

function clearAiCache() {
  AI_CACHE.clear();
  document.querySelectorAll('.ai-desc-var, .ai-interpretation').forEach(el => { el.innerHTML = ''; el.style.display = 'none'; });
  alert('Cache IA effacé.');
}

window.onload = () => { 
  ['claude','groq','gemini','cerebras'].forEach(k => { 
    const saved = localStorage.getItem('api_'+k); 
    if(saved) document.getElementById('key_'+k).value = saved; 
  }); 
  const model = localStorage.getItem('default_model');
  if(model) document.getElementById('default_model').value = model;
  const theme = localStorage.getItem('study_theme');
  if(theme) document.getElementById('study_theme').value = theme;
  // Niveau IA : ne pas restaurer depuis localStorage — le select HTML définit le défaut (court)
};

// --- CASCADE SPI : Cerebras → Groq → Gemini → Claude ---
// ═══════════════════════════════════════════════════════════
// PROXY VERCEL — Les clés sont sur le serveur, pas ici
// Remplace ton URL ci-dessous après déploiement Vercel
// ═══════════════════════════════════════════════════════════
const VERCEL_IA_URL = 'https://statanalyse.vercel.app/api/ia';

// Cascade : modifie l'ordre des providers ici
const AI_CASCADE_ORDER = ['cerebras', 'groq', 'gemini', 'claude'];

async function callProviderCerebras(prompt) { return callVercel(prompt, 'cerebras'); }
async function callProviderGroq(prompt)     { return callVercel(prompt, 'groq'); }
async function callProviderGemini(prompt)   { return callVercel(prompt, 'gemini'); }
async function callProviderClaude(prompt)   { return callVercel(prompt, 'claude'); }

async function callVercel(prompt, provider) {
  const res = await fetch(VERCEL_IA_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, provider })
  });
  const json = await res.json();
  if (!res.ok || json.error) throw new Error(json.error || 'Erreur Vercel');
  return json.text;
}

function getKey(provider) { return true; } // clés gérées côté Vercel

async function callAI(prompt, container, cacheKey) {
  container.style.display = 'block';
  // Vérifier le cache avant tout appel
  if (cacheKey) {
    const cached = AI_CACHE.get(cacheKey);
    if (cached) { container.innerText = cached; return; }
  }

  // Ordre de la cascade SPI
  const cascade = [
    { name: 'Cerebras', fn: callProviderCerebras, provider: 'cerebras' },
    { name: 'Groq',     fn: callProviderGroq,     provider: 'groq'     },
    { name: 'Gemini',   fn: callProviderGemini,   provider: 'gemini'   },
    { name: 'Claude',   fn: callProviderClaude,   provider: 'claude'   },
  ];

  // Si un modèle est explicitement sélectionné dans les paramètres, le mettre en priorité
  const selectedModel = document.getElementById('default_model').value;
  let preferredProvider = '';
  if (selectedModel.includes('claude'))   preferredProvider = 'claude';
  else if (selectedModel.includes('gemini')) preferredProvider = 'gemini';
  else if (selectedModel.includes('cerebras') || selectedModel === 'llama3.1-70b') preferredProvider = 'cerebras';
  else if (selectedModel.includes('llama'))  preferredProvider = 'groq';

  // Réorganiser la cascade : provider préféré d'abord s'il a une clé
  let orderedCascade = [...cascade];
  if (preferredProvider) {
    const idx = orderedCascade.findIndex(c => c.provider === preferredProvider);
    if (idx > 0 && getKey(preferredProvider)) {
      const [pref] = orderedCascade.splice(idx, 1);
      orderedCascade.unshift(pref);
    }
  }

  let lastError = null;
  for (const step of orderedCascade) {
    const key = getKey(step.provider);
    if (!key) continue; // pas de clé → on saute
    container.innerHTML = `<div class="loading-spinner"></div> Analyse en cours via <b>${step.name}</b>...`;
    try {
      let text = await step.fn(prompt, key);
      // Nettoyer le markdown : supprimer les ** et # et rendre les titres MAJUSCULES en gras
      text = text
        .replace(/\*\*(.+?)\*\*/g, '$1')   // **bold** → plain
        .replace(/\*(.+?)\*/g, '$1')         // *italic* → plain
        .replace(/^#{1,4}\s+/gm, '');        // # titres → plain
      // Rendre les lignes tout en majuscules comme des titres visuels
      const htmlLines = text.split('\n').map(line => {
        const t = line.trim();
        if (!t) return '<br>';
        if (t.length >= 4 && t === t.toUpperCase() && /[A-ZÀÂÇÉÈÊËÎÏÔŒÙÛÜŸ]/.test(t)) {
          return `<div style="font-weight:700;font-size:0.95rem;margin-top:12px;margin-bottom:4px;color:var(--accent)">${t}</div>`;
        }
        return `<div style="margin-bottom:4px">${t}</div>`;
      }).join('');
      container.innerHTML = htmlLines;
      if (cacheKey) AI_CACHE.set(cacheKey, text);
      return; // succès
    } catch (err) {
      lastError = err;
      console.warn(`[SPI] ${step.name} échoué :`, err.message);
      // continue vers le suivant
    }
  }

  // Tous les providers ont échoué (ou aucune clé configurée)
  const msg = lastError ? lastError.message : 'Aucune clé API configurée (Cerebras, Groq, Gemini ou Claude).';
  container.innerHTML = `<span style="color:#ff4444">❌ Échec cascade SPI : ${msg}<br><small>Configurez vos clés dans l'onglet ⚙️ Paramètres.</small></span>`;
}

// ─── HELPERS STATS ────────────────────────────────────────────────────────────
function buildNumStats(colName) {
  const vals = DATA.map(r => String(r[colName]).trim()).filter(v => v && v !== 'undefined');
  const nums = vals.map(v => parseFloat(v.replace(',','.'))).filter(v => !isNaN(v));
  if (!nums.length) return null;
  const mean = nums.reduce((a,b)=>a+b,0)/nums.length;
  const std  = Math.sqrt(nums.reduce((a,v)=>(a+(v-mean)**2),0)/nums.length);
  const sorted = [...nums].sort((a,b)=>a-b);
  const median = sorted[Math.floor(sorted.length/2)];
  return `N=${nums.length}, Moyenne=${mean.toFixed(3)}, Écart-type=${std.toFixed(3)}, Médiane=${median.toFixed(3)}, Min=${sorted[0].toFixed(3)}, Max=${sorted[sorted.length-1].toFixed(3)}`;
}
function buildCatStats(colName) {
  const vals = DATA.map(r => String(r[colName]).trim()).filter(v => v && v !== 'undefined');
  const freq = {}; vals.forEach(v => freq[v] = (freq[v]||0)+1);
  const sorted = Object.entries(freq).sort((a,b)=>b[1]-a[1]);
  return sorted.map(([v,n]) => `${v}: n=${n} (${((n/vals.length)*100).toFixed(1)}%)`).join(' | ') + ` — N total=${vals.length}`;
}
function getAiSupport() {
  const showTable = (document.getElementById('layoutMode')||{value:'table_first'}).value !== 'chart_only';
  const showChart = (document.getElementById('layoutMode')||{value:'table_first'}).value !== 'table_only';
  return (showTable && showChart) ? 'tableau' : showChart ? 'figure' : 'tableau';
}

// ─── DESCRIPTIF : SÉQUENTIEL VARIABLE PAR VARIABLE ────────────────────────────
async function interpretAllDescriptive() {
  if (!DATA.length) return alert('Chargez des données');
  const cards = document.querySelectorAll('#descContainer .card');
  if (!cards.length) return alert('Aucune variable à interpréter');
  const support = getAiSupport();
  const btn = document.querySelector('[onclick="interpretAllDescriptive()"]');
  if (btn) { btn.disabled = true; btn.innerHTML = '<div class="loading-spinner"></div> Interprétation...'; }

  for (const card of cards) {
    const colName = card.getAttribute('data-col');
    const colType = card.getAttribute('data-type');
    if (!colName || !colType) continue;

    let bloc = card.querySelector('.ai-desc-var');
    if (!bloc) { bloc = document.createElement('div'); bloc.className = 'ai-desc-var ai-interpretation'; bloc.style.marginTop = '10px'; card.appendChild(bloc); }
    bloc.style.display = 'block';

    const stats = colType === 'num' ? buildNumStats(colName) : buildCatStats(colName);
    if (!stats) { bloc.innerHTML = '<span style="color:var(--muted)">Données insuffisantes.</span>'; continue; }

    const typeLabel = colType === 'num' ? 'quantitative (continue)' : 'qualitative (catégorielle)';
    const theme = getTheme();
    const themeCtx = theme ? `\nContexte de l'étude : ${theme}.` : '';
    // Récupérer le numéro/label depuis data-tabref / data-figref
    const tabRef  = card.getAttribute('data-tabref') || '';
    const figRef  = card.getAttribute('data-figref') || '';
    const hasTab  = !!card.querySelector('table');
    const hasFig  = !!card.querySelector('canvas');
    let refCtx = '';
    if (hasTab && tabRef)  refCtx = `\nRéférence principale : ${tabRef}.`;
    else if (hasFig && figRef) refCtx = `\nRéférence principale : ${figRef}.`;
    const mention = hasTab && tabRef ? tabRef : (hasFig && figRef ? figRef : '');
    // Verbe d'introduction selon type : tableau → "montre/présente", figure → "illustre/met en évidence"
    const hasTabDesc = !!card.querySelector('table');
    const refName = hasTabDesc && tabRef ? tabRef.split(':')[0].trim()
                  : (!hasTabDesc && figRef ? figRef.split(':')[0].trim() : '');
    const introVerbs = hasTabDesc
      ? ['montre que','présente','indique que','révèle que']
      : ['illustre que','met en évidence que','montre que','présente'];
    const introVerb = introVerbs[Math.floor(Math.random() * introVerbs.length)];
    const startInstruction = refName
      ? `OBLIGATOIRE : commence EXACTEMENT par "${refName} ${introVerb} ..." (remplace ... par le contenu). Ne commence jamais par autre chose.`
      : `OBLIGATOIRE : commence par "Le tableau montre que..." ou "La figure illustre que..." ou formulation équivalente.`;
    const prompt = `Tu es biostatisticien expert. Interprète uniquement la variable "${colName}" (${typeLabel}).${themeCtx}${refCtx}
Données : ${stats}
Consignes STRICTES : français académique, cite les chiffres clés. ${startInstruction} PAS d'introduction générale. PAS de discussion comparative avec la littérature. PAS de recommandations. Uniquement l'interprétation des résultats obtenus.
${buildLevelInstruction(getInterpretLevel())}`;
    const cacheKey = `desc_${colName}_${theme}_${getInterpretLevel()}`;
    await callAIQueued(prompt, bloc, cacheKey);
  }

  if (btn) { btn.disabled = false; btn.innerHTML = '🤖 Interpréter les résultats'; }
}

// ─── BIVARIÉ : INTERPRÉTATION D'UNE SEULE PAIRE ──────────────────────────────
async function interpretBivResult(resultId) {
  const card = document.getElementById(resultId);
  if (!card) return;
  let bloc = document.getElementById('ai_' + resultId);
  if (!bloc) { bloc = document.createElement('div'); bloc.id = 'ai_' + resultId; bloc.className = 'ai-interpretation'; bloc.style.marginTop = '10px'; card.appendChild(bloc); }
  if (bloc.innerText.trim().length > 10 && !confirm('Une interprétation existe déjà. Régénérer ?')) return;
  bloc.style.display = 'block';
  const title = card.getAttribute('data-cardtitle') || '';
  const tabLabel = card.getAttribute('data-tablabel') || '';
  const allTables = card.querySelectorAll('table');
  const tableText = Array.from(allTables).map(t => t.innerText.trim()).join('\n\n');
  const theme = getTheme();
  const themeCtx = theme ? `\nContexte : ${theme}.` : '';
  const tabRef = tabLabel ? `\nRéférence : ${tabLabel}.` : '';
  const bivRefName = tabLabel ? tabLabel.split(':')[0].trim() : '';
  const bivVerbs = ['met en relation', 'croise', "montre l'association entre", "présente le lien entre"];
  const bivVerb = bivVerbs[Math.floor(Math.random() * bivVerbs.length)];
  const bivStartInstruction = bivRefName
    ? `OBLIGATOIRE : commence EXACTEMENT par "${bivRefName} ${bivVerb} ..." (remplace ... par le contenu).`
    : `OBLIGATOIRE : commence par "Le tableau met en relation..." ou formulation équivalente.`;
  const prompt = `Tu es biostatisticien expert. Interprète le ${title}.${themeCtx}${tabRef}\nRésultats :\n${tableText}\nConsignes STRICTES : français académique, indique la significativité (α=0,05), cite les tendances chiffrées. ${bivStartInstruction} PAS d'introduction. PAS de discussion comparative. PAS de recommandations.\n${buildLevelInstruction(getInterpretLevel())}`;
  const cacheKey = `biv_${resultId}_${theme}`;
  await callAIQueued(prompt, bloc, cacheKey);
}

// ─── BIVARIÉ : SÉQUENTIEL PAIRE PAR PAIRE ─────────────────────────────────────
async function interpretAllBivariate() {
  const resultsDiv = document.getElementById('bivariateResults');
  const cards = resultsDiv.querySelectorAll('.card');
  if (!cards.length) return alert("Lancez d'abord les analyses bivariées");
  const btn = document.querySelector('[onclick="interpretAllBivariate()"]');
  if (btn) { btn.disabled = true; btn.innerHTML = '<div class="loading-spinner"></div> Interprétation...'; }

  for (const card of cards) {
    const id = card.id;
    if (!id) continue;
    let bloc = document.getElementById('ai_' + id);
    if (!bloc) { bloc = document.createElement('div'); bloc.id = 'ai_' + id; bloc.className = 'ai-interpretation'; bloc.style.marginTop = '10px'; card.appendChild(bloc); }
    bloc.style.display = 'block';

    // Récupérer le titre depuis .biv-card-title (nouveau) ou .card-title (fallback)
    const titleEl = card.querySelector('.biv-card-title') || card.querySelector('.card-title');
    const title = titleEl ? titleEl.innerText.trim() : (card.getAttribute('data-cardtitle') || '');
    const tabLabel = card.getAttribute('data-tablabel') || '';
    const statsEl = card.querySelector('.biv-stats');
    const stats = statsEl ? statsEl.innerText.trim() : '';
    const tableText = card.querySelector('table') ? card.querySelector('table').innerText.trim() : '';

    const theme = getTheme();
    const themeCtx = theme ? `\nContexte : ${theme}.` : '';
    const tabRef = tabLabel ? `\nRéférence : ${tabLabel}.` : '';
    const bivRefName = tabLabel ? tabLabel.split(':')[0].trim() : '';
    const bivVerbs = ['met en relation','croise',"montre l'association entre","présente le lien entre"];
    const bivVerb = bivVerbs[Math.floor(Math.random() * bivVerbs.length)];
    const bivStartInstruction = bivRefName
      ? `OBLIGATOIRE : commence EXACTEMENT par "${bivRefName} ${bivVerb} ..." (remplace ... par le contenu). Ne commence jamais par autre chose.`
      : `OBLIGATOIRE : commence par "Le tableau met en relation..." ou "Le tableau croise..." ou formulation équivalente.`;
    const prompt = `Tu es biostatisticien expert. Interprète le ${title}.${themeCtx}${tabRef}
Statistiques : ${stats}
Table de contingence :
${tableText}
Consignes STRICTES : français académique, indique la significativité (α=0,05), cite les tendances chiffrées. ${bivStartInstruction} PAS d'introduction. PAS de discussion comparative avec la littérature. PAS de recommandations.
${buildLevelInstruction(getInterpretLevel())}`;
    const cacheKey = `biv_${id}_${theme}`;
    await callAIQueued(prompt, bloc, cacheKey);
  }

  if (btn) { btn.disabled = false; btn.innerHTML = '🤖 Interprétation Globale Expert'; }
}

// ─── RÉGRESSION : INTERPRÉTATION DU MODÈLE ────────────────────────────────────
async function interpretAllRegression() {
  const card = document.getElementById('regResultCard');
  if (!card) return alert("Calculez d'abord la régression");
  let bloc = document.getElementById('ai_reg_card');
  if (!bloc) { bloc = document.createElement('div'); bloc.id = 'ai_reg_card'; bloc.className = 'ai-interpretation'; bloc.style.marginTop = '10px'; card.appendChild(bloc); }
  bloc.style.display = 'block';

  // Récupérer le titre depuis le premier div (varTitle)
  const titleEl = card.querySelector('div[style*="font-weight:700"], div[style*="font-weight:600"]');
  const title = titleEl ? titleEl.innerText.trim() : '';
  const allTables = card.querySelectorAll('table');
  const tableText = Array.from(allTables).map(t => t.innerText.trim()).join('\n\n');
  // Détecter régression multiple : présence du bloc qualité du modèle
  const isMultiple = !!card.querySelector('[style*="QUALITÉ"]') || card.querySelectorAll('table').length > 1 || title.toLowerCase().includes('facteurs') || title.toLowerCase().includes('influence de') && tableText.includes('R² ajusté');

  const theme = getTheme();
  const themeCtx = theme ? `\nContexte de l'étude : ${theme}.` : '';
  const levelInstr = buildLevelInstruction(getInterpretLevel());
  const prompt = isMultiple
    ? `Tu es expert en modélisation statistique. Interprète ce modèle de régression linéaire MULTIPLE.${themeCtx}\nModèle : ${title}\nRésultats :\n${tableText}\nConsignes STRICTES : français académique. Interprète le R² ajusté (qualité d'ajustement global), la significativité globale du modèle (F-stat et p-value), puis chaque coefficient β significatif (sens, magnitude, p-value), conclus sur les variables les plus influentes et la pertinence du modèle. PAS de discussion comparative avec la littérature. PAS de recommandations. Directement sans introduction.\n${levelInstr}`
    : `Tu es expert en modélisation statistique. Interprète ce modèle de régression linéaire simple.${themeCtx}\nModèle : ${title}\nRésultats :\n${tableText}\nConsignes STRICTES : français académique, interprète le R² (qualité d'ajustement), le coefficient β (sens et magnitude), la significativité (t-stat et p-value), conclus sur la pertinence du modèle dans le contexte de l'étude. PAS de discussion comparative. PAS de recommandations. Directement sans introduction.\n${levelInstr}`;
  const cacheKey = `reg_${title}_${theme}`;
  const btn = document.querySelector('[onclick="interpretAllRegression()"]');
  if (btn) btn.disabled = true;
  await callAIQueued(prompt, bloc, cacheKey);
  if (btn) btn.disabled = false;
}

// Fonction de création de tranches d'âge supprimée au profit du recodage manuel flexible

// ─── QUEUE IA : évite d'épuiser la clé en espaçant les appels ─────────────────
const AI_QUEUE = {
  _queue: [],
  _running: false,
  _delay: 1200, // ms entre chaque appel (config recommandée)
  add(fn) {
    return new Promise((resolve, reject) => {
      this._queue.push({ fn, resolve, reject });
      if (!this._running) this._run();
    });
  },
  async _run() {
    this._running = true;
    while (this._queue.length > 0) {
      const { fn, resolve, reject } = this._queue.shift();
      try { resolve(await fn()); } catch(e) { reject(e); }
      if (this._queue.length > 0) await new Promise(r => setTimeout(r, this._delay));
    }
    this._running = false;
  }
};

// callAI via queue pour ne pas épuiser la clé sur les appels en masse
async function callAIQueued(prompt, container, cacheKey) {
  return AI_QUEUE.add(() => callAI(prompt, container, cacheKey));
}

// ─── COLLECTE DES RÉSULTATS POUR DISCUSSION / CONCLUSION ─────────────────────
function collectAllResults() {
  const parts = [];
  // Descriptif
  document.querySelectorAll('#descContainer .card').forEach(card => {
    const col = card.getAttribute('data-col');
    if (!col) return;
    const ai = card.querySelector('.ai-desc-var');
    const txt = ai ? (ai.innerText || '').trim() : '';
    const table = card.querySelector('table');
    const tabTxt = table ? table.innerText.trim().substring(0, 300) : '';
    if (txt || tabTxt) parts.push(`[${col}]\n${tabTxt}\nInterprétation: ${txt}`);
  });
  // Bivariées
  document.querySelectorAll('#bivariateResults .card').forEach(card => {
    const title = card.getAttribute('data-cardtitle') || '';
    const stats = card.querySelector('.biv-stats');
    const statsTxt = stats ? stats.innerText.trim() : '';
    const ai = document.getElementById('ai_' + card.id);
    const txt = ai ? (ai.innerText || '').trim() : '';
    if (title || statsTxt) parts.push(`[${title}]\n${statsTxt}\nInterprétation: ${txt}`);
  });
  // Régression
  document.querySelectorAll('#regressionResults .card').forEach(card => {
    const title = card.getAttribute('data-cardtitle') || '';
    const ai = document.getElementById('ai_reg_card');
    const txt = ai ? (ai.innerText || '').trim() : '';
    const tables = card.querySelectorAll('table');
    let tabTxt = '';
    tables.forEach(t => tabTxt += t.innerText.trim().substring(0, 300) + '\n');
    if (title || tabTxt) parts.push(`[RÉGRESSION: ${title}]\n${tabTxt}\nInterprétation: ${txt}`);
  });
  return parts.join('\n\n');
}

// ═══════════════════════════════════════════════════════════════════════════════
// PROFILS DISCUSSION / CONCLUSION
// ═══════════════════════════════════════════════════════════════════════════════
const DISC_PROFILES = {
  master:  { paras:4, min:300, max:400, label:'① Rappel objectif + résultats clés &nbsp;② Confrontation littérature &nbsp;③ Limites méthodologiques &nbsp;④ Implications pratiques' },
  article: { paras:5, min:450, max:600, label:'① Résultats principaux &nbsp;② Comparaison études antérieures &nbsp;③ Mécanismes explicatifs &nbsp;④ Forces/limites &nbsp;⑤ Portée clinique/politique' },
  rapport: { paras:2, min:120, max:180, label:'① Principaux constats &nbsp;② Recommandations immédiates' },
  custom:  { paras:null, min:null, max:null, label:'Paramètres personnalisés' }
};
const CONC_PROFILES = {
  master:  { paras:3, min:200, max:250, reco:5, label:'① Synthèse des apports &nbsp;② Réponse à la problématique &nbsp;③ Recommandations + Perspectives' },
  article: { paras:4, min:280, max:380, reco:6, label:'① Synthèse &nbsp;② Implications théoriques &nbsp;③ Recommandations pratiques &nbsp;④ Perspectives de recherche' },
  rapport: { paras:2, min:100, max:150, reco:3, label:'① Bilan synthétique &nbsp;② Actions recommandées' },
  custom:  { paras:null, min:null, max:null, reco:null, label:'Paramètres personnalisés' }
};

function applyDiscProfile() {
  const p = DISC_PROFILES[document.getElementById('disc_profile').value] || DISC_PROFILES.master;
  if (p.paras !== null) {
    document.getElementById('disc_paras').value = p.paras;
    document.getElementById('disc_words_min').value = p.min;
    document.getElementById('disc_words_max').value = p.max;
  }
  document.getElementById('disc_structure_label').innerHTML = p.label;
}
function applyConcProfile() {
  const p = CONC_PROFILES[document.getElementById('conc_profile').value] || CONC_PROFILES.master;
  if (p.paras !== null) {
    document.getElementById('conc_paras').value = p.paras;
    document.getElementById('conc_words_min').value = p.min;
    document.getElementById('conc_words_max').value = p.max;
    if (p.reco !== null) document.getElementById('conc_reco_count').value = p.reco;
  }
  document.getElementById('conc_structure_label').innerHTML = p.label;
}

function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

// ─── COLLECTE ENRICHIE : injecte les résultats significatifs + hypothèses ─────
function collectAllResults() {
  const parts = [];

  // Descriptif
  document.querySelectorAll('#descContainer .card').forEach(card => {
    const col = card.getAttribute('data-col'); if (!col) return;
    const ai = card.querySelector('.ai-desc-var');
    const txt = ai ? (ai.innerText||'').trim() : '';
    const table = card.querySelector('table');
    const tabTxt = table ? table.innerText.trim().substring(0, 300) : '';
    if (txt || tabTxt) parts.push(`[DESCRIPTIF — ${col}]\n${tabTxt}\nInterprétation: ${txt}`);
  });

  // Bivariées — priorise les significatifs
  const bivSig = [], bivNonSig = [];
  document.querySelectorAll('#bivariateResults .card').forEach(card => {
    const title = card.getAttribute('data-cardtitle') || '';
    const pVal = parseFloat(card.getAttribute('data-pval') || '1');
    const ai = document.getElementById('ai_' + card.id);
    const txt = ai ? (ai.innerText||'').trim() : '';
    // Extraire stats depuis tous les tableaux
    let statsTxt = '';
    card.querySelectorAll('table').forEach(t => { statsTxt += t.innerText.trim().substring(0, 250) + '\n'; });
    const entry = `[BIVARIÉE${pVal < 0.05 ? ' ✅ SIGNIFICATIF' : ''} — ${title}]\n${statsTxt.trim()}\nInterprétation: ${txt}`;
    if (pVal < 0.05) bivSig.push(entry); else bivNonSig.push(entry);
  });
  // Significatifs en premier
  [...bivSig, ...bivNonSig].forEach(e => parts.push(e));

  // Régression
  document.querySelectorAll('#regressionResults .card').forEach(card => {
    const title = card.getAttribute('data-cardtitle') || '';
    const ai = document.getElementById('ai_reg_card');
    const txt = ai ? (ai.innerText||'').trim() : '';
    let tabTxt = '';
    card.querySelectorAll('table').forEach(t => tabTxt += t.innerText.trim().substring(0, 300) + '\n');
    if (title || tabTxt) parts.push(`[RÉGRESSION — ${title}]\n${tabTxt}\nInterprétation: ${txt}`);
  });

  return parts.join('\n\n') || null;
}

// ─── DISCUSSION ───────────────────────────────────────────────────────────────
async function generateDiscussion() {
  const theme = getTheme();
  const results = collectAllResults();
  if (!results) return alert('Lancez d\'abord vos analyses (Descriptif, Bivariées, Régression).');

  const paras    = parseInt(document.getElementById('disc_paras').value)     || 4;
  const wMin     = parseInt(document.getElementById('disc_words_min').value) || 300;
  const wMax     = parseInt(document.getElementById('disc_words_max').value) || 400;
  const profile  = document.getElementById('disc_profile').value || 'master';
  const structureLabel = document.getElementById('disc_structure_label').innerHTML.replace(/&nbsp;/g,' ').replace(/<[^>]+>/g,'');

  const btn = document.querySelector('[onclick="generateDiscussion()"]');
  const status = document.getElementById('discussion_status');
  const container = document.getElementById('discussionContent');
  const wcEl = document.getElementById('disc_wordcount');
  if (btn) btn.disabled = true;
  if (status) status.textContent = '⏳ Génération en cours...';
  if (wcEl) wcEl.textContent = '';
  container.style.display = 'block';
  container.innerHTML = '<div class="loading-spinner"></div> Rédaction de la discussion…';

  const themeCtx = theme ? `Thème : "${theme}".` : 'Étude statistique générale.';
  const profileLabel = { master:'Mémoire de Master (normes CAMES/Afrique francophone)', article:'Article scientifique international (IMRaD)', rapport:'Rapport court praticien' }[profile] || 'Mémoire';

  const prompt = `Tu es un chercheur expert en biostatistiques. Rédige une DISCUSSION SCIENTIFIQUE en français académique pour un ${profileLabel}.

${themeCtx}

RÉSULTATS DE L'ÉTUDE (les lignes ✅ SIGNIFICATIF sont prioritaires) :
${results.substring(0, 3500)}

CONSIGNES STRICTES :
1. Exactement ${paras} paragraphes thématiques selon cette structure : ${structureLabel}
2. Longueur OBLIGATOIRE : entre ${wMin} et ${wMax} mots au total.
3. Confronte chaque résultat significatif à des études publiées (cite auteur, année, revue plausible).
4. Formules académiques : « Ces résultats rejoignent ceux de... », « Contrairement aux travaux de... », « Conformément aux données de la littérature... »
5. NE PAS répéter les chiffres bruts déjà interprétés — contextualise-les.
6. AUCUN titre de paragraphe, AUCUN sous-titre, AUCUN numéro de section dans le texte généré — texte fluide uniquement.
7. AUCUN markdown : ni **, ni ##, ni *, ni tirets de liste.
8. Ton : académique, assertif, neutre scientifiquement.`;

  await callAIQueued(prompt, container, `disc_${theme}_${profile}_${paras}_${wMin}`);
  if (btn) btn.disabled = false;
  if (status) status.textContent = '✅ Discussion générée';
  // Wordcount après génération
  setTimeout(() => {
    const wc = countWords(container.innerText || '');
    if (wcEl) wcEl.textContent = `📝 ${wc} mots`;
  }, 500);
}

// ─── CONCLUSION & RECOMMANDATIONS ────────────────────────────────────────────
async function generateConclusion() {
  const theme = getTheme();
  const results = collectAllResults();
  const discussionEl = document.getElementById('discussionContent');
  const discussionText = discussionEl ? (discussionEl.innerText||'').trim().substring(0, 1200) : '';
  if (!results) return alert('Lancez d\'abord vos analyses.');

  const paras     = parseInt(document.getElementById('conc_paras').value)      || 3;
  const wMin      = parseInt(document.getElementById('conc_words_min').value)  || 200;
  const wMax      = parseInt(document.getElementById('conc_words_max').value)  || 250;
  const recoCount = parseInt(document.getElementById('conc_reco_count').value) || 5;
  const recoTarget = document.getElementById('conc_reco_target').value || 'auto';
  const profile   = document.getElementById('conc_profile').value || 'master';
  const structureLabel = document.getElementById('conc_structure_label').innerHTML.replace(/&nbsp;/g,' ').replace(/<[^>]+>/g,'');

  const btn = document.querySelector('[onclick="generateConclusion()"]');
  const status = document.getElementById('conclusion_status');
  const container = document.getElementById('conclusionContent');
  const wcEl = document.getElementById('conc_wordcount');
  if (btn) btn.disabled = true;
  if (status) status.textContent = '⏳ Génération en cours...';
  if (wcEl) wcEl.textContent = '';
  container.style.display = 'block';
  container.innerHTML = '<div class="loading-spinner"></div> Rédaction de la conclusion…';

  const themeCtx = theme ? `Thème : "${theme}".` : 'Étude statistique.';
  const profileLabel = { master:'Mémoire de Master (CAMES)', article:'Article scientifique (IMRaD)', rapport:'Rapport court' }[profile] || 'Mémoire';
  const targetLabel = { auto:'selon le thème de l\'étude', decideurs:'décideurs et gestionnaires', praticiens:'praticiens et cliniciens', chercheurs:'chercheurs et académiques', politiques:'acteurs des politiques publiques' }[recoTarget] || 'selon le thème';

  const prompt = `Tu es un chercheur expert. Rédige en français académique une CONCLUSION et des RECOMMANDATIONS pour un ${profileLabel}.

${themeCtx}

RÉSULTATS CLÉS :
${results.substring(0, 2000)}

${discussionText ? 'ÉLÉMENTS DE DISCUSSION :\n' + discussionText : ''}

CONSIGNES STRICTES :
1. Structure : ${structureLabel}
2. Exactement ${paras} paragraphes de synthèse/conclusion (texte fluide), puis les recommandations.
3. Longueur paragraphes : entre ${wMin} et ${wMax} mots au total (hors recommandations).
4. Exactement ${recoCount} recommandations pratiques numérotées, directement issues des résultats, adressées aux ${targetLabel}.
5. AUCUN titre de section, AUCUN sous-titre dans le corps du texte — texte fluide pour les paragraphes.
6. Pour les recommandations : numérotation simple (1. 2. 3…), une phrase d'action par recommandation, sans titre de groupe.
7. AUCUN markdown : ni **, ni ##, ni *.
8. Ton : académique, affirmatif, orienté action.`;

  await callAIQueued(prompt, container, `conc_${theme}_${profile}_${paras}_${recoCount}`);
  if (btn) btn.disabled = false;
  if (status) status.textContent = '✅ Conclusion générée';
  setTimeout(() => {
    const wc = countWords(container.innerText || '');
    if (wcEl) wcEl.textContent = `📝 ${wc} mots`;
  }, 500);
}

// ─── MODAL ACCÈS RAPIDE CLÉ API ───────────────────────────────────────────────
function openApiKeyModal() {
  document.getElementById('apiKeyModal').style.display = 'flex';
  // Pré-remplir depuis localStorage
  ['claude','groq','gemini','cerebras'].forEach(k => {
    const saved = localStorage.getItem('api_' + k);
    const el = document.getElementById('qkey_' + k);
    if (saved && el) el.value = saved;
  });
}
function closeApiKeyModal() {
  document.getElementById('apiKeyModal').style.display = 'none';
}
function saveApiKeys() {
  ['claude','groq','gemini','cerebras'].forEach(k => {
    const el = document.getElementById('qkey_' + k);
    if (el && el.value.trim()) {
      localStorage.setItem('api_' + k, el.value.trim());
      // Synchroniser avec les champs des paramètres
      const mainEl = document.getElementById('key_' + k);
      if (mainEl) mainEl.value = el.value.trim();
    }
  });
  // Délai configurable
  const delayEl = document.getElementById('qkey_delay');
  if (delayEl && !isNaN(parseInt(delayEl.value))) {
    AI_QUEUE._delay = Math.max(500, parseInt(delayEl.value));
  }
  closeApiKeyModal();
  alert('✅ Clés API sauvegardées. Délai entre appels : ' + AI_QUEUE._delay + ' ms.');
}

let RECODE_MODE = 'modalite';
function setRecodeMode(mode) {
  RECODE_MODE = mode;
  document.getElementById('recodeMappingArea').style.display = mode === 'modalite' ? 'block' : 'none';
  document.getElementById('intervalRecodeArea').style.display = mode === 'intervalle' ? 'block' : 'none';
  document.getElementById('btnModeModalite').className = mode === 'modalite' ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm';
  document.getElementById('btnModeIntervalle').className = mode === 'intervalle' ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm';
}

function openRecodeModal() {
  if(!DATA.length) return alert("Chargez des données d'abord");
  const select = document.getElementById('recodeVarSelect');
  select.innerHTML = COLS.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
  document.getElementById('recodeModal').style.display = 'flex';
  setRecodeMode('modalite');
  loadRecodeValues();
}

function closeRecodeModal() {
  document.getElementById('recodeModal').style.display = 'none';
}

function loadRecodeValues() {
  const varName = document.getElementById('recodeVarSelect').value;
  const values = [...new Set(DATA.map(r => String(r[varName]).trim()))].filter(v => v && v !== 'undefined').sort();
  const area = document.getElementById('recodeMappingArea');
  area.innerHTML = '<label>Modalités actuelles → Nouvelles valeurs</label>' + values.map(v => `
    <div style="display:flex; gap:10px; margin-bottom:5px; align-items:center">
      <span style="flex:1; font-size:0.8rem; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${v}">${v}</span>
      <input type="text" class="recode-input" data-old="${v}" placeholder="Nouvelle valeur" style="flex:1">
    </div>
  `).join('');
  document.getElementById('newVarName').value = varName + '_rec';
}

function applyRecode() {
  const oldVar = document.getElementById('recodeVarSelect').value;
  const newVar = document.getElementById('newVarName').value.trim();
  if(!newVar) return alert("Nom de nouvelle variable requis");

  if (RECODE_MODE === 'modalite') {
    const mapping = {};
    document.querySelectorAll('.recode-input').forEach(input => {
      const newVal = input.value.trim();
      if(newVal) mapping[input.dataset.old] = newVal;
    });
    if(Object.keys(mapping).length === 0) return alert("Aucun changement saisi");
    DATA.forEach(r => {
      const val = String(r[oldVar]).trim();
      r[newVar] = mapping.hasOwnProperty(val) ? mapping[val] : val;
    });
  } else {
    const rulesText = document.getElementById('intervalRules').value.trim();
    if(!rulesText) return alert("Saisissez des règles d'intervalle");
    const rules = rulesText.split('\n').map(line => {
      const parts = line.split(':');
      if(parts.length !== 2) return null;
      const rangeParts = parts[0].includes(' à ') ? parts[0].split(' à ') : parts[0].split('-');
      if(rangeParts.length !== 2) return null;
      return { 
        min: parseFloat(rangeParts[0].trim().replace(',', '.')), 
        max: parseFloat(rangeParts[1].trim().replace(',', '.')), 
        label: parts[1].trim() 
      };
    }).filter(r => r !== null);
    
    DATA.forEach(r => {
      const val = parseFloat(String(r[oldVar]).replace(',','.'));
      if(isNaN(val)) { r[newVar] = r[oldVar]; return; }
      const rule = rules.find(rule => val >= rule.min && val <= rule.max);
      r[newVar] = rule ? rule.label : r[oldVar];
    });
  }

  const newType = detectType(newVar);
  COLS.push({ name: newVar, type: newType });
  initDataUI();
  closeRecodeModal();
  alert(`Variable "${newVar}" créée avec succès.`);
}

// ══════════════════════════════════════════════════════════════════════════════
// MODULE BASE DE DONNÉES v27 — Étapes 1 à 5
// ══════════════════════════════════════════════════════════════════════════════

// ─── État global de la base construite ───────────────────────────────────────
let DB_VARS = [];    // [{ id, name, type:'text'|'number'|'list'|'radio'|'checkbox'|'date'|'scale', options:[], required:true }]
let DB_ROWS = [];    // [{ varId: valeur, ... }]
let DB_VAR_COUNTER = 0;

// ─── Helpers UI ──────────────────────────────────────────────────────────────
let DB_SOURCE = 'manual'; // 'manual' | 'excel'

function dbShowCards() {
  const hasVars = DB_VARS.length > 0;
  const hasRows = DB_ROWS.length > 0;
  document.getElementById('dbVarEmpty').style.display = hasVars ? 'none' : 'block';
  document.getElementById('dbSaisieCard').style.display = hasVars ? 'block' : 'none';
  document.getElementById('dbRecodeCard').style.display = hasRows ? 'block' : 'none';
  document.getElementById('dbExportCard').style.display = hasVars ? 'block' : 'none'; // dès qu'il y a des variables
  if (hasVars) renderDbForm();
  renderDbVarList();
  renderDbTable();
}

// ─── ÉTAPE 1 : Constructeur de variables ─────────────────────────────────────
function addDbVariable(prefill) {
  const id = 'v' + (++DB_VAR_COUNTER);
  const v = prefill || { id, name: '', type: 'text', options: [], required: true };
  v.id = id;
  if (v.required === undefined) v.required = true;
  DB_VARS.push(v);
  dbShowCards();
  setTimeout(() => { const inp = document.getElementById('dbvname_' + id); if (inp) inp.focus(); }, 80);
}

function removeDbVariable(id) {
  DB_VARS = DB_VARS.filter(v => v.id !== id);
  // Nettoyer les données liées
  DB_ROWS.forEach(r => delete r[id]);
  dbShowCards();
}

function updateDbVar(id, field, value) {
  const v = DB_VARS.find(v => v.id === id);
  if (!v) return;
  if (field === 'required') { v.required = value; return; }
  v[field] = value;
  if (field === 'type') {
    if (!['list','radio','checkbox'].includes(value)) v.options = [];
    renderDbVarList();
  }
}

function updateDbVarOptions(id, raw) {
  const v = DB_VARS.find(v => v.id === id);
  if (!v) return;
  v.options = raw.split('\n').map(s => s.trim()).filter(Boolean);
}

function renderDbVarList() {
  const container = document.getElementById('dbVarList');
  if (!DB_VARS.length) { container.innerHTML = ''; return; }

  const TYPE_META = {
    text:     { label:'Texte',      cls:'type-text',   icon:'📝' },
    number:   { label:'Nombre',     cls:'type-number', icon:'🔢' },
    list:     { label:'Liste dér.', cls:'type-list',   icon:'📋' },
    radio:    { label:'Choix uniq.', cls:'type-list',  icon:'🔘' },
    checkbox: { label:'Cases',      cls:'type-date',   icon:'☑️' },
    date:     { label:'Date',       cls:'type-date',   icon:'📅' },
    scale:    { label:'Échelle',    cls:'type-number', icon:'⭐' },
  };

  container.innerHTML = DB_VARS.map((v, idx) => {
    const meta = TYPE_META[v.type] || TYPE_META.text;
    const hasOptions = ['list','radio','checkbox'].includes(v.type);
    const dupNames = DB_VARS.filter(x => x.name.trim() && x.name.trim() === v.name.trim()).length > 1;
    const dupAlert = dupNames ? `<span style="color:#ffaa00;font-size:.72rem" title="Nom en double">⚠️</span>` : '';
    const reqChecked = v.required !== false ? 'checked' : '';

    const accordion = hasOptions ? `
      <div class="modal-accordion" id="acc_${v.id}">
        <div class="modal-accordion-header" onclick="toggleDbAccordion('${v.id}')">
          <span id="acc_arrow_${v.id}">▶</span>
          <span>Options (${v.options.length})</span>
        </div>
        <div class="modal-accordion-body" id="acc_body_${v.id}">
          <div id="acc_tags_${v.id}">
            ${v.options.map((o, oi) => `<span class="modal-tag">${o} <button onclick="removeDbOption('${v.id}',${oi})">✕</button></span>`).join('')}
          </div>
          <div class="modal-add-row">
            <input type="text" id="acc_input_${v.id}" placeholder="Nouvelle option…" onkeydown="if(event.key==='Enter'){event.preventDefault();addDbOption('${v.id}');}">
            <button class="btn btn-primary btn-sm" onclick="addDbOption('${v.id}')">+</button>
          </div>
        </div>
      </div>` : '';

    return `
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:12px">
      <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
        <span style="font-size:0.72rem;color:var(--muted);background:var(--surface);border-radius:4px;padding:2px 5px">${idx+1}</span>
        <input id="dbvname_${v.id}" value="${v.name}" placeholder="Nom de la question"
          style="flex:2;min-width:120px;font-size:0.85rem"
          oninput="updateDbVar('${v.id}','name',this.value)">
        <select onchange="updateDbVar('${v.id}','type',this.value)" style="flex:1;min-width:120px;font-size:0.8rem">
          <option value="text"     ${v.type==='text'    ?'selected':''}>📝 Texte libre</option>
          <option value="number"   ${v.type==='number'  ?'selected':''}>🔢 Nombre</option>
          <option value="list"     ${v.type==='list'    ?'selected':''}>📋 Liste déroulante</option>
          <option value="radio"    ${v.type==='radio'   ?'selected':''}>🔘 Choix unique</option>
          <option value="checkbox" ${v.type==='checkbox'?'selected':''}>☑️ Cases à cocher</option>
          <option value="date"     ${v.type==='date'    ?'selected':''}>📅 Date</option>
          <option value="scale"    ${v.type==='scale'   ?'selected':''}>⭐ Échelle 1-5</option>
        </select>
        <span class="type-badge ${meta.cls}" style="font-size:.65rem">${meta.icon}</span>
        ${dupAlert}
        <label style="display:flex;align-items:center;gap:4px;font-size:.72rem;color:var(--muted);cursor:pointer;white-space:nowrap">
          <input type="checkbox" ${reqChecked} onchange="updateDbVar('${v.id}','required',this.checked)" style="width:auto;padding:0"> Obligatoire
        </label>
        <button class="btn btn-sm" style="background:rgba(59,130,246,.15);color:#60a5fa;border:1px solid rgba(59,130,246,.3)" onclick="duplicateDbVariable('${v.id}')" title="Dupliquer">⎘</button>
        <button class="btn btn-sm" style="background:rgba(255,68,68,0.15);color:#ff6b6b;border:1px solid rgba(255,68,68,0.3)" onclick="removeDbVariable('${v.id}')">✕</button>
      </div>
      ${accordion}
    </div>`;
  }).join('');
}

function toggleDbAccordion(id) {
  const body = document.getElementById('acc_body_' + id);
  const arrow = document.getElementById('acc_arrow_' + id);
  if (!body) return;
  body.classList.toggle('open');
  arrow.textContent = body.classList.contains('open') ? '▼' : '▶';
}

function addDbOption(varId) {
  const v = DB_VARS.find(v => v.id === varId);
  if (!v) return;
  const inp = document.getElementById('acc_input_' + varId);
  if (!inp) return;
  const val = inp.value.trim();
  if (!val) return;
  if (!v.options.includes(val)) v.options.push(val);
  inp.value = '';
  inp.focus();
  renderDbVarList();
  // Ré-ouvrir l'accordion après re-render
  const body = document.getElementById('acc_body_' + varId);
  const arrow = document.getElementById('acc_arrow_' + varId);
  if (body) { body.classList.add('open'); if(arrow) arrow.textContent = '▼'; }
}

function removeDbOption(varId, idx) {
  const v = DB_VARS.find(v => v.id === varId);
  if (!v) return;
  v.options.splice(idx, 1);
  renderDbVarList();
  const body = document.getElementById('acc_body_' + varId);
  const arrow = document.getElementById('acc_arrow_' + varId);
  if (body) { body.classList.add('open'); if(arrow) arrow.textContent = '▼'; }
}

function duplicateDbVariable(id) {
  const src = DB_VARS.find(v => v.id === id);
  if (!src) return;
  addDbVariable({ name: src.name + '_copie', type: src.type, options: [...src.options], required: src.required });
}

// ─── ÉTAPE 2 : Saisie manuelle ───────────────────────────────────────────────
function renderDbForm() {
  const zone = document.getElementById('dbFormZone');
  if (!DB_VARS.length) { zone.innerHTML = ''; return; }
  
  // Vérifier que les variables ont des noms
  const valid = DB_VARS.filter(v => v.name.trim());
  if (!valid.length) { zone.innerHTML = '<div class="warning-box">⚠️ Nommez vos variables avant de saisir.</div>'; return; }

  zone.innerHTML = `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px">` +
    valid.map(v => {
      const inputId = 'dbinput_' + v.id;
      let inputHtml = '';
      if (v.type === 'list' && v.options.length) {
        inputHtml = `<select id="${inputId}" style="font-size:0.85rem">
          <option value="">-- Choisir --</option>
          ${v.options.map(o => `<option value="${o}">${o}</option>`).join('')}
        </select>`;
      } else if (v.type === 'number') {
        inputHtml = `<input type="number" id="${inputId}" placeholder="Ex: 25" style="font-size:0.85rem">`;
      } else if (v.type === 'date') {
        inputHtml = `<input type="date" id="${inputId}" style="font-size:0.85rem">`;
      } else {
        inputHtml = `<input type="text" id="${inputId}" placeholder="Valeur..." style="font-size:0.85rem">`;
      }
      return `<div>
        <label style="font-size:0.8rem;color:var(--accent);font-weight:600;display:block;margin-bottom:4px">${v.name}</label>
        ${inputHtml}
      </div>`;
    }).join('') + `</div>`;
}

function addDbRow() {
  const valid = DB_VARS.filter(v => v.name.trim());
  if (!valid.length) return alert('Définissez et nommez vos variables d\'abord.');
  
  const row = {};
  let hasValue = false;
  valid.forEach(v => {
    const el = document.getElementById('dbinput_' + v.id);
    const val = el ? el.value.trim() : '';
    row[v.id] = val;
    if (val) hasValue = true;
  });
  if (!hasValue) return alert('Saisissez au moins une valeur.');
  
  DB_ROWS.push(row);
  
  // Réinitialiser le formulaire
  valid.forEach(v => {
    const el = document.getElementById('dbinput_' + v.id);
    if (el) el.value = el.tagName === 'SELECT' ? '' : '';
  });
  
  document.getElementById('dbRowCount').textContent = DB_ROWS.length + ' ligne(s)';
  renderDbTable();
  dbShowCards();
  
  // Focus premier champ
  const first = document.getElementById('dbinput_' + valid[0].id);
  if (first) first.focus();
}

function clearDbRows() {
  if (!DB_ROWS.length) return;
  if (!confirm('Effacer toutes les observations saisies ?')) return;
  DB_ROWS = [];
  document.getElementById('dbRowCount').textContent = '0 ligne(s)';
  renderDbTable();
  dbShowCards();
}

function deleteDbRow(idx) {
  DB_ROWS.splice(idx, 1);
  document.getElementById('dbRowCount').textContent = DB_ROWS.length + ' ligne(s)';
  renderDbTable();
  dbShowCards();
}

function renderDbTable() {
  const zone = document.getElementById('dbTableZone');
  const table = document.getElementById('dbDataTable');
  if (!DB_ROWS.length || !DB_VARS.length) { zone.style.display = 'none'; return; }
  
  const valid = DB_VARS.filter(v => v.name.trim());
  zone.style.display = 'block';
  
  const headers = valid.map(v => `<th>${v.name}</th>`).join('') + '<th style="width:40px"></th>';
  const rows = DB_ROWS.map((row, i) => {
    const cells = valid.map(v => `<td>${row[v.id] || ''}</td>`).join('');
    return `<tr>${cells}<td><button class="btn btn-sm" style="background:rgba(255,68,68,0.1);color:#ff6b6b;padding:2px 6px" onclick="deleteDbRow(${i})">✕</button></td></tr>`;
  }).join('');
  
  table.innerHTML = `<thead><tr>${headers}</tr></thead><tbody>${rows}</tbody>`;
}

// ─── ÉTAPE 3 : Génération IA des variables (tableau éditable, texte simple) ───
let AI_VAR_LOCKED = false; // verrou anti double-appel

function openAiVarModal() {
  document.getElementById('aiVarModal').style.display = 'flex';
  document.getElementById('aiVarResult').style.display = 'none';
  document.getElementById('aiVarStatus').textContent = '';
  const theme = getTheme();
  if (theme && !document.getElementById('aiVarStudyDesc').value) {
    document.getElementById('aiVarStudyDesc').value = theme;
  }
}

function closeAiVarModal() {
  document.getElementById('aiVarModal').style.display = 'none';
}

async function generateAiVariables() {
  if (AI_VAR_LOCKED) return; // bloquer si déjà en cours
  const desc = document.getElementById('aiVarStudyDesc').value.trim();
  if (!desc) return alert('Décrivez votre étude.');

  // Verrou + désactivation bouton
  AI_VAR_LOCKED = true;
  const btn = document.getElementById('btnGenAiVars');
  btn.disabled = true;
  btn.innerHTML = '<div class="loading-spinner" style="display:inline-block"></div> En cours...';

  const statusEl = document.getElementById('aiVarStatus');
  statusEl.textContent = '';

  // Prompt texte simple — pas de JSON, moins de tokens
  const levelVal = parseInt(document.getElementById('aiVarLevel').value) || 12;
  let varRange = '10 à 12';
  if (levelVal <= 12)      varRange = '10 à 12';
  else if (levelVal <= 15) varRange = '12 à 15';
  else                     varRange = '15 à 18';

  const prompt = `Expert en méthodologie. Étude : "${desc}"
Liste ${varRange} variables pour un questionnaire de collecte de données.
Format STRICT — une variable par ligne, exactement : NomVariable | type | modalite1, modalite2, modalite3
Types autorisés : text, number, list, date
Si type=text ou number ou date : laisser modalités vide.
Si type=list : mettre les modalités séparées par virgule, adaptées au contexte camerounais si pertinent.
Exemple :
Sexe | list | Masculin, Féminin
Age | number |
Region | list | Centre, Littoral, Nord, Sud, Est, Ouest, Adamaoua, Nord-Ouest, Sud-Ouest, Extrême-Nord
Date consultation | date |
Commentaire | text |
UNIQUEMENT les lignes, sans introduction ni explication.`;

  try {
    // Appel direct cascade SPI — pas de rendu HTML qui pollue le texte
    let raw = '';
    const cascade = [
      { name:'Cerebras', provider:'cerebras', fn: callProviderCerebras },
      { name:'Groq',     provider:'groq',     fn: callProviderGroq     },
      { name:'Gemini',   provider:'gemini',   fn: callProviderGemini   },
      { name:'Claude',   provider:'claude',   fn: callProviderClaude   },
    ];
    let ok = false;
    for (const step of cascade) {
      const key = getKey(step.provider);
      if (!key) continue;
      try { raw = await step.fn(prompt, key); ok = true; break; } catch(e) { continue; }
    }
    if (!ok || !raw) throw new Error('Aucune clé API disponible — configurez dans ⚙️ Paramètres');
    raw = raw.trim();

    // Parser le texte ligne par ligne
    const parsed = [];
    raw.split('\n').forEach(line => {
      line = line.trim();
      if (!line || line.startsWith('#') || line.startsWith('Exemple')) return;
      const parts = line.split('|').map(s => s.trim());
      if (parts.length < 2) return;
      const name = parts[0].replace(/^\d+[\.\-\)]\s*/, '').trim();
      const type = (parts[1] || 'text').toLowerCase().replace(/[^a-z]/g,'');
      const validTypes = ['text','number','list','date'];
      const finalType = validTypes.includes(type) ? type : 'text';
      const options = parts[2] ? parts[2].split(',').map(s => s.trim()).filter(Boolean) : [];
      if (name) parsed.push({ name, type: finalType, options });
    });

    if (!parsed.length) throw new Error('Aucune variable parsée — réessayez');

    renderAiVarTable(parsed);
    document.getElementById('aiVarResult').style.display = 'block';
    statusEl.textContent = `✅ ${parsed.length} variables — éditez le tableau puis importez`;
  } catch(e) {
    statusEl.innerHTML = `<span style="color:#ff6b6b">❌ ${e.message}</span>`;
  } finally {
    // Toujours libérer le verrou
    AI_VAR_LOCKED = false;
    btn.disabled = false;
    btn.innerHTML = '🤖 Générer';
  }
}

// Rendre le tableau éditable
function renderAiVarTable(vars) {
  const tbody = document.getElementById('aiVarTbody');
  tbody.innerHTML = vars.map((v, i) => buildAiVarRow(i, v)).join('');
}

function buildAiVarRow(i, v) {
  const TYPE_META = {
    text:   { cls:'type-text',   icon:'📝' },
    number: { cls:'type-number', icon:'🔢' },
    list:   { cls:'type-list',   icon:'📋' },
    date:   { cls:'type-date',   icon:'📅' },
  };
  const meta = TYPE_META[v.type] || TYPE_META.text;
  const typeOpts = ['text','number','list','date'].map(t =>
    `<option value="${t}" ${v.type===t?'selected':''}>${{text:'📝 Texte',number:'🔢 Nombre',list:'📋 Liste',date:'📅 Date'}[t]}</option>`
  ).join('');

  // Modalités : pour list → accordion tags ; sinon champ texte
  let modalCell = '';
  if (v.type === 'list') {
    const tags = (v.options || []).map((o, oi) =>
      `<span class="modal-tag">${o} <button onclick="removeAiOption(${i},${oi})" type="button">✕</button></span>`
    ).join('');
    modalCell = `
      <div class="modal-accordion" style="padding:0">
        <div class="modal-accordion-header" onclick="toggleAiAccordion(${i})" style="padding:3px 0">
          <span id="aiacc_arrow_${i}" style="font-size:.65rem">▶</span>
          <span style="font-size:.75rem">${(v.options||[]).length} modalité(s)</span>
        </div>
        <div class="modal-accordion-body" id="aiacc_body_${i}">
          <div id="aiacc_tags_${i}">${tags}</div>
          <div class="modal-add-row">
            <input type="text" id="aiacc_inp_${i}" placeholder="Nouvelle modalité…" onkeydown="if(event.key==='Enter'){event.preventDefault();addAiOption(${i});}">
            <button class="btn btn-primary btn-sm" type="button" onclick="addAiOption(${i})">+</button>
          </div>
        </div>
      </div>`;
  } else {
    modalCell = `<span style="font-size:.75rem;color:var(--muted)">—</span>`;
  }

  return `<tr id="airow_${i}" style="border-bottom:1px solid var(--border);vertical-align:top">
    <td style="padding:6px 8px;color:var(--muted);font-size:0.75rem">${i+1}</td>
    <td style="padding:5px 6px"><input value="${v.name}" placeholder="Nom" style="font-size:0.82rem;background:transparent;border:1px solid var(--border);border-radius:4px;padding:4px 6px;color:var(--text);width:100%" oninput="updateAiVarRow(${i},'name',this.value)"></td>
    <td style="padding:5px 6px">
      <select style="font-size:0.8rem;background:var(--surface2);border:1px solid var(--border);border-radius:4px;padding:4px;color:var(--text);width:100%" onchange="updateAiVarRow(${i},'type',this.value)">${typeOpts}</select>
      <span class="type-badge ${meta.cls}" style="display:block;margin-top:3px;text-align:center">${meta.icon} ${meta.cls.replace('type-','')}</span>
    </td>
    <td style="padding:5px 6px">${modalCell}</td>
    <td style="padding:5px"><button type="button" onclick="removeAiVarRow(${i})" style="background:rgba(255,68,68,0.15);color:#ff6b6b;border:none;border-radius:4px;padding:3px 7px;cursor:pointer;font-size:0.8rem">✕</button></td>
  </tr>`;
}

function toggleAiAccordion(i) {
  const body = document.getElementById('aiacc_body_' + i);
  const arrow = document.getElementById('aiacc_arrow_' + i);
  if (!body) return;
  body.classList.toggle('open');
  if (arrow) arrow.textContent = body.classList.contains('open') ? '▼' : '▶';
}

function addAiOption(i) {
  if (!_aiVarData[i]) return;
  const inp = document.getElementById('aiacc_inp_' + i);
  if (!inp) return;
  const val = inp.value.trim();
  if (!val) return;
  if (!_aiVarData[i].options) _aiVarData[i].options = [];
  _aiVarData[i].options.push(val);
  inp.value = '';
  const tbody = document.getElementById('aiVarTbody');
  // Partial re-render of just this row
  const row = document.getElementById('airow_' + i);
  if (row) row.outerHTML = buildAiVarRow(i, _aiVarData[i]);
  toggleAiAccordion(i); // keep open
}

function removeAiOption(i, oi) {
  if (!_aiVarData[i]) return;
  _aiVarData[i].options.splice(oi, 1);
  const row = document.getElementById('airow_' + i);
  if (row) row.outerHTML = buildAiVarRow(i, _aiVarData[i]);
  toggleAiAccordion(i);
}

// État interne du tableau IA
let _aiVarData = [];

function updateAiVarRow(i, field, value) {
  if (!_aiVarData[i]) return;
  if (field === 'options') {
    _aiVarData[i].options = value.split(',').map(s => s.trim()).filter(Boolean);
  } else {
    _aiVarData[i][field] = value;
    // Re-render row when type changes to show/hide accordion
    if (field === 'type') {
      if (value !== 'list') _aiVarData[i].options = [];
      const row = document.getElementById('airow_' + i);
      if (row) row.outerHTML = buildAiVarRow(i, _aiVarData[i]);
    }
  }
}

function removeAiVarRow(i) {
  _aiVarData.splice(i, 1);
  renderAiVarTable(_aiVarData);
}

function addAiVarRow() {
  _aiVarData.push({ name: '', type: 'text', options: [] });
  renderAiVarTable(_aiVarData);
  // Focus sur le dernier champ nom
  setTimeout(() => {
    const rows = document.querySelectorAll('#aiVarTbody tr');
    if (rows.length) {
      const inp = rows[rows.length-1].querySelector('input');
      if (inp) inp.focus();
    }
  }, 60);
}

function resetAiVarTable() {
  _aiVarData = [];
  document.getElementById('aiVarResult').style.display = 'none';
  document.getElementById('aiVarStatus').textContent = '';
}

// Remplacer renderAiVarTable pour alimenter _aiVarData aussi
const _origRenderAiVarTable = renderAiVarTable;
renderAiVarTable = function(vars) {
  _aiVarData = vars.map(v => ({ ...v }));
  _origRenderAiVarTable(_aiVarData);
  // Update count
  const countEl = document.getElementById('aiVarCount');
  if (countEl) countEl.textContent = `${_aiVarData.length} variable(s) générée(s)`;
  // Check duplicates
  const names = _aiVarData.map(v => v.name.trim().toLowerCase()).filter(Boolean);
  const dups = names.filter((n, i) => names.indexOf(n) !== i);
  const dupAlert = document.getElementById('aiVarDupAlert');
  if (dupAlert) {
    if (dups.length) {
      dupAlert.style.display = 'block';
      dupAlert.innerHTML = `⚠️ Noms en double : <b>${[...new Set(dups)].join(', ')}</b> — renommez avant d'importer.`;
    } else {
      dupAlert.style.display = 'none';
    }
  }
};

function importAiVarTable() {
  // Lire les valeurs actuelles des inputs directement depuis le DOM (plus fiable)
  const rows = document.querySelectorAll('#aiVarTbody tr');
  const toImport = [];
  rows.forEach(tr => {
    const inputs = tr.querySelectorAll('input[placeholder="Nom"]');
    const select = tr.querySelector('select');
    const name = inputs[0] ? inputs[0].value.trim() : '';
    const type = select ? select.value : 'text';
    // Options viennent de _aiVarData (accordion)
    const idx = parseInt(tr.id.replace('airow_',''));
    const options = (!isNaN(idx) && _aiVarData[idx]) ? (_aiVarData[idx].options || []) : [];
    if (name) toImport.push({ name, type, options });
  });

  if (!toImport.length) return alert('Aucune variable à importer. Remplissez au moins un nom.');

  // Validation doublons dans la liste à importer
  const importNames = toImport.map(v => v.name.trim().toLowerCase());
  const dupInImport = importNames.filter((n, i) => importNames.indexOf(n) !== i);
  if (dupInImport.length) {
    if (!confirm(`⚠️ Noms en double détectés : ${[...new Set(dupInImport)].join(', ')}\nImporter quand même ?`)) return;
  }

  // Validation doublons avec les variables déjà dans DB_VARS
  const existingNames = DB_VARS.map(v => v.name.trim().toLowerCase()).filter(Boolean);
  const conflicts = toImport.filter(v => existingNames.includes(v.name.trim().toLowerCase())).map(v => v.name);
  if (conflicts.length) {
    if (!confirm(`⚠️ Noms déjà existants dans la base : ${conflicts.join(', ')}\nImporter quand même (renommez-les après) ?`)) return;
  }

  toImport.forEach(v => addDbVariable({ name: v.name, type: v.type, options: v.options }));
  closeAiVarModal();
  document.getElementById('aiVarStatus').textContent = '';
  document.getElementById('aiVarResult').style.display = 'none';
}


// ─── ÉTAPE 4 : Recodage de la base construite ─────────────────────────────────
function openDbRecodeModal() {
  if (!DB_ROWS.length) return alert('Saisissez des données d\'abord.');
  const select = document.getElementById('dbRecodeVarSelect');
  const valid = DB_VARS.filter(v => v.name.trim());
  select.innerHTML = valid.map(v => `<option value="${v.id}">${v.name}</option>`).join('');
  document.getElementById('dbRecodeModal').style.display = 'flex';
  loadDbRecodeValues();
}

function closeDbRecodeModal() {
  document.getElementById('dbRecodeModal').style.display = 'none';
}

function loadDbRecodeValues() {
  const varId = document.getElementById('dbRecodeVarSelect').value;
  const v = DB_VARS.find(v => v.id === varId);
  if (!v) return;
  const values = [...new Set(DB_ROWS.map(r => String(r[varId]||'').trim()))].filter(Boolean).sort();
  const area = document.getElementById('dbRecodeMappingArea');
  area.innerHTML = '<label style="font-size:0.82rem;color:var(--muted)">Modalités actuelles → Nouvelles valeurs</label>' +
    values.map(val => `
      <div style="display:flex;gap:10px;margin:6px 0;align-items:center">
        <span style="flex:1;font-size:0.82rem;color:var(--text);overflow:hidden;text-overflow:ellipsis" title="${val}">${val}</span>
        <input type="text" class="dbrecode-input" data-old="${val}" data-varid="${varId}" placeholder="Nouvelle valeur" style="flex:1;font-size:0.82rem">
      </div>
    `).join('');
  document.getElementById('dbNewVarName').value = (v.name || '') + '_rec';
}

function applyDbRecode() {
  const varId = document.getElementById('dbRecodeVarSelect').value;
  const newName = document.getElementById('dbNewVarName').value.trim();
  if (!newName) return alert('Nom de nouvelle variable requis.');
  if (DB_VARS.find(v => v.name === newName)) return alert('Ce nom existe déjà.');
  
  const mapping = {};
  document.querySelectorAll('.dbrecode-input').forEach(inp => {
    if (inp.value.trim()) mapping[inp.dataset.old] = inp.value.trim();
  });
  if (!Object.keys(mapping).length) return alert('Aucun recodage saisi.');
  
  // Créer la nouvelle variable
  const newId = 'v' + (++DB_VAR_COUNTER);
  const srcVar = DB_VARS.find(v => v.id === varId);
  
  // Collecter les nouvelles valeurs uniques pour les options
  const newOptions = [...new Set(Object.values(mapping))];
  DB_VARS.push({ id: newId, name: newName, type: 'list', options: newOptions });
  
  // Ajouter les valeurs recodées dans chaque ligne
  DB_ROWS.forEach(r => {
    const oldVal = String(r[varId]||'').trim();
    r[newId] = mapping.hasOwnProperty(oldVal) ? mapping[oldVal] : oldVal;
  });
  
  closeDbRecodeModal();
  dbShowCards();
  alert(`Variable "${newName}" créée avec succès.`);
}

// ─── ÉTAPE 5 : Export Excel ───────────────────────────────────────────────────
function exportDbExcel() {
  const valid = DB_VARS.filter(v => v.name.trim());
  if (!valid.length) return alert('Aucune variable définie.');

  const wb = XLSX.utils.book_new();

  // Feuille données (même vide = juste les en-têtes)
  const headers = valid.map(v => v.name);
  const rows = DB_ROWS.map(r => valid.map(v => r[v.id] || ''));
  const wsData = XLSX.utils.aoa_to_sheet([headers, ...rows]);

  // Style en-têtes
  headers.forEach((_, i) => {
    const cell = XLSX.utils.encode_cell({ r: 0, c: i });
    if (wsData[cell]) {
      wsData[cell].s = { font: { bold: true, color: { rgb: 'FFFFFF' } }, fill: { fgColor: { rgb: '003087' } } };
    }
  });

  XLSX.utils.book_append_sheet(wb, wsData, 'Données');

  // Feuille dictionnaire des variables
  const dictRows = [['Variable', 'Type', 'Modalités / Description']];
  valid.forEach(v => {
    const typeLabel = { text: 'Texte libre', number: 'Numérique', list: 'Liste de choix', date: 'Date' }[v.type] || v.type;
    dictRows.push([v.name, typeLabel, v.options.length ? v.options.join(' | ') : '—']);
  });
  const wsDict = XLSX.utils.aoa_to_sheet(dictRows);
  XLSX.utils.book_append_sheet(wb, wsDict, 'Dictionnaire');

  const theme = getTheme();
  const fname = 'Base_' + (theme || 'StatAnalyse').replace(/[^a-zA-Z0-9]/g, '_').substring(0, 25) + '_v28.xlsx';
  XLSX.writeFile(wb, fname);

  const statusEl = document.getElementById('dbExportStatus');
  statusEl.textContent = `✅ Exporté : ${fname} (${DB_ROWS.length} observation(s), ${valid.length} variable(s))`;
  setTimeout(() => statusEl.textContent = '', 5000);
}

// ─── Injection dans l'analyse StatAnalyse ────────────────────────────────────
function injectDbIntoAnalysis() {
  if (!DB_ROWS.length) return alert('Aucune donnée à injecter.');
  const valid = DB_VARS.filter(v => v.name.trim());
  if (!valid.length) return alert('Aucune variable définie.');

  // Vérification doublons avant injection
  const names = valid.map(v => v.name.trim().toLowerCase());
  const dups = names.filter((n, i) => names.indexOf(n) !== i);
  if (dups.length) {
    if (!confirm(`⚠️ Variables avec le même nom : ${[...new Set(dups)].join(', ')}\nCela peut causer des erreurs d'analyse. Injecter quand même ?`)) return;
  }
  
  // Construire DATA et COLS dans le format StatAnalyse
  DATA = DB_ROWS.map(r => {
    const obj = {};
    valid.forEach(v => { obj[v.name] = r[v.id] || ''; });
    return obj;
  });
  
  COLS = valid.map(v => ({
    name: v.name,
    type: v.type === 'number' ? 'num' : 'cat'
  }));
  
  initDataUI();
  
  // Basculer vers l'onglet Données pour confirmation visuelle
  const tabEl = document.querySelector('[onclick="showTab(\'data\',this);toggleSidebar(false)"]');
  showTab('data', tabEl);
  
  alert(`✅ Base injectée : ${DATA.length} observations × ${COLS.length} variables.\nVous pouvez maintenant lancer les analyses.`);
}

// ─── Init onglet DB ───────────────────────────────────────────────────────────
// Déclencher dbShowCards quand on entre dans l'onglet dbbuilder
// On surcharge showTab proprement
const __origShowTab = showTab;
showTab = function(id, el) {
  __origShowTab(id, el);
  if (id === 'dbbuilder') { dbShowCards(); }
};

// ══════════════════════════════════════════════════════════════════════════════
// MODULE PARTAGE — Supabase
// ══════════════════════════════════════════════════════════════════════════════

const SUPABASE_URL = 'https://apzgbfbxxcafgpwznens.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwemdiZmJ4eGNhZmdwd3puZW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExMzAyMjIsImV4cCI6MjA5NjcwNjIyMn0.Rek2vKIvbxJmM2afGKRVYNMq9QkTzdJLOfDspEH6fD4';
const BASE_URL = window.location.origin + window.location.pathname.replace('app.html','');

async function sbFetch(path, opts = {}) {
  const res = await fetch(SUPABASE_URL + '/rest/v1/' + path, {
    ...opts,
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': 'Bearer ' + SUPABASE_KEY,
      'Content-Type': 'application/json',
      'Prefer': opts.prefer || '',
      ...(opts.headers || {})
    }
  });
  if (!res.ok) throw new Error(await res.text());
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

function genId(len = 10) {
  return Array.from(crypto.getRandomValues(new Uint8Array(len)))
    .map(b => b.toString(36).padStart(2,'0')).join('').substring(0, len);
}

async function publishQuestionnaire() {
  const valid = DB_VARS.filter(v => v.name.trim());
  if (!valid.length) return alert('Créez vos variables d\'abord.');

  const statusEl = document.getElementById('shareStatus');
  statusEl.innerHTML = '<span style="color:var(--muted)">⏳ Publication en cours...</span>';

  const qid = genId(10);
  const adminToken = genId(20);
  const title = getTheme() || 'Questionnaire sans titre';
  const variables = valid.map(v => ({ name: v.name, type: v.type, options: v.options || [] }));

  try {
    await sbFetch('questionnaires', {
      method: 'POST',
      prefer: 'return=minimal',
      body: JSON.stringify({ id: qid, admin_token: adminToken, title, variables, created_at: new Date().toISOString() })
    });

    const repondantUrl = `${BASE_URL}repondre.html?q=${qid}`;
    document.getElementById('linkRepondant').value = repondantUrl;
    document.getElementById('linkAdmin').value = adminToken;
    document.getElementById('shareLinks').style.display = 'block';
    document.getElementById('btnLoadResponses').style.display = 'inline-flex';
    document.getElementById('loadResponsesZone').style.display = 'block';
    document.getElementById('inputAdminToken').value = adminToken;

    // Sauvegarder localement
    localStorage.setItem('sa_qid_last', qid);
    localStorage.setItem('sa_admin_last', adminToken);

    statusEl.innerHTML = `<span style="color:var(--accent)">✅ Questionnaire publié — ${valid.length} variables</span>`;
  } catch(e) {
    statusEl.innerHTML = `<span style="color:#ff6b6b">❌ Erreur : ${e.message}</span>`;
  }
}

async function fetchResponses() {
  const token = document.getElementById('inputAdminToken').value.trim();
  if (!token) return alert('Entre ton token admin.');
  const loadStatus = document.getElementById('loadStatus');
  loadStatus.textContent = '⏳ Chargement...';

  try {
    // Trouver le questionnaire par token admin
    const qData = await sbFetch(`questionnaires?admin_token=eq.${encodeURIComponent(token)}&select=id,title,variables`);
    if (!qData || !qData.length) { loadStatus.innerHTML = '<span style="color:#ff6b6b">❌ Token invalide.</span>'; return; }
    const q = qData[0];

    const rData = await sbFetch(`responses?questionnaire_id=eq.${encodeURIComponent(q.id)}&select=data,created_at&order=created_at.asc`);
    if (!rData || !rData.length) { loadStatus.textContent = '⚠️ Aucune réponse pour l\'instant.'; return; }

    // Injecter dans DB_ROWS et DB_VARS
    const parseVars = raw => { if (!raw) return []; if (Array.isArray(raw)) return raw; if (typeof raw === 'string') { try { const p = JSON.parse(raw); return Array.isArray(p) ? p : []; } catch(e) { return []; } } return []; };
    DB_VARS = parseVars(q.variables).map((v, i) => ({ id: 'v' + (i+1), name: v.name, type: v.type, options: v.options || [] }));
    DB_VAR_COUNTER = DB_VARS.length;
    DB_ROWS = rData.map(r => {
      const row = {};
      DB_VARS.forEach(v => { row[v.id] = (r.data || {})[v.name] || ''; });
      return row;
    });

    dbShowCards();
    loadStatus.innerHTML = `<span style="color:var(--accent)">✅ ${rData.length} réponse(s) chargée(s) — clique sur "🔬 Utiliser pour l'analyse"</span>`;
  } catch(e) {
    loadStatus.innerHTML = `<span style="color:#ff6b6b">❌ ${e.message}</span>`;
  }
}

async function loadResponses() {
  document.getElementById('loadResponsesZone').style.display = 'block';
  // Pré-remplir si token sauvegardé
  const saved = localStorage.getItem('sa_admin_last');
  if (saved && !document.getElementById('inputAdminToken').value) {
    document.getElementById('inputAdminToken').value = saved;
  }
}

function copyLink(inputId) {
  const el = document.getElementById(inputId);
  el.select();
  navigator.clipboard.writeText(el.value).then(() => {
    const btn = el.nextElementSibling;
    btn.textContent = '✅ Copié';
    setTimeout(() => btn.textContent = 'Copier', 2000);
  });
}

// Afficher la carte partage dès qu'il y a des variables
const _origDbShowCards = dbShowCards;
dbShowCards = function() {
  _origDbShowCards();
  const hasVars = DB_VARS.length > 0;
  const shareCard = document.getElementById('dbShareCard');
  if (shareCard) shareCard.style.display = hasVars ? 'block' : 'none';
  // Restaurer liens si déjà publiés
  const savedToken = localStorage.getItem('sa_admin_last');
  const savedQid = localStorage.getItem('sa_qid_last');
  if (hasVars && savedToken && savedQid) {
    const repondantUrl = `${BASE_URL}repondre.html?q=${savedQid}`;
    document.getElementById('linkRepondant').value = repondantUrl;
    document.getElementById('linkAdmin').value = savedToken;
    document.getElementById('shareLinks').style.display = 'block';
    document.getElementById('btnLoadResponses').style.display = 'inline-flex';
    document.getElementById('loadResponsesZone').style.display = 'block';
    document.getElementById('inputAdminToken').value = savedToken;
  }
};

</script>
<!-- Modal Accès Rapide Clé API -->
<div id="apiKeyModal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:2000;align-items:center;justify-content:center;">
  <div class="card" style="width:90%;max-width:520px;max-height:92vh;overflow-y:auto;">
    <div class="card-title" style="display:flex;justify-content:space-between;align-items:center;">
      🔑 Clés API — Accès Rapide
      <button class="btn btn-secondary btn-sm" onclick="closeApiKeyModal()">✕</button>
    </div>
    <p style="font-size:0.8rem;color:var(--muted);margin-bottom:14px">Renseignez au moins une clé. La cascade SPI utilisera les providers disponibles dans l'ordre : <b>Cerebras → Groq → Gemini → Claude</b>.</p>
    <div style="display:flex;flex-direction:column;gap:10px">
      <div><label style="font-size:0.8rem;color:var(--accent)">🧠 Claude (Anthropic)</label><input type="password" id="qkey_claude" placeholder="sk-ant-api03-..."></div>
      <div><label style="font-size:0.8rem;color:var(--accent)">⚡ Groq</label><input type="password" id="qkey_groq" placeholder="gsk_..."></div>
      <div><label style="font-size:0.8rem;color:var(--accent)">🔮 Gemini (Google)</label><input type="password" id="qkey_gemini" placeholder="AIza..."></div>
      <div><label style="font-size:0.8rem;color:var(--accent)">🚀 Cerebras</label><input type="password" id="qkey_cerebras" placeholder="csk-..."></div>
    </div>
    <div style="margin-top:16px;padding:12px;background:rgba(0,212,170,0.07);border-radius:8px;border-left:3px solid var(--accent)">
      <label style="font-size:0.8rem;font-weight:600;color:var(--accent)">⏱️ Délai entre appels IA (ms)</label>
      <p style="font-size:0.75rem;color:var(--muted);margin-bottom:6px">Augmentez si vous épuisez rapidement votre quota. Recommandé : 1200 ms (1,2 s). Minimum : 500 ms.</p>
      <input type="number" id="qkey_delay" value="1200" min="500" max="10000" step="100" style="width:140px">
    </div>
    <div style="margin-top:14px;display:flex;gap:8px">
      <button class="btn btn-primary" onclick="saveApiKeys()">💾 Sauvegarder</button>
      <button class="btn btn-secondary" onclick="closeApiKeyModal()">Annuler</button>
    </div>
    <p style="font-size:0.72rem;color:var(--muted);margin-top:10px">🔒 Les clés sont stockées uniquement dans votre navigateur (localStorage). Elles ne sont jamais transmises à un serveur tiers.</p>
  </div>
</div>


<!-- V26 PPTX + EXCEL PRO -->
<script src="https://cdn.jsdelivr.net/npm/pptxgenjs/dist/pptxgen.bundle.js"></script>


<div id="tab-ppt" class="tab-content">
  <button class="btn btn-back" onclick="showTab('hub');toggleSidebar(false)">← Retour au Dashboard</button>
<div class="card">
  <div class="card-title">🎓 Soutenance Automatique — PowerPoint Pro v26</div>
  <p style="font-size:0.82rem;color:var(--muted);margin-bottom:16px">4 templates · Densité configurable · Introduction IA · Résultats triés · 1 résultat = 1 slide</p>

  <!-- TEMPLATE PICKER -->
  <div style="margin-bottom:18px">
    <div style="font-size:0.82rem;font-weight:600;color:var(--accent);margin-bottom:10px">🎨 Template de présentation</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(155px,1fr));gap:10px" id="tplPicker">
      <div class="tpl-card" data-tpl="academic" onclick="selectTemplate('academic')" style="cursor:pointer;border:2px solid #003087;border-radius:10px;overflow:hidden">
        <div style="background:#003087;height:30px;display:flex;align-items:center;padding:0 8px"><span style="color:#fff;font-size:0.68rem;font-weight:700">ACADÉMIQUE BLEU</span></div>
        <div style="background:#F0F4F8;height:18px;border-bottom:3px solid #00d4aa"></div>
        <div style="padding:5px 8px;font-size:0.68rem;color:#334155;background:#fff">Standard soutenance universitaire ✓</div>
      </div>
      <div class="tpl-card" data-tpl="health" onclick="selectTemplate('health')" style="cursor:pointer;border:2px solid #ccc;border-radius:10px;overflow:hidden">
        <div style="background:#065f46;height:30px;display:flex;align-items:center;padding:0 8px"><span style="color:#fff;font-size:0.68rem;font-weight:700">SANTÉ VERT</span></div>
        <div style="background:#ECFDF5;height:18px;border-bottom:3px solid #10b981"></div>
        <div style="padding:5px 8px;font-size:0.68rem;color:#334155;background:#fff">Sciences de la santé, épidémio</div>
      </div>
      <div class="tpl-card" data-tpl="dark" onclick="selectTemplate('dark')" style="cursor:pointer;border:2px solid #ccc;border-radius:10px;overflow:hidden">
        <div style="background:#0f172a;height:30px;display:flex;align-items:center;padding:0 8px"><span style="color:#fff;font-size:0.68rem;font-weight:700">SOMBRE PRO</span></div>
        <div style="background:#1e293b;height:18px;border-bottom:3px solid #f59e0b"></div>
        <div style="padding:5px 8px;font-size:0.68rem;color:#334155;background:#fff">Impact fort, conférences</div>
      </div>
      <div class="tpl-card" data-tpl="light" onclick="selectTemplate('light')" style="cursor:pointer;border:2px solid #ccc;border-radius:10px;overflow:hidden">
        <div style="background:#f8fafc;height:30px;display:flex;align-items:center;padding:0 8px;border-bottom:1px solid #e2e8f0"><span style="color:#1e293b;font-size:0.68rem;font-weight:700">CLAIR MINIMALISTE</span></div>
        <div style="background:#fff;height:18px;border-bottom:3px solid #6366f1"></div>
        <div style="padding:5px 8px;font-size:0.68rem;color:#334155;background:#fff">Jury exigeant, lecture facile</div>
      </div>
    </div>
    <input type="hidden" id="ppt_template" value="academic">
  </div>

  <!-- INFOS SOUTENANCE -->
  <div class="grid-2" style="gap:10px;margin-bottom:12px">
    <div><label style="font-size:0.78rem;color:var(--accent);font-weight:600">Titre de l'étude *</label><input id="ppt_title" placeholder="Ex: Facteurs associés à la malnutrition..." style="margin-top:4px"></div>
    <div><label style="font-size:0.78rem;color:var(--accent);font-weight:600">Auteur(s)</label><input id="ppt_author" placeholder="Prénom NOM" style="margin-top:4px"></div>
    <div><label style="font-size:0.78rem;color:var(--accent);font-weight:600">Date de soutenance</label><input type="date" id="ppt_date" style="margin-top:4px"></div>
    <div><label style="font-size:0.78rem;color:var(--accent);font-weight:600">Type d'étude</label><input id="ppt_type" placeholder="Ex: Étude transversale" style="margin-top:4px"></div>
    <div><label style="font-size:0.78rem;color:var(--accent);font-weight:600">Population / Échantillon</label><input id="ppt_population" placeholder="Ex: Étudiants paramédicaux, n=59" style="margin-top:4px"></div>
    <div><label style="font-size:0.78rem;color:var(--accent);font-weight:600">Institution</label><input id="ppt_institution" placeholder="Université / ISSA / Centre de recherche" style="margin-top:4px"></div>
  </div>

  <!-- INTRODUCTION IA -->
  <div style="padding:14px;background:rgba(99,102,241,0.08);border-left:4px solid #6366f1;border-radius:6px;margin-bottom:14px">
    <div style="font-size:0.82rem;font-weight:600;color:#6366f1;margin-bottom:10px">📋 Introduction — Contexte · Problématique · Objectifs</div>
    <div class="grid-2" style="gap:10px;margin-bottom:10px">
      <div><label style="font-size:0.75rem;color:var(--muted)">Contexte / Justification</label><textarea id="ppt_context" rows="2" placeholder="Contexte épidémiologique ou scientifique..." style="margin-top:3px;font-size:0.8rem"></textarea></div>
      <div><label style="font-size:0.75rem;color:var(--muted)">Problématique</label><textarea id="ppt_problem" rows="2" placeholder="Question de recherche centrale..." style="margin-top:3px;font-size:0.8rem"></textarea></div>
      <div><label style="font-size:0.75rem;color:var(--muted)">Objectif général</label><textarea id="ppt_objective" rows="2" placeholder="Analyser / Évaluer / Identifier..." style="margin-top:3px;font-size:0.8rem"></textarea></div>
      <div><label style="font-size:0.75rem;color:var(--muted)">Méthodes statistiques</label><textarea id="ppt_stats" rows="2" placeholder="Chi² de Pearson, régression, α=0,05..." style="margin-top:3px;font-size:0.8rem"></textarea></div>
    </div>
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
      <button class="btn btn-ai btn-sm" onclick="generateIntroAI()">🤖 Générer l'Introduction automatiquement</button>
      <button class="btn btn-secondary btn-sm" onclick="prefillFromTheme()">✨ Pré-remplir depuis thème</button>
      <span id="intro_gen_status" style="font-size:0.75rem;color:var(--muted)"></span>
    </div>
  </div>

  <!-- LOGO -->
  <div style="margin-bottom:12px">
    <label style="font-size:0.78rem;color:var(--accent);font-weight:600">Logo</label>
    <div style="display:flex;gap:6px;margin-top:4px">
      <input id="ppt_logo_url" placeholder="URL de votre logo (optionnel)" style="flex:1;font-size:0.82rem">
      <label style="cursor:pointer"><span class="btn btn-secondary btn-sm">📁 Importer</span><input type="file" id="ppt_logo_file" accept="image/*" style="display:none" onchange="loadLogoFile(event)"></label>
    </div>
  </div>

  <!-- DENSITÉ SLIDES -->
  <div style="padding:12px;background:rgba(0,212,170,0.07);border-radius:8px;border-left:3px solid var(--accent);margin-bottom:12px">
    <div style="font-size:0.8rem;font-weight:600;color:var(--accent);margin-bottom:8px">📐 Densité de slides par section</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px">
      <div>
        <label style="font-size:0.75rem;color:var(--muted)">Résultats descriptifs</label>
        <select id="ppt_density_desc" style="margin-top:3px;font-size:0.8rem">
          <option value="auto">Auto — quanti+quali séparés, 1 graphique/slide</option>
          <option value="1">1 variable par slide</option>
          <option value="2">2 variables par slide</option>
          <option value="3">3 variables par slide</option>
        </select>
      </div>
      <div>
        <label style="font-size:0.75rem;color:var(--muted)">Analyses bivariées</label>
        <select id="ppt_density_biv" style="margin-top:3px;font-size:0.8rem">
          <option value="auto">Auto — sig. 1/slide, non-sig. 2/slide</option>
          <option value="1">1 analyse par slide</option>
          <option value="2">2 analyses par slide</option>
        </select>
      </div>
      <div>
        <label style="font-size:0.75rem;color:var(--muted)">Régression</label>
        <select id="ppt_density_reg" style="margin-top:3px;font-size:0.8rem">
          <option value="1">1 modèle par slide</option>
          <option value="all">Tout regroupé (1-2 slides max)</option>
        </select>
      </div>
    </div>
  </div>

  <!-- OPTIONS -->
  <div style="padding:10px;background:rgba(99,102,241,0.05);border-radius:8px;margin-bottom:14px">
    <div style="display:flex;flex-wrap:wrap;gap:12px">
      <label style="font-size:0.82rem"><input type="checkbox" id="ppt_sort_sig" checked> Sig. en premier</label>
      <label style="font-size:0.82rem"><input type="checkbox" id="ppt_show_ai" checked> Interprétations IA</label>
      <label style="font-size:0.82rem"><input type="checkbox" id="ppt_show_discussion" checked> Discussion & Conclusion</label>
      <label style="font-size:0.82rem"><input type="checkbox" id="ppt_show_toc" checked> Sommaire</label>
      <label style="font-size:0.82rem"><input type="checkbox" id="ppt_show_footer" checked> Pied de page + N° slide</label>
    </div>
  </div>

  <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
    <button class="btn btn-primary" style="font-size:0.92rem;padding:10px 22px" onclick="exportPowerPoint()">🎓 Générer PowerPoint</button>
    <span id="ppt_status" style="font-size:0.8rem;color:var(--muted)"></span>
  </div>
</div>
</div>

<script>
// ─── TEMPLATE SELECTION ──────────────────────────────────────────────────────────
window.__selectedTpl = 'academic';
function selectTemplate(tpl) {
  window.__selectedTpl = tpl;
  document.getElementById('ppt_template').value = tpl;
  document.querySelectorAll('.tpl-card').forEach(c => {
    c.style.border = c.dataset.tpl === tpl ? '2px solid var(--accent)' : '2px solid #ccc';
    c.style.boxShadow = c.dataset.tpl === tpl ? '0 0 0 3px rgba(0,212,170,0.25)' : 'none';
  });
}

// Template color palettes
const TPL_THEMES = {
  academic: { C:'003087', CA:'00d4aa', CW:'FFFFFF', CG:'F0F4F8', CD:'334155', CM:'64748B', dark:'001a4d' },
  health:   { C:'065f46', CA:'10b981', CW:'FFFFFF', CG:'ECFDF5', CD:'1e3a2f', CM:'4b7a68', dark:'022c22' },
  dark:     { C:'0f172a', CA:'f59e0b', CW:'FFFFFF', CG:'1e293b', CD:'e2e8f0', CM:'94a3b8', dark:'020617' },
  light:    { C:'f8fafc', CA:'6366f1', CW:'FFFFFF', CG:'f1f5f9', CD:'1e293b', CM:'64748b', dark:'e2e8f0', titleColor:'1e293b' }
};

// ─── INTRO GENERATOR ─────────────────────────────────────────────────────────────
async function generateIntroAI() {
  const theme = getTheme();
  const statusEl = document.getElementById('intro_gen_status');
  if (!theme && !DATA.length) return alert('Renseignez le thème dans ⚙️ Paramètres ou chargez des données');
  statusEl.textContent = '⏳ Génération en cours...';
  const varList = COLS.map(c => `${c.name} (${c.type==='num'?'quantitative':'qualitative'})`).join(', ');
  const n = DATA.length;
  const prompt = `Tu es expert en rédaction académique. Génère le contenu de l'introduction d'une soutenance de mémoire.

Thème : "${theme || 'Étude statistique'}"
Données : ${n} observations, variables : ${varList}
Type d'étude : ${document.getElementById('ppt_type').value || 'non précisé'}
Population : ${document.getElementById('ppt_population').value || 'non précisée'}

Génère en JSON strict UNIQUEMENT, sans aucun texte autour, sans markdown, exactement ce format :
{"contexte":"...","problematique":"...","objectif":"...","methodes":"..."}

Chaque champ : 2-3 phrases max, français académique. "methodes" décrit les méthodes statistiques adaptées au type d'étude.`;

  const tmpEl = document.createElement('div');
  try {
    await callAIQueued(prompt, tmpEl, null);
    const raw = (tmpEl.innerText || '').trim().replace(/```json|```/g,'').trim();
    const obj = JSON.parse(raw);
    if (obj.contexte)      document.getElementById('ppt_context').value   = obj.contexte;
    if (obj.problematique) document.getElementById('ppt_problem').value   = obj.problematique;
    if (obj.objectif)      document.getElementById('ppt_objective').value = obj.objectif;
    if (obj.methodes)      document.getElementById('ppt_stats').value     = obj.methodes;
    statusEl.textContent = '✅ Introduction générée';
    setTimeout(() => statusEl.textContent = '', 3000);
  } catch(e) {
    statusEl.textContent = '⚠️ Erreur parsing — vérifiez votre clé API';
  }
}

// ─── LOGO LOADER ─────────────────────────────────────────────────────────────────
function loadLogoFile(e) {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = evt => { document.getElementById('ppt_logo_url').value = evt.target.result; };
  reader.readAsDataURL(file);
}

function prefillFromTheme() {
  const theme = getTheme();
  if (!theme) return alert('Renseignez le thème dans ⚙️ Paramètres');
  if (!document.getElementById('ppt_title').value) document.getElementById('ppt_title').value = theme;
  document.getElementById('intro_gen_status').textContent = '✅ Titre pré-rempli';
  setTimeout(() => document.getElementById('intro_gen_status').textContent = '', 2000);
}

// ─── CANVAS → BASE64 ──────────────────────────────────────────────────────────────
async function canvasToPptBase64(canvas) {
  const off = document.createElement('canvas');
  off.width = canvas.width; off.height = canvas.height;
  const ctx = off.getContext('2d');
  ctx.fillStyle = '#ffffff'; ctx.fillRect(0,0,off.width,off.height);
  ctx.drawImage(canvas,0,0);
  return new Promise((res,rej) => {
    off.toBlob(blob => {
      if (!blob) return rej(new Error('canvas vide'));
      const r = new FileReader();
      r.onload = () => res(r.result.split(',')[1]);
      r.onerror = rej;
      r.readAsDataURL(blob);
    }, 'image/png');
  });
}

// ─── MOTEUR POWERPOINT V26 ────────────────────────────────────────────────────────
async function exportPowerPoint() {
  if (!DATA.length) return alert('Chargez des données d\'abord');
  const tpl      = window.__selectedTpl || 'academic';
  const T        = TPL_THEMES[tpl];
  const C        = T.C, CA = T.CA, CW = T.CW, CG = T.CG, CD = T.CD, dark = T.dark;
  const titleColor = T.titleColor || CW; // light template has dark title text
  const isLight  = tpl === 'light';

  const pptTitle  = document.getElementById('ppt_title').value.trim() || getTheme() || 'Rapport d\'Analyse';
  const pptAuthor = document.getElementById('ppt_author').value.trim();
  const pptDate   = document.getElementById('ppt_date').value ? new Date(document.getElementById('ppt_date').value).toLocaleDateString('fr-FR') : new Date().toLocaleDateString('fr-FR');
  const pptType   = document.getElementById('ppt_type').value.trim();
  const pptPop    = document.getElementById('ppt_population').value.trim();
  const pptCtx    = document.getElementById('ppt_context').value.trim();
  const pptProb   = document.getElementById('ppt_problem').value.trim();
  const pptObj    = document.getElementById('ppt_objective').value.trim();
  const pptStats  = document.getElementById('ppt_stats').value.trim();
  const pptInst   = document.getElementById('ppt_institution').value.trim();
  const pptLogo   = document.getElementById('ppt_logo_url').value.trim();
  const sortSig   = document.getElementById('ppt_sort_sig').checked;
  const showAi    = document.getElementById('ppt_show_ai').checked;
  const showDisc  = document.getElementById('ppt_show_discussion').checked;
  const showToc   = document.getElementById('ppt_show_toc').checked;
  const showFoot  = document.getElementById('ppt_show_footer').checked;
  const densDesc  = document.getElementById('ppt_density_desc').value;
  const densBiv   = document.getElementById('ppt_density_biv').value;
  const densReg   = document.getElementById('ppt_density_reg').value;
  const statusEl  = document.getElementById('ppt_status');

  statusEl.textContent = '⏳ Construction des slides...';

  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE';
  // Transitions (registered as slide-level via pptxgenjs transition property)
  const W = 13.33, H = 7.5;
  let slideCount = 0;

  // ── HELPERS ──────────────────────────────────────────────────────────────────
  function hs(h) { return h.replace('#',''); } // hex sans #

  function newSlide(transition) {
    slideCount++;
    const s = pptx.addSlide();
    if (transition) {
      try { s.transition = { type: transition }; } catch(e) {}
    }
    return s;
  }

  function addFooter(slide, num) {
    if (!showFoot) return;
    slide.addShape(pptx.ShapeType.rect, { x:0, y:H-0.32, w:W, h:0.32, fill:{color:dark}, line:{color:dark} });
    slide.addText(String(num), { x:W-0.7, y:H-0.30, w:0.6, h:0.26, fontSize:9, color:CA, align:'right', bold:true });
    const ft = (pptInst || pptTitle).substring(0,65);
    slide.addText(ft, { x:0.2, y:H-0.30, w:W*0.6, h:0.26, fontSize:8, color:CW, opacity:0.75 });
  }

  function addHeader(slide, title, subtitle) {
    if (isLight) {
      slide.addShape(pptx.ShapeType.rect, { x:0, y:0, w:W, h:0.08, fill:{color:CA}, line:{color:CA} });
      slide.addShape(pptx.ShapeType.rect, { x:0, y:0.08, w:W, h:1.0, fill:{color:CG}, line:{color:CG} });
      slide.addText(title, { x:0.4, y:0.1, w: pptLogo ? W-2 : W-0.8, h:0.8, fontSize:20, bold:true, color:CD, valign:'middle' });
    } else {
      slide.addShape(pptx.ShapeType.rect, { x:0, y:0, w:W, h:1.05, fill:{color:C}, line:{color:C} });
      slide.addShape(pptx.ShapeType.rect, { x:0, y:1.05, w:W, h:0.06, fill:{color:CA}, line:{color:CA} });
      slide.addText(title, { x:0.4, y:0.1, w: pptLogo ? W-2 : W-0.8, h:0.8, fontSize:20, bold:true, color:titleColor, valign:'middle' });
    }
    if (pptLogo) {
      try {
        const ext = pptLogo.includes('png') ? 'png' : 'jpeg';
        slide.addImage({ data: pptLogo, x:W-1.7, y:0.1, w:1.3, h:0.85, sizing:{type:'contain',w:1.3,h:0.85} });
      } catch(e) {}
    }
    if (subtitle) {
      slide.addText(subtitle, { x:0.4, y:1.15, w:W-0.8, h:0.38, fontSize:12, color:CD, italic:true });
    }
  }

  function addAiBox(slide, text, y) {
    if (!text || !showAi || y > H-1.5) return;
    const t = text.substring(0, 340);
    slide.addShape(pptx.ShapeType.rect, { x:0.3, y:y, w:W-0.6, h:0.05, fill:{color:CA}, line:{color:CA} });
    slide.addShape(pptx.ShapeType.rect, { x:0.3, y:y+0.05, w:W-0.6, h:1.55, fill:{color:'EEF2FF'}, line:{color:'C7D2FE', pt:0.5} });
    slide.addText('🤖 ' + t, { x:0.42, y:y+0.10, w:W-0.84, h:1.45, fontSize:10.5, color:'3730A3', wrap:true, valign:'top' });
  }

  function addTable(slide, headers, rows, y, maxH) {
    const yp = y || 1.65;
    const maxR = maxH ? Math.floor(maxH/0.30) : 13;
    const disp = rows.slice(0, maxR);
    if (!headers.length || !disp.length) return yp;
    const td = [
      headers.map(h => ({ text:h, options:{ bold:true, color:CW, fill:{color:C}, align:'center', fontSize:10 } })),
      ...disp.map((row,ri) => row.map(cell => ({
        text: String(cell||''),
        options:{ color:CD, fill:{color: ri%2===0 ? CG : CW}, fontSize:9.5, align:'center' }
      })))
    ];
    const tH = Math.min(3.4, 0.32*(disp.length+1));
    slide.addTable(td, { x:0.3, y:yp, w:W-0.6, h:tH, colW:headers.map(()=>(W-0.6)/headers.length), border:{pt:0.5,color:'D1D5DB'} });
    return yp + tH + 0.1;
  }

  // ── SECTION TITLE SLIDE ────────────────────────────────────────────────────────
  function addSectionSlide(title, sub) {
    const s = newSlide('fade');
    s.addShape(pptx.ShapeType.rect, { x:0, y:0, w:W, h:H, fill:{color:C}, line:{color:C} });
    s.addShape(pptx.ShapeType.rect, { x:0, y:H*0.56, w:W, h:H*0.44, fill:{color:dark}, line:{color:dark} });
    s.addShape(pptx.ShapeType.rect, { x:W*0.35, y:H*0.52, w:W*0.3, h:0.07, fill:{color:CA}, line:{color:CA} });
    s.addText(title, { x:0.5, y:H*0.2, w:W-1, h:1, fontSize:26, bold:true, color:isLight?CD:CW, align:'center' });
    if (sub) s.addText(sub, { x:0.5, y:H*0.38, w:W-1, h:0.5, fontSize:14, color:CA, align:'center' });
    if (pptLogo) { try { s.addImage({data:pptLogo,x:W-1.9,y:0.3,w:1.5,h:1.1,sizing:{type:'contain',w:1.5,h:1.1}}); } catch(e){} }
    addFooter(s, slideCount);
    return s;
  }

  // ═══════ SLIDE 1 — PAGE TITRE ═══════════════════════════════════════════════════
  const s1 = newSlide('none');
  s1.addShape(pptx.ShapeType.rect, { x:0, y:0, w:W, h:H, fill:{color:C} });
  s1.addShape(pptx.ShapeType.rect, { x:0, y:H-2.2, w:W, h:2.2, fill:{color:dark}, line:{color:dark} });
  s1.addShape(pptx.ShapeType.rect, { x:0.5, y:H*0.42, w:2.2, h:0.08, fill:{color:CA}, line:{color:CA} });
  s1.addText(pptTitle, { x:0.5, y:1.0, w:pptLogo ? W-2.8 : W-1, h:2.0, fontSize:28, bold:true, color:isLight?CD:CW, wrap:true, valign:'middle' });
  const s1sub = [pptType, pptPop, pptInst].filter(Boolean).join('  •  ');
  if (s1sub) s1.addText(s1sub, { x:0.5, y:H*0.44, w:W-1, h:0.5, fontSize:13, color:CA, italic:true });
  s1.addText([pptAuthor, pptDate].filter(Boolean).join('    |    '), { x:0.5, y:H-1.6, w:W-1, h:0.45, fontSize:14, color:CW, bold:false });
  if (pptLogo) { try { s1.addImage({data:pptLogo,x:W-2.4,y:0.4,w:1.8,h:1.5,sizing:{type:'contain',w:1.8,h:1.5}}); } catch(e){} }
  if (showFoot) s1.addShape(pptx.ShapeType.rect, { x:0, y:H-0.32, w:W, h:0.32, fill:{color:dark}, line:{color:dark} });

  // ═══════ SLIDE SOMMAIRE ══════════════════════════════════════════════════════════
  const planSections = [];
  planSections.push('Introduction');
  planSections.push('Méthodologie');
  const descData = Array.from(document.querySelectorAll('#descContainer .card'));
  const bivCards = Array.from(document.querySelectorAll('#bivariateResults .card'));
  const regCards = Array.from(document.querySelectorAll('#regressionResults .card'));
  const nSigBiv = bivCards.filter(c => parseFloat(c.getAttribute('data-pval')||'1') < 0.05).length;
  if (descData.length) planSections.push(`Résultats descriptifs (${descData.length} variables)`);
  if (bivCards.length) planSections.push(`Analyses bivariées (${bivCards.length} analyses · ${nSigBiv} sig.)`);
  if (regCards.length) planSections.push(`Analyse de régression`);
  const disc = (document.getElementById('discussionContent')?.innerText||'').trim();
  const conc = (document.getElementById('conclusionContent')?.innerText||'').trim();
  if (showDisc && disc) planSections.push('Discussion');
  if (showDisc && conc) planSections.push('Conclusion & Recommandations');

  if (showToc) {
    const sToc = newSlide('wipe');
    addHeader(sToc, 'Plan de la présentation');
    sToc.addText(planSections.map((s,i)=>({
      text:`${i+1}.  ${s}\n`,
      options:{ fontSize:15, color:CD, bold:false, paraSpaceAfter:6 }
    })), { x:0.6, y:1.55, w:W-1.2, h:H-2.2 });
    addFooter(sToc, slideCount);
  }

  // ═══════ INTRODUCTION ════════════════════════════════════════════════════════════
  {
    const sI = newSlide('push');
    addHeader(sI, 'Introduction', null);
    const items = [];
    if (pptCtx)  items.push({ label:'Contexte', text:pptCtx });
    if (pptProb) items.push({ label:'Problématique', text:pptProb });
    if (pptObj)  items.push({ label:'Objectif général', text:pptObj });
    if (!items.length) items.push({ label:'Contexte', text:'(Utilisez le bouton "🤖 Générer l\'Introduction" pour remplir automatiquement cette section)' });

    let iy = isLight ? 1.5 : 1.6;
    items.forEach(item => {
      sI.addShape(pptx.ShapeType.rect, { x:0.3, y:iy, w:0.07, h:0.45, fill:{color:CA}, line:{color:CA} });
      sI.addText(item.label.toUpperCase(), { x:0.5, y:iy, w:3.5, h:0.3, fontSize:10, bold:true, color:C });
      sI.addText(item.text, { x:0.5, y:iy+0.3, w:W-0.9, h:0.75, fontSize:12.5, color:CD, wrap:true });
      iy += 1.25;
    });
    addFooter(sI, slideCount);
  }

  // ═══════ MÉTHODOLOGIE ════════════════════════════════════════════════════════════
  {
    const sM = newSlide('push');
    addHeader(sM, 'Méthodologie');
    const methRows = [
      ['Type d\'étude', pptType || '—'],
      ['Population / Échantillon', pptPop || '—'],
      ['Observations importées', `${DATA.length} observations, ${COLS.length} variables`],
      ['Variables analysées', COLS.map(c=>c.name).slice(0,8).join(', ')+(COLS.length>8?'…':'')],
      ['Méthodes statistiques', pptStats || 'Analyses descriptives, bivariées (Chi²), régression'],
      ['Seuil de significativité', 'α = 0,05']
    ].filter(r => r[1] !== '—' || r[0]);
    addTable(sM, ['Paramètre','Description'], methRows, isLight?1.5:1.65, 4.5);
    addFooter(sM, slideCount);
  }

  // ═══════ RÉSULTATS DESCRIPTIFS ═══════════════════════════════════════════════════
  if (descData.length) {
    addSectionSlide('Résultats Descriptifs', `${descData.length} variables analysées`);

    // Grouper selon densité
    const perSlide = densDesc === 'auto' ? null : parseInt(densDesc);
    const groups = [];
    if (!perSlide) {
      // auto : 1 var/slide sauf si numérique → peut grouper
      descData.forEach(card => {
        const type = card.getAttribute('data-type') || 'cat';
        const hasChart = !!card.querySelector('canvas');
        groups.push([card]); // 1/slide par défaut en auto
      });
    } else {
      for (let i = 0; i < descData.length; i += perSlide) groups.push(descData.slice(i, i+perSlide));
    }

    for (const group of groups) {
      const sD = newSlide('appear');
      const colNames = group.map(c=>c.getAttribute('data-col')).filter(Boolean).join(' · ');
      addHeader(sD, colNames, `Variables descriptives — ${slideCount} / ${slideCount}`);
      let yPos = isLight ? 1.5 : 1.65;
      const spacePerCard = (H - yPos - 0.35) / group.length;

      for (const card of group) {
        const col = card.getAttribute('data-col') || '';
        const canvas = card.querySelector('canvas');
        const table  = card.querySelector('table');
        const aiEl   = card.querySelector('.ai-desc-var');
        const aiText = aiEl ? (aiEl.innerText||'').trim() : '';
        const colType = card.getAttribute('data-type') || 'cat';

        if (canvas) {
          try {
            const b64 = await canvasToPptBase64(canvas);
            const vals = cleanVals(col);
            const freq = {}; vals.forEach(v=>freq[v]=(freq[v]||0)+1);
            const isPie = Object.keys(freq).length <= 4 && colType !== 'num';
            const imgW = group.length === 1 ? (isPie ? 3.5 : 5.5) : (isPie ? 2.8 : 4.2);
            const imgH = group.length === 1 ? 2.9 : 2.2;
            sD.addImage({ data:'data:image/png;base64,'+b64, x:0.3, y:yPos, w:imgW, h:imgH });
            // Tableau à côté du graphique
            if (table && group.length === 1) {
              const ths = Array.from(table.querySelectorAll('th')).map(th=>th.innerText.trim());
              const trs = Array.from(table.querySelectorAll('tr')).slice(1).map(tr=>Array.from(tr.querySelectorAll('td')).map(td=>td.innerText.trim())).filter(r=>r.length);
              const tX = isPie ? 4.1 : 6.0;
              const tW = W - tX - 0.3;
              if (ths.length && trs.length) {
                const td2 = [
                  ths.map(h=>({text:h,options:{bold:true,color:CW,fill:{color:C},align:'center',fontSize:9}})),
                  ...trs.slice(0,9).map((row,ri)=>row.map(cell=>({text:cell,options:{color:CD,fill:{color:ri%2===0?CG:CW},fontSize:9,align:'center'}})))
                ];
                sD.addTable(td2,{x:tX,y:yPos,w:tW,h:imgH,colW:ths.map(()=>tW/ths.length),border:{pt:0.5,color:'D1D5DB'}});
              }
            }
            yPos += imgH + 0.1;
          } catch(e) {
            if (table) {
              const ths = Array.from(table.querySelectorAll('th')).map(th=>th.innerText.trim());
              const trs = Array.from(table.querySelectorAll('tr')).slice(1).map(tr=>Array.from(tr.querySelectorAll('td')).map(td=>td.innerText.trim())).filter(r=>r.length);
              yPos = addTable(sD, ths, trs, yPos, 2.8);
            }
          }
        } else if (table) {
          const ths = Array.from(table.querySelectorAll('th')).map(th=>th.innerText.trim());
          const trs = Array.from(table.querySelectorAll('tr')).slice(1).map(tr=>Array.from(tr.querySelectorAll('td')).map(td=>td.innerText.trim())).filter(r=>r.length);
          yPos = addTable(sD, ths, trs, yPos, 2.8);
        }
        // IA si seul dans la slide
        if (group.length === 1) addAiBox(sD, aiText, yPos);
        addFooter(sD, slideCount);
      }
    }
  }

  // ═══════ ANALYSES BIVARIÉES ═══════════════════════════════════════════════════════
  if (bivCards.length) {
    // Collecter et trier
    let bivData = bivCards.map(card => ({
      card,
      title: card.getAttribute('data-cardtitle') || '',
      tabLabel: card.getAttribute('data-tablabel') || '',
      pval: parseFloat(card.getAttribute('data-pval') || '1'),
      chi2: card.getAttribute('data-chi2') || '',
      df: card.getAttribute('data-df') || '',
      sig: parseFloat(card.getAttribute('data-pval') || '1') < 0.05,
      aiText: (document.getElementById('ai_'+card.id)?.innerText||'').trim(),
      table: card.querySelector('table')
    }));
    if (sortSig) bivData.sort((a,b) => { if (a.sig&&!b.sig) return -1; if (!a.sig&&b.sig) return 1; return a.pval-b.pval; });

    addSectionSlide('Analyses Bivariées', `${bivData.length} analyses · ${bivData.filter(d=>d.sig).length} significatives (p < 0,05)`);

    // Slide résumé
    const sBSum = newSlide('wipe');
    addHeader(sBSum, 'Vue d\'ensemble — Analyses bivariées', `Triées par significativité (α = 0,05)`);
    addTable(sBSum,
      ['Association', 'Chi²', 'p-value', 'Résultat'],
      bivData.map(d=>[
        d.title.substring(0,42),
        d.chi2||'—',
        d.pval<0.001?'< 0,001':d.pval<0.01?'< 0,01':d.pval<0.05?'< 0,05':d.pval.toFixed(3),
        d.sig ? '✅ Sig.' : '❌ Non'
      ]), isLight?1.5:1.65, 4.5);
    addFooter(sBSum, slideCount);

    // Grouper selon densité
    const bivPerSlide = densBiv === 'auto' ? null : parseInt(densBiv);
    const bivGroups = [];
    if (!bivPerSlide) {
      // sig seuls / non-sig groupés par 2
      bivData.forEach(d => {
        if (d.sig) bivGroups.push([d]);
        else {
          const last = bivGroups[bivGroups.length-1];
          if (last && !last[0].sig && last.length < 2) last.push(d);
          else bivGroups.push([d]);
        }
      });
    } else {
      for (let i = 0; i < bivData.length; i += bivPerSlide) bivGroups.push(bivData.slice(i, i+bivPerSlide));
    }

    for (const group of bivGroups) {
      const sB = newSlide('appear');
      const groupTitle = group.length === 1 ? group[0].title : `Analyses ${group.map(d=>d.title.split(' ')[0]).join(' · ')}`;
      const sigLabel = group.map(d => d.sig ? '✅ p<0,05' : '❌ p≥0,05').join('  ·  ');
      addHeader(sB, groupTitle.substring(0,68), sigLabel);

      // Pastille sig pour slide solo
      if (group.length === 1) {
        const d = group[0];
        const pColor = d.sig ? '16A34A' : '9CA3AF';
        sB.addShape(pptx.ShapeType.rect, { x:W-2.5, y:0.15, w:2.1, h:0.48, fill:{color:pColor}, line:{color:pColor} });
        sB.addText(`Chi²=${d.chi2} · ddl=${d.df} · p=${d.pval<0.001?'<0,001':d.pval.toFixed(3)}`, { x:W-2.5, y:0.15, w:2.1, h:0.48, fontSize:9, bold:true, color:CW, align:'center', valign:'middle' });
      }

      let yPos = isLight ? 1.5 : 1.65;
      for (const d of group) {
        if (d.table) {
          const ths = Array.from(d.table.querySelectorAll('th')).map(th=>th.innerText.trim());
          const trs = Array.from(d.table.querySelectorAll('tr')).slice(1).map(tr=>Array.from(tr.querySelectorAll('td')).map(td=>td.innerText.trim())).filter(r=>r.length);
          yPos = addTable(sB, ths, trs, yPos, group.length===1 ? 3.0 : 2.2);
        }
        if (group.length === 1 && d.aiText) addAiBox(sB, d.aiText, yPos);
      }
      addFooter(sB, slideCount);
    }
  }

  // ═══════ RÉGRESSION ═══════════════════════════════════════════════════════════════
  if (regCards.length) {
    addSectionSlide('Analyse de Régression', 'Facteurs explicatifs');

    const regGroups = densReg === 'all' ? [Array.from(regCards)] : Array.from(regCards).map(c=>[c]);

    for (const group of regGroups) {
      const sR = newSlide('appear');
      const regTitle = group.length===1 ? (group[0].getAttribute('data-cardtitle')||'Régression') : 'Résultats de Régression';
      addHeader(sR, regTitle, group[0].getAttribute('data-tablabel')||null);
      let yPos = isLight ? 1.5 : 1.65;
      for (const card of group) {
        card.querySelectorAll('table').forEach(tEl => {
          const ths = Array.from(tEl.querySelectorAll('th')).map(th=>th.innerText.trim());
          const trs = Array.from(tEl.querySelectorAll('tr')).slice(1).map(tr=>Array.from(tr.querySelectorAll('td')).map(td=>td.innerText.trim())).filter(r=>r.length);
          if (ths.length && trs.length && yPos < H-1.4) yPos = addTable(sR, ths, trs, yPos, 2.6);
        });
        const aiEl = document.getElementById('ai_reg_card');
        const aiText = aiEl ? (aiEl.innerText||'').trim() : '';
        if (group.length===1 && aiText) addAiBox(sR, aiText, Math.min(yPos, H-2.0));
      }
      addFooter(sR, slideCount);
    }
  }

  // ═══════ DISCUSSION ═══════════════════════════════════════════════════════════════
  if (showDisc && disc) {
    const dParas = disc.split(/\n+/).filter(l=>l.trim());
    for (let ci=0; ci<dParas.length; ci+=5) {
      const sD2 = newSlide('fade');
      addHeader(sD2, 'Discussion', ci===0?null:`(suite)`);
      const chunk = dParas.slice(ci,ci+5).map(p => {
        const isTit = /^[A-ZÀÂÆÇÉÈÊËÎÏÔŒÙÛÜŸ\s\d'.,-]{4,}$/.test(p.trim()) && p===p.toUpperCase();
        return {text:p.trim()+'\n', options:{fontSize:isTit?14:12,bold:isTit,color:isTit?C:CD,paraSpaceAfter:8}};
      });
      sD2.addText(chunk, {x:0.4,y:isLight?1.5:1.65,w:W-0.8,h:H-2.2,wrap:true,valign:'top'});
      addFooter(sD2, slideCount);
    }
  }

  // ═══════ CONCLUSION ═══════════════════════════════════════════════════════════════
  if (showDisc && conc) {
    const cParas = conc.split(/\n+/).filter(l=>l.trim());
    for (let ci=0; ci<cParas.length; ci+=6) {
      const sC = newSlide('fade');
      addHeader(sC, 'Conclusion & Recommandations', ci===0?null:`(suite)`);
      const chunk = cParas.slice(ci,ci+6).map(p => {
        const isTit = /^[A-ZÀÂÆÇÉÈÊËÎÏÔŒÙÛÜŸ\s\d'.,-]{4,}$/.test(p.trim()) && p===p.toUpperCase();
        const isNum = /^\d+\./.test(p.trim());
        return {text:p.trim()+'\n',options:{fontSize:isTit?14:12,bold:isTit||isNum,color:isTit?C:CD,paraSpaceAfter:9,bullet:isNum}};
      });
      sC.addText(chunk, {x:0.4,y:isLight?1.5:1.65,w:W-0.8,h:H-2.2,wrap:true,valign:'top'});
      addFooter(sC, slideCount);
    }
  }

  // ═══════ FIN / MERCI ══════════════════════════════════════════════════════════════
  const sEnd = newSlide('fade');
  sEnd.addShape(pptx.ShapeType.rect, { x:0, y:0, w:W, h:H, fill:{color:C} });
  sEnd.addShape(pptx.ShapeType.rect, { x:0, y:H*0.56, w:W, h:H*0.44, fill:{color:dark}, line:{color:dark} });
  sEnd.addShape(pptx.ShapeType.rect, { x:W*0.3, y:H*0.52, w:W*0.4, h:0.08, fill:{color:CA}, line:{color:CA} });
  sEnd.addText('Merci pour votre attention', { x:0.5, y:H*0.15, w:W-1, h:1, fontSize:30, bold:true, color:isLight?CD:CW, align:'center' });
  sEnd.addText('Questions & Discussion', { x:0.5, y:H*0.34, w:W-1, h:0.5, fontSize:18, color:CA, align:'center' });
  if (pptAuthor) sEnd.addText(pptAuthor, { x:0.5, y:H*0.72, w:W-1, h:0.4, fontSize:14, color:CW, align:'center', italic:true });
  if (pptInst)   sEnd.addText(pptInst,   { x:0.5, y:H*0.82, w:W-1, h:0.35, fontSize:12, color:CA, align:'center' });
  if (pptLogo) { try { sEnd.addImage({data:pptLogo,x:W/2-1.1,y:H*0.56,w:2.2,h:1.5,sizing:{type:'contain',w:2.2,h:1.5}}); } catch(e){} }
  if (showFoot) sEnd.addShape(pptx.ShapeType.rect, { x:0, y:H-0.32, w:W, h:0.32, fill:{color:dark}, line:{color:dark} });

  // ── SAVE ──────────────────────────────────────────────────────────────────────
  const fileName = 'Soutenance_' + pptTitle.substring(0,40).replace(/[^a-zA-Z0-9]/g,'_') + '.pptx';
  await pptx.writeFile({ fileName });
  statusEl.textContent = `✅ ${slideCount} slides — template "${tpl}" — "${fileName}"`;
  setTimeout(() => statusEl.textContent = '', 7000);
}

// ─── EXPORT EXCEL PRO ─────────────────────────────────────────────────────────────
async function exportExcelPro() {
  if (!DATA.length) return alert('Chargez des données d\'abord');
  const statusEl = document.getElementById('xl_status');
  statusEl.textContent = '⏳ Génération...';
  const wb = XLSX.utils.book_new();
  const decSep = (document.getElementById('xl_decimal')||{value:'comma'}).value;
  const fmtNum = v => {
    if (decSep === 'comma') return typeof v === 'number' ? v.toString().replace('.', ',') : v;
    return v;
  };
  const xlTitle = document.getElementById('xl_title').value.trim() || getTheme() || '';
  const xlAuthor = document.getElementById('xl_author').value.trim() || '';
  const colHex = (document.getElementById('xl_color')||{value:'#003087'}).value.replace('#','');

  // Helper : style en-tête
  function makeWs(data, sheetName) {
    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, sheetName.substring(0,31));
    return ws;
  }

  // ── Feuille Infos ──────────────────────────────────────────────────────────────
  const infoData = [
    ['Rapport d\'Analyse Statistique — StatAnalyse Pro v26'],
    [''],
    ['Titre', xlTitle || '—'],
    ['Auteur(s)', xlAuthor || '—'],
    ['Date de génération', new Date().toLocaleString('fr-FR')],
    ['Observations', DATA.length],
    ['Variables', COLS.length],
    ['Thème de l\'étude', getTheme() || '—'],
  ];
  makeWs(infoData, 'Informations');

  // ── Feuille Données brutes ─────────────────────────────────────────────────────
  if (document.getElementById('xl_raw')?.checked) {
    const headers = COLS.map(c => c.name);
    const rows = DATA.map(r => COLS.map(c => {
      const v = r[c.name];
      return (c.type === 'num' && typeof v === 'number') ? fmtNum(v) : (v ?? '');
    }));
    makeWs([headers, ...rows], 'Données brutes');
  }

  // ── Feuille Descriptif ────────────────────────────────────────────────────────
  if (document.getElementById('xl_desc')?.checked) {
    const descRows = [['Variable', 'Type', 'N valides', 'Modalité / Stat', 'Effectif / Valeur', '%']];
    COLS.forEach(col => {
      const vals = DATA.map(r => String(r[col.name]||'').trim()).filter(v => v && v !== 'undefined');
      if (col.type === 'num') {
        const nums = vals.map(v => parseFloat(v.replace(',','.'))).filter(v => !isNaN(v));
        if (!nums.length) return;
        const mean = nums.reduce((a,b)=>a+b,0)/nums.length;
        const std = Math.sqrt(nums.reduce((a,v)=>(a+(v-mean)**2),0)/nums.length);
        const sorted = [...nums].sort((a,b)=>a-b);
        const med = sorted[Math.floor(sorted.length/2)];
        descRows.push([col.name, 'Quantitative', nums.length, 'Moyenne', fmtNum(+mean.toFixed(3)), '']);
        descRows.push(['', '', '', 'Écart-type', fmtNum(+std.toFixed(3)), '']);
        descRows.push(['', '', '', 'Médiane', fmtNum(+med.toFixed(3)), '']);
        descRows.push(['', '', '', 'Min / Max', fmtNum(+sorted[0].toFixed(3)) + ' / ' + fmtNum(+sorted[sorted.length-1].toFixed(3)), '']);
      } else {
        const freq = {}; vals.forEach(v => freq[v]=(freq[v]||0)+1);
        const sorted = Object.entries(freq).sort((a,b)=>b[1]-a[1]);
        sorted.forEach(([v,n],i) => {
          const pct = fmtNum(+((n/vals.length)*100).toFixed(1));
          descRows.push([i===0 ? col.name : '', i===0 ? 'Qualitative' : '', i===0 ? vals.length : '', v, n, pct+'%']);
        });
      }
      descRows.push(['','','','','','']);
    });
    makeWs(descRows, 'Descriptif');
  }

  // ── Feuille Bivariées ─────────────────────────────────────────────────────────
  if (document.getElementById('xl_biv')?.checked) {
    const bivRows = [['Association (variable dépendante × indépendante)', 'Chi²', 'ddl', 'p-value', 'Significatif (α=0,05)', 'Interprétation IA']];
    document.querySelectorAll('#bivariateResults .card').forEach(card => {
      const title = card.getAttribute('data-cardtitle') || '';
      const chi2 = card.getAttribute('data-chi2') || '';
      const df = card.getAttribute('data-df') || '';
      const pval = parseFloat(card.getAttribute('data-pval') || '1');
      const sig = pval < 0.05 ? 'Oui ✓' : 'Non';
      const aiEl = document.getElementById('ai_' + card.id);
      const aiText = aiEl ? (aiEl.innerText||'').replace(/\n+/g,' ').trim() : '';
      bivRows.push([title, fmtNum(+(parseFloat(chi2)).toFixed(3)), df, fmtNum(pval<0.001?'<0,001':+pval.toFixed(4)), sig, aiText]);
    });
    makeWs(bivRows, 'Bivariées Chi²');
  }

  // ── Feuille Régression ────────────────────────────────────────────────────────
  if (document.getElementById('xl_reg')?.checked) {
    const regRows = [['Modèle', 'Variable', 'Coefficient β', 'Erreur standard', 'Statistique t', 'p-value', 'Significatif']];
    document.querySelectorAll('#regressionResults .card').forEach(card => {
      const modelTitle = card.getAttribute('data-cardtitle') || '';
      card.querySelectorAll('table').forEach(tEl => {
        Array.from(tEl.querySelectorAll('tr')).slice(1).forEach(tr => {
          const cells = Array.from(tr.querySelectorAll('td')).map(td => (td.innerText||td.textContent||'').trim());
          if (cells.length >= 2) regRows.push([modelTitle, ...cells.slice(0,6)]);
        });
      });
    });
    if (regRows.length > 1) makeWs(regRows, 'Régression');
  }

  // ── Feuille Synthèse significatifs ────────────────────────────────────────────
  if (document.getElementById('xl_sig')?.checked) {
    const sigRows = [['SYNTHÈSE DES RÉSULTATS SIGNIFICATIFS (p < 0,05)'], [''], ['Association', 'Chi²', 'p-value', 'Interprétation']];
    let hasSig = false;
    document.querySelectorAll('#bivariateResults .card').forEach(card => {
      const pval = parseFloat(card.getAttribute('data-pval') || '1');
      if (pval >= 0.05) return;
      hasSig = true;
      const title = card.getAttribute('data-cardtitle') || '';
      const chi2 = card.getAttribute('data-chi2') || '';
      const aiEl = document.getElementById('ai_' + card.id);
      const aiText = aiEl ? (aiEl.innerText||'').replace(/\n+/g,' ').trim().substring(0,300) : '';
      sigRows.push([title, fmtNum(+(parseFloat(chi2)).toFixed(3)), fmtNum(pval<0.001?'<0,001':+pval.toFixed(4)), aiText]);
    });
    if (!hasSig) sigRows.push(['Aucune association significative détectée.','','','']);
    if (getTheme()) { sigRows.push(['']); sigRows.push(['Thème', getTheme()]); }
    if (disc) { sigRows.push(['']); sigRows.push(['DISCUSSION', disc.substring(0,1000)]); }
    if (conc) { sigRows.push(['']); sigRows.push(['CONCLUSION', conc.substring(0,1000)]); }
    makeWs(sigRows, 'Synthèse significatifs');
  }

  // ── Feuille Interprétations ───────────────────────────────────────────────────
  if (document.getElementById('xl_interp')?.checked) {
    const interpRows = [['Section', 'Variable / Analyse', 'Interprétation IA']];
    document.querySelectorAll('#descContainer .card').forEach(card => {
      const col = card.getAttribute('data-col') || '';
      const aiEl = card.querySelector('.ai-desc-var');
      const txt = aiEl ? (aiEl.innerText||'').replace(/\n+/g,' ').trim() : '';
      if (txt) interpRows.push(['Descriptif', col, txt]);
    });
    document.querySelectorAll('#bivariateResults .card').forEach(card => {
      const title = card.getAttribute('data-cardtitle') || '';
      const aiEl = document.getElementById('ai_' + card.id);
      const txt = aiEl ? (aiEl.innerText||'').replace(/\n+/g,' ').trim() : '';
      if (txt) interpRows.push(['Bivarié', title, txt]);
    });
    const regAi = document.getElementById('ai_reg_card');
    if (regAi) {
      const txt = (regAi.innerText||'').replace(/\n+/g,' ').trim();
      if (txt) interpRows.push(['Régression', 'Modèle global', txt]);
    }
    if (interpRows.length > 1) makeWs(interpRows, 'Interprétations IA');
  }

  const fileName = 'Rapport_' + (xlTitle||'StatAnalyse').substring(0,30).replace(/[^a-zA-Z0-9]/g,'_') + '.xlsx';
  XLSX.writeFile(wb, fileName);
  statusEl.textContent = `✅ Exporté — "${fileName}"`;
  setTimeout(() => statusEl.textContent = '', 5000);
}

// ═══════════════════════ DASHBOARD TEMPS RÉEL ═══════════════════════
let _dashInterval = null;
let _dashCharts = {};
let _dashCountdown = 30;

async function loadDashboard(manual = false) {
  // Token : priorité champ dashboard > champ admin existant > localStorage
  const tokenEl = document.getElementById('dash_token_input');
  const adminEl = document.getElementById('inputAdminToken');
  let token = (tokenEl && tokenEl.value.trim()) || (adminEl && adminEl.value.trim()) || localStorage.getItem('sa_admin_last') || '';

  if (manual && tokenEl && tokenEl.value.trim()) token = tokenEl.value.trim();

  const statusEl = document.getElementById('dash_status');
  const countEl  = document.getElementById('dash_count');
  const lastEl   = document.getElementById('dash_last');
  const varsEl   = document.getElementById('dash_vars');
  const chartsEl = document.getElementById('dash_charts');
  const tokenZone = document.getElementById('dash_token_zone');

  if (!token) { if (statusEl) statusEl.textContent = 'Entre ton token admin pour charger les réponses.'; return; }
  if (tokenEl && !tokenEl.value) tokenEl.value = token;

  if (statusEl) statusEl.innerHTML = '<span style="color:var(--muted)">⏳ Chargement...</span>';

  try {
    const qData = await sbFetch(`questionnaires?admin_token=eq.${encodeURIComponent(token)}&select=id,title,variables`);
    if (!qData || !qData.length) { if (statusEl) statusEl.innerHTML = '<span style="color:#ff6b6b">❌ Token invalide.</span>'; return; }
    const q = qData[0];

    const parseVars = raw => { if (!raw) return []; if (Array.isArray(raw)) return raw; try { const p = JSON.parse(raw); return Array.isArray(p) ? p : []; } catch(e) { return []; } };
    const vars = parseVars(q.variables);

    const rData = await sbFetch(`responses?questionnaire_id=eq.${encodeURIComponent(q.id)}&select=data,created_at&order=created_at.asc`);
    const responses = rData || [];

    // Stats header
    if (countEl) countEl.textContent = responses.length;
    if (varsEl)  varsEl.textContent  = vars.length;
    if (lastEl) {
      if (responses.length) {
        const d = new Date(responses[responses.length-1].created_at);
        lastEl.textContent = d.toLocaleDateString('fr-FR') + ' ' + d.toLocaleTimeString('fr-FR', {hour:'2-digit',minute:'2-digit'});
      } else { lastEl.textContent = 'Aucune'; }
    }

    if (tokenZone) tokenZone.style.display = 'none';
    if (statusEl)  statusEl.innerHTML = '';

    // Build charts
    if (!chartsEl) return;
    chartsEl.innerHTML = '';
    Object.values(_dashCharts).forEach(c => { try { c.destroy(); } catch(e){} });
    _dashCharts = {};

    vars.forEach((v, idx) => {
      const varName = v.name;
      const type    = v.type || 'list';

      // Collect values
      const vals = responses.map(r => {
        const d = (typeof r.data === 'string') ? (() => { try { return JSON.parse(r.data); } catch(e) { return {}; } })() : (r.data || {});
        return String(d[varName] || '').trim();
      }).filter(x => x);

      // Wrapper card
      const card = document.createElement('div');
      card.className = 'card';
      card.style.cssText = 'padding:16px;';

      // Title
      const title = document.createElement('div');
      title.style.cssText = 'font-family:\'Syne\',sans-serif;font-weight:700;font-size:.85rem;color:var(--accent);margin-bottom:4px;text-transform:uppercase;';
      title.textContent = varName;
      card.appendChild(title);

      // N
      const sub = document.createElement('div');
      sub.style.cssText = 'font-size:.72rem;color:var(--muted);margin-bottom:10px;';
      sub.textContent = vals.length + ' réponse(s)';
      card.appendChild(sub);

      if (!vals.length) {
        const empty = document.createElement('div');
        empty.style.cssText = 'text-align:center;color:var(--muted);font-size:.8rem;padding:20px 0;';
        empty.textContent = 'Aucune réponse';
        card.appendChild(empty);
        chartsEl.appendChild(card);
        return;
      }

      if (type === 'num') {
        // Numeric: show mean / min / max / median - Expert Style
        const nums = vals.map(v => parseFloat(v.replace(',','.'))).filter(v => !isNaN(v));
        const mean = nums.reduce((a,b)=>a+b,0)/nums.length;
        const sorted = [...nums].sort((a,b)=>a-b);
        const med = sorted[Math.floor(sorted.length/2)];
        
        const statsGrid = document.createElement('div');
        statsGrid.style.cssText = 'display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:10px;';
        
        const stats = [
          {label: 'Moyenne', value: mean.toFixed(2), icon: 'μ'},
          {label: 'Médiane', value: med.toFixed(2), icon: 'M'},
          {label: 'Minimum', value: sorted[0], icon: '↓'},
          {label: 'Maximum', value: sorted[sorted.length-1], icon: '↑'}
        ];
        
        stats.forEach(s => {
          statsGrid.innerHTML += `
            <div style="background:var(--surface2); border:1px solid var(--border); border-radius:12px; padding:15px; position:relative; overflow:hidden;">
              <div style="font-size:0.65rem; color:var(--muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;">${s.label}</div>
              <div style="font-size:1.4rem; font-weight:800; color:var(--text); font-family:'Syne',sans-serif;">${s.value}</div>
              <div style="position:absolute; right:10px; bottom:-5px; font-size:2.5rem; opacity:0.05; font-weight:900; color:var(--accent); pointer-events:none;">${s.icon}</div>
            </div>`;
        });
        card.appendChild(statsGrid);
      } else {
        // Categorical: bar chart
        const freq = {};
        vals.forEach(v => freq[v] = (freq[v]||0)+1);
        const sorted = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,12);
        const labels = sorted.map(e=>e[0]);
        const counts = sorted.map(e=>e[1]);
        const pcts   = counts.map(c=>((c/vals.length)*100).toFixed(1));

        const canvas = document.createElement('canvas');
        canvas.height = 180;
        card.appendChild(canvas);

        // Pct table below - Expert Style
        const tblContainer = document.createElement('div');
        tblContainer.className = 'table-container';
        tblContainer.style.marginTop = '15px';
        
        const tbl = document.createElement('table');
        tbl.style.fontSize = '0.8rem';
        tbl.innerHTML = `<thead>
          <tr>
            <th style="padding:8px 12px">Modalité</th>
            <th style="text-align:right; padding:8px 12px">Effectif (n)</th>
            <th style="text-align:right; padding:8px 12px">Fréquence (%)</th>
          </tr>
        </thead>`;
        
        const tbody = document.createElement('tbody');
        sorted.forEach(([lbl,n],i) => {
          tbody.innerHTML += `<tr>
            <td style="padding:8px 12px; font-weight:500; color:var(--text)">${lbl}</td>
            <td style="text-align:right; padding:8px 12px; font-family:monospace">${n}</td>
            <td style="text-align:right; padding:8px 12px; font-family:monospace; color:var(--accent)">${pcts[i]}%</td>
          </tr>`;
        });
        tbl.appendChild(tbody);
        tblContainer.appendChild(tbl);
        card.appendChild(tblContainer);

        chartsEl.appendChild(card);

        // Draw chart after DOM insert
        const palette = ['#10b981','#3b82f6','#6366f1','#a855f7','#ec4899','#f43f5e','#f97316','#eab308','#84cc16','#06b6d4','#0ea5e9','#64748b'];
        _dashCharts['v'+idx] = new Chart(canvas.getContext('2d'), {
          type: 'bar',
          data: {
            labels,
            datasets: [{ data: counts, backgroundColor: labels.map((_,i)=>palette[i%palette.length]), borderRadius: 5, borderSkipped: false }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              datalabels: { color: '#fff', font: { weight:'bold', size: 11 }, formatter: (v,ctx) => pcts[ctx.dataIndex]+'%' }
            },
            scales: {
              x: { ticks: { color:'#94a3b8', font:{size:10} }, grid: { display:false } },
              y: { ticks: { color:'#94a3b8', font:{size:10} }, grid: { color:'rgba(255,255,255,.05)' }, beginAtZero:true }
            }
          }
        });
        return; // card already appended above
      }

      chartsEl.appendChild(card);
    });

    // Reset countdown
    _dashCountdown = 30;
    if (statusEl) statusEl.innerHTML = '<span style="color:var(--accent)">✅ Mis à jour</span>';

  } catch(e) {
    if (statusEl) statusEl.innerHTML = `<span style="color:#ff6b6b">❌ ${e.message}</span>`;
  }
}

// Auto-refresh toutes les 30s quand l'onglet est actif
setInterval(() => {
  const tab = document.getElementById('tab-reponses');
  if (!tab || !tab.classList.contains('active')) { _dashCountdown = 30; return; }
  _dashCountdown--;
  const el = document.getElementById('dash_next_refresh');
  if (el) el.textContent = 'Actualisation auto dans ' + _dashCountdown + 's';
  if (_dashCountdown <= 0) { _dashCountdown = 30; loadDashboard(); }
}, 1000);
// ═══════════════════════════════════════════════════════════════════════

	

// --- LOGIQUE FIREBASE AUTH & HISTORIQUE ---
// --- AUTH DÉSACTIVÉ ---
async function logout() { location.reload(); }

async function addHistory(action, detail) {
  try {
    const hist = JSON.parse(localStorage.getItem('sa_history_local') || '[]');
    hist.unshift({ action, detail, date: new Date().toLocaleString('fr-FR') });
    localStorage.setItem('sa_history_local', JSON.stringify(hist.slice(0, 50)));
  } catch(e) {}
}

async function loadHistory() {
  const list = document.getElementById('historyList');
  if (!list) return;
  try {
    const hist = JSON.parse(localStorage.getItem('sa_history_local') || '[]');
    if (!hist.length) { list.innerHTML = '<div style="padding:20px;text-align:center;color:var(--muted);">Aucun historique.</div>'; return; }
    let html = '<table><tr><th>Date</th><th>Action</th><th>Détail</th></tr>';
    hist.forEach(h => { html += `<tr><td>${h.date}</td><td><b>${h.action}</b></td><td>${h.detail}</td></tr>`; });
    html += '</table>';
    list.innerHTML = html;
  } catch(e) { list.innerHTML = '<div style="padding:20px;text-align:center;color:var(--muted);">Historique indisponible.</div>'; }
}

function clearHistory() {
  localStorage.removeItem('sa_history_local');
  loadHistory();
}


// --- LOGIQUE IA OPTIMISÉE ---
async function interpretSingleVariable(colName) {
  const card = document.querySelector(`[data-col="${colName}"]`);
  if(!card) return;
  const colType = card.getAttribute('data-type');
  let bloc = card.querySelector('.ai-desc-var');
  if (!bloc) { 
    bloc = document.createElement('div'); 
    bloc.className = 'ai-desc-var ai-interpretation'; 
    bloc.style.marginTop = '10px'; 
    card.appendChild(bloc); 
  }
  
  if(bloc.innerText.trim().length > 10 && !confirm("Une interprétation existe déjà. Voulez-vous la régénérer ?")) return;
  
  bloc.style.display = 'block';
  const stats = colType === 'num' ? buildNumStats(colName) : buildCatStats(colName);
  const theme = getTheme();
  const tabRef = card.getAttribute('data-tabref') || '';
  const hasTabSingle = !!card.querySelector('table');
  const tabRefS = card.getAttribute('data-tabref') || '';
  const figRefS = card.getAttribute('data-figref') || '';
  const refNameS = hasTabSingle && tabRefS ? tabRefS.split(':')[0].trim()
                 : (!hasTabSingle && figRefS ? figRefS.split(':')[0].trim() : '');
  const introVerbS = hasTabSingle ? 'montre que' : 'illustre que';
  const startS = refNameS
    ? `OBLIGATOIRE : commence par "${refNameS} ${introVerbS} ...".`
    : `OBLIGATOIRE : commence par "Le tableau montre que..." ou "La figure illustre que...".`;
  const prompt = `Tu es biostatisticien expert. Interprète la variable "${colName}".\nDonnées : ${stats}\nConsignes: français académique, cite les chiffres. ${startS}\n${buildLevelInstruction(getInterpretLevel())}`;
  const cacheKey = `desc_${colName}_${theme}_${getInterpretLevel()}`;
  
  const btnId = `btn_interp_${colName.replace(/[^a-zA-Z0-9]/g,'')}`;
  const btn = document.getElementById(btnId);
  if(btn) btn.disabled = true;
  
  await callAIQueued(prompt, bloc, cacheKey);
  addHistory("IA Descriptif", `Interprétation de ${colName}`);
  
  if(btn && bloc.innerText.trim().length > 20) {
    btn.style.display = 'none';
  } else if(btn) {
    btn.disabled = false;
  }
}

// Override interpretAllDescriptive to skip existing interpretations
const originalInterpretAllDescriptive = interpretAllDescriptive;
interpretAllDescriptive = async function() {
  if (!DATA.length) return alert('Chargez des données');
  const cards = document.querySelectorAll('#descContainer .card');
  addHistory("IA Global", "Lancement interprétation descriptive complète");
  
  for (const card of cards) {
    const bloc = card.querySelector('.ai-desc-var');
    if (bloc && bloc.innerText.trim().length > 20) continue;
    
    const colName = card.getAttribute('data-col');
    const btnId = `btn_interp_${colName.replace(/[^a-zA-Z0-9]/g,'')}`;
    const btn = document.getElementById(btnId);
    if(btn) btn.style.display = 'none';
    
    await interpretSingleVariable(colName);
  }
};

// Auto-hide buttons for variables already interpreted on load
function hideInterpretedButtons() {
  document.querySelectorAll('#descContainer .card').forEach(card => {
    const bloc = card.querySelector('.ai-desc-var');
    if (bloc && bloc.innerText.trim().length > 20) {
      const colName = card.getAttribute('data-col');
      const btnId = `btn_interp_${colName.replace(/[^a-zA-Z0-9]/g,'')}`;
      const btn = document.getElementById(btnId);
      if(btn) btn.style.display = 'none';
    }
  });
}

// Hook checkAuth on load
const oldOnLoad = window.onload;
window.onload = () => {
  if(oldOnLoad) oldOnLoad();
  
  setTimeout(hideInterpretedButtons, 500);
};

</script>
  </main>
</div>


<!-- ═══════════════════════════════════════════════════════════════════════════════ -->
<!-- ENHANCED REGRESSION ENGINE v2 - AUTO-INJECTED -->
<!-- ═══════════════════════════════════════════════════════════════════════════════ -->
<script>
/**
 * ENHANCED REGRESSION ENGINE v2
 * Automatic Type Detection + Metrics + VIF + AI Interpretation
 * 
 * Features:
 * - Automatic detection: Linear OLS | Binary Logistic | OLS+Dummy
 * - Appropriate metrics for each model type
 * - VIF calculation for multicollinearity detection
 * - AI interpretation at multiple levels
 */

// ═══════════════════════════════════════════════════════════════════════════════
// PART 1: AUTOMATIC TYPE DETECTION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Detect the regression type based on Y and X variables
 * @param {Array} yVals - Dependent variable values
 * @param {Array} xTypes - Array of X variable types ('num' or 'cat')
 * @returns {Object} {type, badge, explanation}
 */
function detectRegressionType(yVals, xTypes) {
  // Detect Y type
  const yUnique = [...new Set(yVals.filter(v => v !== null && v !== undefined))];
  const yIsNumeric = yUnique.every(v => typeof v === 'number' || !isNaN(parseFloat(v)));
  const yIsBinary = yUnique.length === 2 && yIsNumeric && yUnique.every(v => v === 0 || v === 1 || v === true || v === false);
  
  // Detect X composition
  const allNumeric = xTypes.every(t => t === 'num');
  const allCategorical = xTypes.every(t => t === 'cat');
  const isMixed = !allNumeric && !allCategorical;
  
  // Decision logic
  if (yIsBinary) {
    return {
      type: 'logistic',
      badge: 'LOGISTIQUE',
      explanation: 'Y binaire détecté (2 modalités) → régression logistique binaire appliquée'
    };
  }
  
  if (yIsNumeric) {
    if (allNumeric) {
      return {
        type: 'linear',
        badge: 'LINÉAIRE',
        explanation: 'Y numérique + X numérique(s) → MCO linéaire appliquée'
      };
    } else if (allCategorical || isMixed) {
      return {
        type: 'ols_dummy',
        badge: 'MCO+DUMMY',
        explanation: 'Y numérique + X catégoriel(s) → MCO avec encodage automatique des variables catégoriques'
      };
    }
  }
  
  return {
    type: 'error',
    badge: 'ERREUR',
    explanation: 'Type de régression non détecté. Vérifiez les types de variables.'
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART 2: LINEAR REGRESSION (OLS)
// ═══════════════════════════════════════════════════════════════════════════════

function linearRegression(yVals, xMatrix) {
  const n = yVals.length;
  const k = xMatrix[0].length;
  const p = k + 1; // Including intercept
  
  // Build X matrix with intercept column
  const X = xMatrix.map(row => [1, ...row]);
  
  // X'X matrix
  const XtX = Array.from({length: p}, (_, i) =>
    Array.from({length: p}, (_, j) => {
      let sum = 0;
      for (let r = 0; r < n; r++) sum += X[r][i] * X[r][j];
      return sum;
    })
  );
  
  // X'Y vector
  const XtY = Array.from({length: p}, (_, i) => {
    let sum = 0;
    for (let r = 0; r < n; r++) sum += X[r][i] * yVals[r];
    return sum;
  });
  
  // Solve (X'X)β = X'Y using Gauss-Jordan elimination
  const coeffs = gaussJordanSolve(XtX, XtY);
  const alpha = coeffs[0];
  const betas = coeffs.slice(1);
  
  // Calculate residuals and R²
  const meanY = yVals.reduce((a, b) => a + b, 0) / n;
  let sse = 0, sst = 0;
  
  for (let i = 0; i < n; i++) {
    const yHat = alpha + betas.reduce((s, b, j) => s + b * xMatrix[i][j], 0);
    sse += (yVals[i] - yHat) ** 2;
    sst += (yVals[i] - meanY) ** 2;
  }
  
  const r2 = sst > 0 ? 1 - sse / sst : 0;
  const r2adj = 1 - (1 - r2) * (n - 1) / (n - p);
  const mse = sse / (n - p);
  const fStat = sst > 0 ? (r2 / k) / ((1 - r2) / (n - p)) : 0;
  const fPval = 1 - fCDF(fStat, k, n - p);
  
  // Calculate SE for coefficients
  const invXtX = invertMatrix(XtX);
  const seCoeffs = invXtX.map((row, i) => Math.sqrt(Math.abs(row[i] * mse)));
  const tStats = coeffs.map((c, i) => seCoeffs[i] > 0 ? c / seCoeffs[i] : 0);
  const pVals = tStats.map((t, i) => 2 * (1 - tCDF(Math.abs(t), n - p)));
  
  // Calculate VIF for each predictor
  const vif = calculateVIF(xMatrix);
  
  return {
    type: 'linear',
    coeffs,
    alpha,
    betas,
    seCoeffs,
    tStats,
    pVals,
    r2,
    r2adj,
    mse,
    fStat,
    fPval,
    n,
    p,
    k,
    vif,
    sse,
    sst
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART 3: BINARY LOGISTIC REGRESSION
// ═══════════════════════════════════════════════════════════════════════════════

function binaryLogisticRegression(yVals, xMatrix) {
  const n = yVals.length;
  const k = xMatrix[0].length;
  const p = k + 1;
  
  // Build X matrix with intercept
  const X = xMatrix.map(row => [1, ...row]);
  
  // Initialize coefficients
  let beta = Array(p).fill(0);
  
  // Newton-Raphson algorithm for logistic regression
  for (let iter = 0; iter < 50; iter++) {
    // Calculate predictions and weights
    const probs = [];
    const weights = [];
    let ll = 0;
    
    for (let i = 0; i < n; i++) {
      const xBeta = beta.reduce((s, b, j) => s + b * X[i][j], 0);
      const prob = 1 / (1 + Math.exp(-xBeta));
      probs.push(prob);
      weights.push(prob * (1 - prob));
      ll += yVals[i] * Math.log(prob + 1e-10) + (1 - yVals[i]) * Math.log(1 - prob + 1e-10);
    }
    
    // Calculate gradient (X'(y - p))
    const gradient = Array(p).fill(0);
    for (let j = 0; j < p; j++) {
      for (let i = 0; i < n; i++) {
        gradient[j] += X[i][j] * (yVals[i] - probs[i]);
      }
    }
    
    // Calculate Hessian (X'WX)
    const hessian = Array(p).fill(0).map(() => Array(p).fill(0));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < p; j++) {
        for (let k = 0; k < p; k++) {
          hessian[j][k] += X[i][j] * weights[i] * X[i][k];
        }
      }
    }
    
    // Update beta: β = β + H^(-1) * g
    const invHessian = invertMatrix(hessian);
    const newBeta = beta.map((b, j) => {
      let delta = 0;
      for (let i = 0; i < p; i++) {
        delta += invHessian[j][i] * gradient[i];
      }
      return b + delta;
    });
    
    // Check convergence
    const maxDelta = Math.max(...newBeta.map((b, i) => Math.abs(b - beta[i])));
    beta = newBeta;
    if (maxDelta < 1e-6) break;
  }
  
  // Calculate final statistics
  const probs = [];
  let ll = 0;
  for (let i = 0; i < n; i++) {
    const xBeta = beta.reduce((s, b, j) => s + b * X[i][j], 0);
    const prob = 1 / (1 + Math.exp(-xBeta));
    probs.push(prob);
    ll += yVals[i] * Math.log(prob + 1e-10) + (1 - yVals[i]) * Math.log(1 - prob + 1e-10);
  }
  
  // Null model (intercept only)
  const pNull = yVals.reduce((a, b) => a + b, 0) / n;
  let llNull = 0;
  for (let i = 0; i < n; i++) {
    llNull += yVals[i] * Math.log(pNull + 1e-10) + (1 - yVals[i]) * Math.log(1 - pNull + 1e-10);
  }
  
  const ll2 = -2 * ll;
  const llNull2 = -2 * llNull;
  const chi2 = llNull2 - ll2;
  const pChiSq = 1 - chi2CDF(chi2, k);
  
  // Nagelkerke R²
  const r2N = 1 - Math.exp(-chi2 / n);
  const r2NMax = 1 - Math.exp(llNull2 / n);
  const nagelkerke = r2N / r2NMax;
  
  // Calculate SE and OR
  const invHessian = invertMatrix(
    Array(p).fill(0).map((_, i) =>
      Array(p).fill(0).map((_, j) => {
        let sum = 0;
        for (let r = 0; r < n; r++) {
          const xBeta = beta.reduce((s, b, l) => s + b * X[r][l], 0);
          const prob = 1 / (1 + Math.exp(-xBeta));
          sum += X[r][i] * prob * (1 - prob) * X[r][j];
        }
        return sum;
      })
    )
  );
  
  const seCoeffs = invHessian.map((row, i) => Math.sqrt(Math.abs(row[i])));
  const tStats = beta.map((b, i) => seCoeffs[i] > 0 ? b / seCoeffs[i] : 0);
  const pVals = tStats.map(t => 2 * (1 - tCDF(Math.abs(t), n - p)));
  
  // OR and CI95%
  const or = beta.map(b => Math.exp(b));
  const ci95 = beta.map((b, i) => {
    const se = seCoeffs[i];
    const z = 1.96;
    const lower = Math.exp(b - z * se);
    const upper = Math.exp(b + z * se);
    return {lower, upper};
  });
  
  // VIF for predictors
  const vif = calculateVIF(xMatrix);
  
  return {
    type: 'logistic',
    beta,
    seCoeffs,
    tStats,
    pVals,
    or,
    ci95,
    ll2,
    llNull2,
    chi2,
    pChiSq,
    nagelkerke,
    n,
    p,
    k,
    vif
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART 4: OLS WITH DUMMY ENCODING
// ═══════════════════════════════════════════════════════════════════════════════

function olsDummyRegression(yVals, xData, xNames, xTypes) {
  // Encode categorical variables as dummy variables
  const dummyMatrix = [];
  const dummyNames = [];
  const encodingMap = {};
  
  for (let j = 0; j < xData[0].length; j++) {
    if (xTypes[j] === 'num') {
      // Numeric variable: keep as is
      dummyMatrix.push(xData.map(row => row[j]));
      dummyNames.push(xNames[j]);
    } else {
      // Categorical variable: create dummies
      const uniqueVals = [...new Set(xData.map(row => row[j]))].sort();
      encodingMap[xNames[j]] = uniqueVals;
      
      // Create k-1 dummies (reference category omitted)
      for (let k = 0; k < uniqueVals.length - 1; k++) {
        const dummyCol = xData.map(row => row[j] === uniqueVals[k] ? 1 : 0);
        dummyMatrix.push(dummyCol);
        dummyNames.push(`${xNames[j]}_${uniqueVals[k]}`);
      }
    }
  }
  
  // Transpose to get rows
  const xMatrix = Array(yVals.length).fill(0).map((_, i) =>
    dummyMatrix.map(col => col[i])
  );
  
  // Run linear regression on dummy-encoded data
  const result = linearRegression(yVals, xMatrix);
  result.dummyNames = dummyNames;
  result.encodingMap = encodingMap;
  result.type = 'ols_dummy';
  
  return result;
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART 5: VIF CALCULATION
// ═══════════════════════════════════════════════════════════════════════════════

function calculateVIF(xMatrix) {
  const n = xMatrix.length;
  const k = xMatrix[0].length;
  const vif = [];
  
  for (let j = 0; j < k; j++) {
    // Regress X_j on all other X's
    const xOthers = xMatrix.map(row =>
      row.filter((_, i) => i !== j)
    );
    
    const yTarget = xMatrix.map(row => row[j]);
    
    // Run regression
    const reg = linearRegression(yTarget, xOthers);
    const r2 = reg.r2;
    
    // VIF = 1 / (1 - R²)
    const vifValue = r2 < 0.9999 ? 1 / (1 - r2) : 999;
    vif.push(vifValue);
  }
  
  return vif;
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART 6: MATRIX OPERATIONS
// ═══════════════════════════════════════════════════════════════════════════════

function gaussJordanSolve(A, b) {
  const n = A.length;
  const aug = A.map((row, i) => [...row, b[i]]);
  
  for (let col = 0; col < n; col++) {
    // Find pivot
    let maxRow = col;
    for (let r = col + 1; r < n; r++) {
      if (Math.abs(aug[r][col]) > Math.abs(aug[maxRow][col])) {
        maxRow = r;
      }
    }
    [aug[col], aug[maxRow]] = [aug[maxRow], aug[col]];
    
    // Eliminate column
    const piv = aug[col][col];
    if (Math.abs(piv) < 1e-12) continue;
    
    for (let j = col; j <= n; j++) {
      aug[col][j] /= piv;
    }
    
    for (let r = 0; r < n; r++) {
      if (r === col) continue;
      const f = aug[r][col];
      for (let j = col; j <= n; j++) {
        aug[r][j] -= f * aug[col][j];
      }
    }
  }
  
  return aug.map(row => row[n]);
}

function invertMatrix(A) {
  const n = A.length;
  const inv = Array(n).fill(0).map(() => Array(n).fill(0));
  for (let i = 0; i < n; i++) inv[i][i] = 1;
  
  const aug = A.map((row, i) => [...row, ...inv[i]]);
  
  for (let col = 0; col < n; col++) {
    let maxRow = col;
    for (let r = col + 1; r < n; r++) {
      if (Math.abs(aug[r][col]) > Math.abs(aug[maxRow][col])) {
        maxRow = r;
      }
    }
    [aug[col], aug[maxRow]] = [aug[maxRow], aug[col]];
    
    const piv = aug[col][col];
    if (Math.abs(piv) < 1e-12) continue;
    
    for (let j = col; j < 2 * n; j++) {
      aug[col][j] /= piv;
    }
    
    for (let r = 0; r < n; r++) {
      if (r === col) continue;
      const f = aug[r][col];
      for (let j = col; j < 2 * n; j++) {
        aug[r][j] -= f * aug[col][j];
      }
    }
  }
  
  return aug.map(row => row.slice(n));
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART 7: STATISTICAL DISTRIBUTIONS
// ═══════════════════════════════════════════════════════════════════════════════

function tCDF(t, df) {
  if (df <= 0) return 0.5;
  const x = df / (df + t * t);
  return 1 - 0.5 * regularizedIncompleteGamma(df / 2, df / (2 * (df + t * t))) * Math.sign(t + 0.0001);
}

function fCDF(f, d1, d2) {
  if (f <= 0) return 0;
  return regularizedIncompleteGamma(d1 / 2, d1 * f / (d1 * f + d2));
}

function chi2CDF(x, k) {
  return regularizedIncompleteGamma(k / 2, x / 2);
}

function regularizedIncompleteGamma(a, x) {
  if (x < 0 || a <= 0) return 0;
  if (x === 0) return 0;
  if (x > a + 1) return 1 - regularizedIncompleteGamma(a, x);
  
  let sum = 0, term = 1 / a;
  for (let i = 0; i < 100; i++) {
    sum += term;
    term *= x / (a + i + 1);
    if (Math.abs(term) < 1e-10) break;
  }
  return sum * Math.exp(-x + a * Math.log(x) - logGamma(a));
}

function logGamma(x) {
  const g = 7;
  const coef = [
    0.99999999999980993,
    676.5203681218851,
    -1259.1392167224028,
    771.32342877765313,
    -176.61502916214059,
    12.507343278686905,
    -0.13857109526572012,
    9.9843695780195716e-6,
    1.5056327351493116e-7
  ];
  
  let z = x - 0.5;
  let base = z + g + 0.5;
  let sum = coef[0];
  
  for (let i = 1; i < coef.length; i++) {
    sum += coef[i] / (z + i);
  }
  
  return Math.log(Math.sqrt(2 * Math.PI)) + z * Math.log(base) - base + Math.log(sum);
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART 8: FORMATTING UTILITIES
// ═══════════════════════════════════════════════════════════════════════════════

function formatPValue(p) {
  if (p < 0.001) return '<b style="color:#ff4444">p < 0.001 ✅✅</b>';
  if (p < 0.01) return '<b style="color:#ff4444">p < 0.01 ✅✅</b>';
  if (p < 0.05) return '<b style="color:#ff4444">p < 0.05 ✅</b>';
  return `p = ${p.toFixed(3)} ❌`;
}

function getSignificanceStars(p) {
  if (p < 0.001) return '***';
  if (p < 0.01) return '**';
  if (p < 0.05) return '*';
  return '';
}

function formatCI(lower, upper) {
  return `[${lower.toFixed(3)}, ${upper.toFixed(3)}]`;
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART 9: RESULTS RENDERING
// ═══════════════════════════════════════════════════════════════════════════════

function renderLinearResults(result, depVar, indepVars) {
  let html = `
    <div style="margin-bottom:12px;padding:10px;background:var(--surface2);border-radius:8px;">
      <div style="font-size:.8rem;color:var(--muted);margin-bottom:6px;font-weight:600">BADGE: <span style="background:var(--accent-glow);color:var(--accent);padding:2px 6px;border-radius:4px">LINÉAIRE</span></div>
      <div style="font-size:.8rem;color:var(--muted);margin-bottom:6px">Y numérique + X numérique(s) → MCO linéaire appliquée</div>
    </div>
    
    <div style="margin-bottom:12px;padding:10px;background:var(--surface2);border-radius:8px;">
      <div style="font-size:.8rem;color:var(--muted);margin-bottom:6px;font-weight:600">QUALITÉ DU MODÈLE</div>
      <div style="display:flex;flex-wrap:wrap;gap:16px;font-size:.85rem;">
        <span>R² = <b style="color:var(--accent)">${result.r2.toFixed(4)}</b></span>
        <span>R² ajusté = <b style="color:var(--accent)">${result.r2adj.toFixed(4)}</b></span>
        <span>F = <b>${result.fStat.toFixed(4)}</b></span>
        <span>${formatPValue(result.fPval)}</span>
        <span>N = <b>${result.n}</b></span>
      </div>
    </div>
    
    <div style="font-size:.8rem;color:var(--muted);margin-bottom:6px;font-weight:600">COEFFICIENTS</div>
    <table>
      <tr>
        <th>Variable</th>
        <th>β</th>
        <th>SE</th>
        <th>t</th>
        <th>p-value</th>
        <th>Significativité</th>
      </tr>
      <tr>
        <td><b>Constante</b></td>
        <td>${result.alpha.toFixed(4)}</td>
        <td>${result.seCoeffs[0].toFixed(4)}</td>
        <td>${result.tStats[0].toFixed(4)}</td>
        <td>${result.pVals[0].toFixed(4)}</td>
        <td>${getSignificanceStars(result.pVals[0])}</td>
      </tr>
  `;
  
  indepVars.forEach((varName, i) => {
    const b = result.betas[i];
    const se = result.seCoeffs[i + 1];
    const t = result.tStats[i + 1];
    const p = result.pVals[i + 1];
    html += `
      <tr>
        <td><b>${varName}</b></td>
        <td>${b.toFixed(4)}</td>
        <td>${se.toFixed(4)}</td>
        <td>${t.toFixed(4)}</td>
        <td>${p.toFixed(4)}</td>
        <td>${getSignificanceStars(p)}</td>
      </tr>
    `;
  });
  
  html += `</table>`;
  
  // VIF section if multivariate
  if (result.vif && result.vif.length > 0) {
    html += `
      <div style="margin-top:12px;padding:10px;background:var(--surface2);border-radius:8px;">
        <div style="font-size:.8rem;color:var(--muted);margin-bottom:6px;font-weight:600">MULTICOLLINÉARITÉ (VIF)</div>
        <table>
          <tr><th>Variable</th><th>VIF</th><th>Alerte</th></tr>
    `;
    indepVars.forEach((varName, i) => {
      const vifVal = result.vif[i];
      const alert = vifVal > 5 ? '⚠️ VIF > 5' : '✅ OK';
      html += `<tr><td>${varName}</td><td>${vifVal.toFixed(3)}</td><td>${alert}</td></tr>`;
    });
    html += `</table></div>`;
  }
  
  return html;
}

function renderLogisticResults(result, depVar, indepVars) {
  let html = `
    <div style="margin-bottom:12px;padding:10px;background:var(--surface2);border-radius:8px;">
      <div style="font-size:.8rem;color:var(--muted);margin-bottom:6px;font-weight:600">BADGE: <span style="background:var(--accent-glow);color:var(--accent);padding:2px 6px;border-radius:4px">LOGISTIQUE</span></div>
      <div style="font-size:.8rem;color:var(--muted);margin-bottom:6px">Y binaire (2 modalités) → régression logistique binaire appliquée</div>
    </div>
    
    <div style="margin-bottom:12px;padding:10px;background:var(--surface2);border-radius:8px;">
      <div style="font-size:.8rem;color:var(--muted);margin-bottom:6px;font-weight:600">QUALITÉ DU MODÈLE</div>
      <div style="display:flex;flex-wrap:wrap;gap:16px;font-size:.85rem;">
        <span>-2LL = <b>${result.ll2.toFixed(4)}</b></span>
        <span>Chi² = <b>${result.chi2.toFixed(4)}</b></span>
        <span>Nagelkerke R² = <b style="color:var(--accent)">${result.nagelkerke.toFixed(4)}</b></span>
        <span>${formatPValue(result.pChiSq)}</span>
        <span>N = <b>${result.n}</b></span>
      </div>
    </div>
    
    <div style="font-size:.8rem;color:var(--muted);margin-bottom:6px;font-weight:600">COEFFICIENTS & ODDS RATIOS</div>
    <table>
      <tr>
        <th>Variable</th>
        <th>β</th>
        <th>SE</th>
        <th>OR</th>
        <th>IC 95%</th>
        <th>p-value</th>
        <th>Significativité</th>
      </tr>
      <tr>
        <td><b>Constante</b></td>
        <td>${result.beta[0].toFixed(4)}</td>
        <td>${result.seCoeffs[0].toFixed(4)}</td>
        <td>${result.or[0].toFixed(4)}</td>
        <td>${formatCI(result.ci95[0].lower, result.ci95[0].upper)}</td>
        <td>${result.pVals[0].toFixed(4)}</td>
        <td>${getSignificanceStars(result.pVals[0])}</td>
      </tr>
  `;
  
  indepVars.forEach((varName, i) => {
    const b = result.beta[i + 1];
    const se = result.seCoeffs[i + 1];
    const or = result.or[i + 1];
    const ci = result.ci95[i + 1];
    const p = result.pVals[i + 1];
    html += `
      <tr>
        <td><b>${varName}</b></td>
        <td>${b.toFixed(4)}</td>
        <td>${se.toFixed(4)}</td>
        <td>${or.toFixed(4)}</td>
        <td>${formatCI(ci.lower, ci.upper)}</td>
        <td>${p.toFixed(4)}</td>
        <td>${getSignificanceStars(p)}</td>
      </tr>
    `;
  });
  
  html += `</table>`;
  
  // VIF section
  if (result.vif && result.vif.length > 0) {
    html += `
      <div style="margin-top:12px;padding:10px;background:var(--surface2);border-radius:8px;">
        <div style="font-size:.8rem;color:var(--muted);margin-bottom:6px;font-weight:600">MULTICOLLINÉARITÉ (VIF)</div>
        <table>
          <tr><th>Variable</th><th>VIF</th><th>Alerte</th></tr>
    `;
    indepVars.forEach((varName, i) => {
      const vifVal = result.vif[i];
      const alert = vifVal > 5 ? '⚠️ VIF > 5' : '✅ OK';
      html += `<tr><td>${varName}</td><td>${vifVal.toFixed(3)}</td><td>${alert}</td></tr>`;
    });
    html += `</table></div>`;
  }
  
  return html;
}

// Export functions for use in HTML
window.RegressionEngine = {
  detectRegressionType,
  linearRegression,
  binaryLogisticRegression,
  olsDummyRegression,
  calculateVIF,
  renderLinearResults,
  renderLogisticResults,
  formatPValue,
  getSignificanceStars
};

</script>

<script>
/**
 * INTEGRATION PATCH
 * This script patches the existing runRegression() function to use the new engine
 * Inject this BEFORE the closing </body> tag in the HTML
 */

// Override the runRegression function with the new engine
const originalRunRegression = window.runRegression;

window.runRegression = async function() {
  const depVar = document.getElementById('regDepVar').value;
  const selectedIndep = Array.from(document.querySelectorAll('input[name="regCol"]:checked')).map(cb => cb.value);
  const resultsDiv = document.getElementById('regressionResults');
  resultsDiv.innerHTML = '';
  
  if (!depVar) return alert('Sélectionnez une variable dépendante');
  if (selectedIndep.length === 0) return alert('Sélectionnez au moins une variable indépendante');

  const theme = getTheme();
  const numStyle = (document.getElementById('numStyle') || {value: 'arabic'}).value;
  
  function fmtRegNum(n) {
    if (numStyle === 'none') return '';
    if (numStyle === 'roman') {
      const r = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX'];
      return r[n-1] || n;
    }
    if (numStyle === 'decimal') return `4.${n}`;
    return n;
  }

  // Collect data
  function getCompleteData(yCol, xCols) {
    const rows = DATA.map(r => {
      const y = parseFloat(String(r[yCol]).replace(',', '.'));
      const xs = xCols.map(col => {
        const colType = (COLS.find(c => c.name === col) || {type:'cat'}).type;
        if (colType === 'num') {
          return parseFloat(String(r[col]).replace(',', '.'));
        } else {
          return String(r[col]);
        }
      });
      if (isNaN(y)) return null;
      return { y, xs };
    }).filter(Boolean);
    return rows;
  }

  // Get column types
  const xTypes = selectedIndep.map(col => {
    const colInfo = COLS.find(c => c.name === col);
    return colInfo ? colInfo.type : 'cat';
  });

  // Prepare data
  const rows = getCompleteData(depVar, selectedIndep);
  if (rows.length < Math.max(selectedIndep.length + 2, 5)) {
    resultsDiv.insertAdjacentHTML('beforeend', 
      `<div class="error-box">❌ Pas assez d'observations complètes (n=${rows.length}) pour ${selectedIndep.length} variables indépendantes</div>`);
    return;
  }

  const yVals = rows.map(r => r.y);
  const xData = rows.map(r => r.xs);

  // Detect regression type
  const typeDetection = RegressionEngine.detectRegressionType(yVals, xTypes);
  
  if (typeDetection.type === 'error') {
    resultsDiv.insertAdjacentHTML('beforeend', 
      `<div class="error-box">❌ ${typeDetection.explanation}</div>`);
    return;
  }

  // Run appropriate regression
  let result;
  let tabCounter = 1;
  let cardTitle = '';
  let tabLabel = '';

  try {
    if (typeDetection.type === 'linear') {
      // Convert all X to numeric
      const xMatrix = xData.map(row => row.map(v => parseFloat(v)));
      result = RegressionEngine.linearRegression(yVals, xMatrix);
      
      if (selectedIndep.length === 1) {
        cardTitle = `Influence de ${selectedIndep[0]} sur ${depVar}`;
      } else {
        cardTitle = selectedIndep.length === 2
          ? `Influence de ${selectedIndep[0]} et ${selectedIndep[1]} sur ${depVar}`
          : `Facteurs explicatifs de ${depVar} (${selectedIndep.length} prédicteurs)`;
      }
      tabLabel = numStyle !== 'none' 
        ? `Tableau ${fmtRegNum(tabCounter)} : Régression linéaire ${selectedIndep.length === 1 ? 'simple' : 'multiple'} — ${depVar} ~ ${selectedIndep.join(' + ')}`
        : `Régression linéaire ${selectedIndep.length === 1 ? 'simple' : 'multiple'} — ${depVar} ~ ${selectedIndep.join(' + ')}`;

    } else if (typeDetection.type === 'logistic') {
      // Binary logistic regression
      result = RegressionEngine.binaryLogisticRegression(yVals, xData);
      
      cardTitle = selectedIndep.length === 1
        ? `Prédiction de ${depVar} par ${selectedIndep[0]}`
        : `Prédicteurs de ${depVar} (${selectedIndep.length} variables)`;
      tabLabel = numStyle !== 'none'
        ? `Tableau ${fmtRegNum(tabCounter)} : Régression logistique binaire — ${depVar} ~ ${selectedIndep.join(' + ')}`
        : `Régression logistique binaire — ${depVar} ~ ${selectedIndep.join(' + ')}`;

    } else if (typeDetection.type === 'ols_dummy') {
      // OLS with dummy encoding
      result = RegressionEngine.olsDummyRegression(yVals, xData, selectedIndep, xTypes);
      
      cardTitle = `Facteurs explicatifs de ${depVar} (variables mixtes)`;
      tabLabel = numStyle !== 'none'
        ? `Tableau ${fmtRegNum(tabCounter)} : Régression avec variables catégoriques — ${depVar} ~ ${selectedIndep.join(' + ')}`
        : `Régression avec variables catégoriques — ${depVar} ~ ${selectedIndep.join(' + ')}`;
    }

    // Render results
    const sectionNum = numStyle !== 'none' ? fmtRegNum(tabCounter) + '. ' : '';
    const varTitle = theme
      ? `<div style="font-size:1rem;font-weight:700;color:var(--text);border-bottom:2px solid var(--border);padding-bottom:6px;margin-bottom:12px">${sectionNum}${cardTitle}</div>`
      : `<div style="font-size:0.95rem;font-weight:600;color:var(--text);border-bottom:1px solid var(--border);padding-bottom:5px;margin-bottom:12px">${cardTitle}</div>`;
    
    const tabCaption = `<div class="fig-caption" style="font-size:0.75rem;color:var(--muted);margin-bottom:4px">${tabLabel}</div>`;
    
    let resultsTable = '';
    if (typeDetection.type === 'linear') {
      resultsTable = RegressionEngine.renderLinearResults(result, depVar, selectedIndep);
    } else if (typeDetection.type === 'logistic') {
      resultsTable = RegressionEngine.renderLogisticResults(result, depVar, selectedIndep);
    } else if (typeDetection.type === 'ols_dummy') {
      resultsTable = RegressionEngine.renderLinearResults(result, depVar, result.dummyNames);
    }

    const html = `<div class="card" id="regResultCard" data-cardtitle="${cardTitle.replace(/"/g,'&quot;')}" data-tablabel="${tabLabel.replace(/"/g,'&quot;')}" data-regtype="${typeDetection.type}">
      ${varTitle}
      <div id="ai_reg_card" class="ai-interpretation" style="display:none;margin-top:10px;margin-bottom:10px"></div>
      ${tabCaption}
      <div style="margin-bottom:12px;padding:10px;background:var(--accent-glow);border-radius:8px;border-left:3px solid var(--accent)">
        <div style="font-size:.85rem;color:var(--accent);font-weight:600">
          <span style="background:var(--accent-glow);color:var(--accent);padding:2px 6px;border-radius:4px;border:1px solid var(--accent)">${typeDetection.badge}</span>
          — ${typeDetection.explanation}
        </div>
      </div>
      ${resultsTable}
    </div>`;

    resultsDiv.insertAdjacentHTML('beforeend', html);
    addHistory("Régression", `${typeDetection.badge} — ${cardTitle}`);

  } catch (e) {
    console.error("Regression error:", e);
    resultsDiv.insertAdjacentHTML('beforeend', 
      `<div class="error-box">❌ Erreur lors du calcul : ${e.message}</div>`);
  }
};

// Ensure the engine is loaded
if (!window.RegressionEngine) {
  console.error("RegressionEngine not loaded! Make sure regression_engine_v2.js is included.");
}

</script>

</body>
</html>
