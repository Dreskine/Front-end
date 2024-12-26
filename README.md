# Frontend-Arimayi

Ce projet est une application frontend construite avec **Next.js**. Elle inclut des modules distincts pour les candidats et les recruteurs, ainsi qu’un support pour l’internationalisation (i18n).

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- **Node.js** (version 14 ou supérieure) : [Installer Node.js](https://nodejs.org/)
- **npm** ou **yarn** : Géré par l'installation de Node.js.

## Installation

1. Clonez ce répertoire sur votre machine locale :

```bash
git clone <URL-du-repo>
cd frontend-arimayi
```

2. Installez les dépendances du projet :

```bash
# Avec npm
npm install

# ou avec yarn
yarn install
```

## Structure du projet

La structure principale du projet est la suivante :

```
frontend-arimayi/
├── src/
│   ├── app/
│   │   ├── candidats/
│   │   │   ├── Formulaire/
│   │   │   │   └── page.js
│   │   │   ├── Informations/
│   │   │   │   └── page.js
│   │   ├── recruteurs/
│   │       ├── liste/
│   │       │   └── page.js
│   │       └── details/
│   │           └── page.js
│   ├── components/
│   │   ├── Header/
│   │   │   ├── CandidatHeader.js
│   │   │   └── RecruteurHeader.js
│   │   ├── Sider/
│   │   │   ├── CandidatSider.js
│   │   │   └── RecruteurSider.js
│   │   └── LanguageSwitcher.js
│   ├── i18n/
│   │   ├── config.js
│   │   └── i18n.js
│   ├── languages/
│   │   ├── en/
│   │   │   └── common.json
│   │   └── fr/
│   │       └── common.json
├── public/
├── pages/
├── package.json
├── tailwind.config.js
└── README.md
```

### Principaux dossiers

- **`app/`** : Contient les pages principales de l’application (pour les candidats et les recruteurs).
- **`components/`** : Composants réutilisables tels que les en-têtes (`Header`) et les barres latérales (`Sider`).
- **`i18n/`** : Configuration pour l'internationalisation.
- **`languages/`** : Fichiers JSON pour les traductions en anglais (`en`) et en français (`fr`).

## Exécution du projet

### Développement

Pour lancer l’application en mode développement :

```bash
npm run dev
# ou
yarn dev
```

L'application sera disponible à l'adresse : [http://localhost:3000](http://localhost:3000)

### Build de production

Pour créer une version optimisée pour la production :

```bash
npm run build
# ou
yarn build
```

Ensuite, pour lancer l'application en production :

```bash
npm run start
# ou
yarn start
```



## Fonctionnalités principales

1. **Modules pour les candidats et recruteurs**
   - Pages distinctes pour les formulaires et les listes.
2. **Support multilingue (i18n)**
   - Gestion des langues via `i18nProvider`, `LanguageSwitcher` et le plugin **i18next**.
3. **Architecture modulaire**
   - Composants réutilisables et organisation claire.
  
## Choix Techniques

*   **Pas de Redux:** Pour ce projet, j'ai décidé de ne pas utiliser Redux pour la gestion de l'état global. Ayant fait le projet seul et le temps impartie pour la réalisation du projet etait court, j'ai préféré me concentrer sur les fonctionnalités de base avec l'état local des composants et le context API de React. L'ajout de Redux pourrait être envisagé dans une version future pour une gestion d'état plus complexe.
*   **Internationalisation Partielle:** La fonctionnalité de changement de langue est implémentée mais partiellement terminée. Le projet supporte actuellement le français et l'anglais, mais l'intégration de nouvelles langues et la traduction de tous les contenus n'ont pas été complètement réalisées. Cela est dû à un manque de temps et à ma première expérience avec les bibliothèques d'internationalisation comme `i18n`. Des améliorations seront apportées à ce sujet ultérieurement.





