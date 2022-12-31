# React Discord Login

This is a simple model of a Discord Login using React, Express, Passport and TypeScript.

## Structure:

```bash
.
├── client # <------ Front-End
│   ├── index.html
│   ├── package.json
│   ├── public # <--- Static Files
│   │   └── vite.svg
│   ├── src # <--- Source
│   │   ├── App.tsx
│   │   ├── components
│   │   │   └── LoginButton.tsx
│   │   ├── hooks # <--- Custom Hooks
│   │   │   └── useVerify.ts
│   │   ├── main.tsx
│   │   ├── pages # <--- Pages
│   │   │   ├── Dash.tsx # <-- Dashboard Page
│   │   │   └── Home.tsx # <-- Home Page
│   │   ├── services
│   │   │   └── axios.ts
│   │   ├── types
│   │   │   └── discord.d.ts # <--- Interfaces
│   │   └── vite-env.d.ts
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── LICENSE.md
├── README.md
└── server # <------ Back-End
    ├── package.json
    ├── src
    │   ├── config # <--- Configurations
    │   │   └── config.ts
    │   ├── controllers # <--- Controllers
    │   │   ├── auth.ctrls.ts
    │   │   ├── main.ts
    │   │   └── user.ctrls.ts
    │   ├── index.ts
    │   ├── middlewares # <--- Middlewares
    │   │   └── isAuth.ts
    │   ├── passport # <--- Passport Strategies
    │   │   └── discord.ts
    │   ├── routes # <--- Routes
    │   │   ├── auth.routes.ts
    │   │   └── user.routes.ts
    │   ├── services # <--- Services
    │   │   └── axios.ts
    │   ├── types
    │   │   └── user.d.ts # <--- Interfaces
    │   └── utils # <--- Utils
    │       └── Ctrl.ts
    └── tsconfig.json
```

## Instalation

### Clone the repository:

```bash
$ git clone https://github.com/Yumiko0828/react-discord-login.git
```

### Install dependencies

```bash
# Front-End
$ cd client
$ npm install

# Back-End
$ cd server
$ npm install
```

### Start servers

- For development

```bash
# Front-End & Back-End
$ npm run dev
```

- For production

```bash
# Front-End
$ npm run build
$ npm run preview

# Back-End
$ npm run build
$ npm start
```

## License:

This project uses the MIT license
