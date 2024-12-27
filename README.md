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

L'application sera disponible à l'adresse : [http://localhost:3000](http://localhost:3000

### Accees au page 

Formulaire Candidats : [http://localhost:3000/](http://localhost:3000/candidats/Formulaire)
Informations Candidats : [http://localhost:3000/](http://localhost:3000/candidats/Informations)

liste candidats :[http://localhost:3000/](http://localhost:3000/recruteurs/liste)
details candidat :[http://localhost:3000/](http://localhost:3000/recruteurs/details)


## Fonctionnalités principales

1. **Modules pour les candidats et recruteurs**
   - Pages distinctes pour les formulaires et les listes.
2. **Support multilingue (i18n)**
   - Gestion des langues via `i18nProvider`, `LanguageSwitcher` et le plugin **i18next**.
3. **Architecture modulaire**
   - Composants réutilisables et organisation claire.
  
## Choix Techniques et Limitations

Voici quelques points importants concernant les technologies utilisées et l'état actuel du projet :

*   **Redux :** Redux est installé mais **pas utilisé** pour gérer l'état de l'application. On a préféré une solution plus simple avec l'état local des composants et le context API de React pour ce projet.
*   **Internationalisation (i18next) :** Le changement de langue est implémenté, mais la traduction est **partielle** et le **switch de langue ne fonctionne pas correctement**. Seuls le français et l'anglais sont disponibles pour le moment, et tout le contenu n'est pas encore traduit. C'est la première fois que j'utilise i18next, donc il reste du travail à faire de ce côté.
*   **Technologies utilisées :** Le projet utilise **Next.js 14 (App Router)**, **Ant Design** (pour les composants d'interface), et **Tailwind CSS** (pour le style).
* **Conception et Suivi:** La conception du module a été faite avec des diagrammes UML sur **Draw.io**, et le suivi du projet a été effectué sur un **repository GitHub public** comme demandé dans les consignes initiales.

**En bref :** Le projet fonctionne globalement, mais il y a encore des améliorations à apporter, notamment sur le switch de langue et les traductions manquantes. J'ai fait de mon mieux avec le temps disponible et mon niveau d'expérience actuel.




