# 🕌 Boutique Mouride – React + Vite

Bienvenue dans notre boutique en ligne inspirée de la tradition mouride. Ce projet propose une interface moderne et réactive développée avec **React** et **Vite**, et intègre des animations, un style sombre élégant, et une architecture modulaire facile à maintenir.

---

## ⚙️ Technologies utilisées

- ✅ [React](https://reactjs.org/) – Bibliothèque UI JavaScript
- ⚡ [Vite](https://vitejs.dev/) – Bundler rapide et léger
- 🎨 CSS personnalisé + [Bootstrap 5](https://getbootstrap.com/)
- 🌀 [AOS](https://michalsnik.github.io/aos/) – Animation au scroll
- 🔗 [Axios](https://axios-http.com/) – Requêtes HTTP vers une API Django REST
- 📦 [ESLint](https://eslint.org/) – Vérification de qualité du code

---

## 🛠️ Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/ton-utilisateur/boutique-mouride.git
cd boutique-mouride
2. Installer les dépendances

npm install
3. Démarrer le serveur de développement

npm run dev
L’application sera accessible à l’adresse : http://localhost:5173

✨ Fonctionnalités
🔍 Recherche de produits en temps réel

📦 Grille de produits dynamique (chapelets, xassidas, décorations…)

🖼️ Aperçu détaillé dans une modal

🎨 Thème sombre responsive

⚡ Animation AOS lors du scroll

🔁 Intégration future avec panier, authentification et paiement

📁 Structure du projet
rust
Copier
Modifier
src/
├── assets/            → Images statiques
├── components/        → Composants UI (ProductList, DetailModal, etc.)
├── pages/             → Pages principales (Shop.jsx, About.jsx…)
├── styles/            → Fichiers CSS (Shop.css, ProductList.css…)
├── App.jsx            → Composant racine de l'application
└── main.jsx           → Point d'entrée React + Vite
🌀 Utilisation de AOS (Animate On Scroll)
Installation

npm install aos
Initialisation (dans App.jsx ou main.jsx)
import AOS from "aos";
import "aos/dist/aos.css";

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);
Puis ajoute data-aos="fade-up" (ou autre) sur les éléments à animer.

📦 Build production
npm run build
Les fichiers optimisés seront générés dans le dossier /dist.

🚀 Intégration Backend
Ce projet est conçu pour fonctionner avec un backend Django + Django REST Framework. Tu peux appeler les produits via :

GET http://localhost:8000/api/products/
GET http://localhost:8000/api/decorations/
Authentification, panier et commandes peuvent être ajoutés avec Djoser + JWT.

👤 Auteur
Khadim Fall
📧 Contact : Khadim Fall
🔗 Profil GitHub: https://github.com/KhadimFall0503

📜 Licence
Ce projet est open-source sous licence MIT.

yaml
Copier
Modifier

---


```
