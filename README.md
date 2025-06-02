# Wedding Planner

A small example app using the MERN stack

## API Architecture

```
.
├── src
│   ├── controllers
│   │   ├── auth.controller.js
│   │   └── task.controller.js
│   ├── middlewares
│   │   └── auth.middleware.js
│   ├── models
│   │   ├── task.model.js
│   │   └── user.model.js
│   ├── routes
│   │   ├── auth.route.js
│   │   └── task.route.js
│   ├── services
│   └── app.js
├── .env
├── package-lock.json
└── package.json
```

## Front-end Architecture

```
.
├── public
├── src
│   ├── assets
│   ├── auth
│   ├── pages
│   │   └── TaskList.jsx
│   ├── services
│   │   ├── fetch.service.js
│   │   ├── storage.service.js
│   │   └── task.service.js
│   ├── ui
│   │   ├── components
│   │   │   └── TaskForm.jsx
│   │   └── layout
│   ├── App.jsx
│   └── main.jsx
├── .env
├── eslint.config.js
├── .package-lock.json
├── .package.json
├── .README.md
└── .vite.config.ts
```

## Exam

J'ai changé les noms de quelques fichiers demandés afin de respecter l'architecture que j'avais déjà mise en place.

Les fichiers concernés sont notés dans ce README, dans le schéma d'architecture.

GitHub: `https://github.com/spobb/wedding-planner`
Fichier insomnia (et donc les routes disponibles): à la racine du dossier.

`npm run dev` dans `/client` pour lancer le front-end
`npm run dev` dans `/server` pour lancer le back-end
