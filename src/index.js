// Importation de la bibliothèque React
import React from 'react'
// Importation de ReactDOM pour rendre l'application dans le DOM
import ReactDOM from 'react-dom/client'
// Importation du fichier de style principal en SCSS
import './sass/index.scss'
// Importation du composant principal de l'application
import App from './App'

// Création d'une racine React avec createRoot pour utiliser le mode concurrent (Concurrent Mode)
const root = ReactDOM.createRoot(document.getElementById('root'))

// Rendu de l'application dans la racine avec le strict mode activé
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
