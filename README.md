# Kasa - OpenClassrooms 

Kasa, est le projet 8 de la formation intégrateur web - OpenClassrooms, 
c'est le frontend d'un site de location entre particuliers, code en React.
 

## Table des matières

- [Aperçu](#aperçu)
- [Technologies Utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Structure du Projet](#structure-du-projet)

## Aperçu

- Lien maquette Figma: `https://www.figma.com/file/qEno0LwL4ZLkWyeY59kxp1/UI-Design-Kasa-FR?node-id=0%3A1&mode=dev`
- lien vers GitHub Pages : `https://merzakb.github.io/P8_Kasa_benaissi_merzak/` (le site est rediriger vers la page 404,
                             cliquer sur Acceuil pour revenir à la page d'accueil)
![page d'accueil - kasa](kasa-home_page.png)

## Technologies Utilisées

- React
- Sass
- JavaScript

## Installation
> suivre ces étapes pour installer le projet sur votre PC en local : 

1. Clônez le dépôt : `git clone https://github.com/Merzakb/P8_Kasa_benaissi_merzak`
2. Accédez au répertoire : `cd P8_Kasa_benaissi_merzak`
3. Installez les dépendances : `npm install` ou `yarn`
4. Démarrez l'application : `npm start` ou `yarn start`

## Structure du Projet

Kasa/
|-- public/
||--index.html
|-- src/
| |-- components/
| | |-- Banner/Banner.jsx
| | |-- Card/Card.jsx
| | |-- Collapse/Collapse.jsx
| | |-- Footer/Footer.jsx
| | |-- Header/Header.jsx
| | |-- Rating/rating.jsx
| | |-- Slide/Slide.jsx
| |-- pages/
| | |-- About/About.jsx
| | |-- Home/Home.jsx
| | |-- NotFound/NotFound.jsx
| | |-- Room/Room.jsx
| |-- data/
| | |-- roomList.js
| |-- assets/
| |-- logo-header.svg
| |-- logo-footer.svg
| |-- Sass/
| | |-- base/
| | |-- components/
| | |-- Layout/
| | |-- pages/
| | |-- utilities/
| | |-- index.scss
| |-- App.jsx
| |-- index.js
|-- .gitignore
|-- package.json
|-- README.md

