# 📅 Calendar Concedii 2026

Aplicație web pentru gestionarea concediilor echipei.

## 👥 Angajați
Andreea, Ionut, Carlos, Alex, Mihai, Cristi, George, Ovidiu  
**22 zile de concediu** per angajat

---

## 🚀 Instalare și pornire

### Pe calculator local (testare)

1. Instalează **Node.js** de pe: https://nodejs.org (versiunea LTS)
2. Deschide un terminal/CMD în folderul `calendar-concedii`
3. Rulează:
```
npm install
npm start
```
4. Deschide browserul la: **http://localhost:3000**

---

## ☁️ Deploy GRATUIT pe Render.com (recomandat)

### Pasul 1 — Creează cont pe GitHub (gratuit)
1. Mergi pe https://github.com și creează un cont gratuit

### Pasul 2 — Încarcă codul pe GitHub
1. Pe GitHub, click **"New repository"**
2. Nume: `calendar-concedii`, click **"Create repository"**
3. Urmează instrucțiunile pentru "upload files" și încarcă toate fișierele din acest folder

### Pasul 3 — Deploy pe Render.com
1. Mergi pe https://render.com și creează cont gratuit (cu emailul)
2. Click **"New +"** → **"Web Service"**
3. Conectează contul GitHub și alege repository-ul `calendar-concedii`
4. Setările:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free
5. Click **"Create Web Service"**
6. După 2-3 minute primești un link de forma: `https://calendar-concedii.onrender.com`

**Trimite linkul celor 8 angajați și gata! 🎉**

---

## 📝 Cum se folosește
1. Deschide linkul în browser
2. Click pe numele tău din bara de sus
3. Click pe orice zi lucrătoare pentru a marca/anula concediu
4. Datele se salvează automat pe server
5. Colegii văd modificările în timp real (refresh la 30 secunde)

---

## ⚠️ Note importante
- Datele sunt salvate în fișierul `data/vacations.json` pe server
- Pe Render.com (plan gratuit) datele se resetează la fiecare redeploy — pentru date permanente consideră un plan plătit sau un hosting VPS
- Aplicația se "adoarme" după 15 minute de inactivitate pe planul gratuit Render — primul acces poate dura 30-60 secunde
