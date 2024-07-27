# memGPT-vue

# modifier CORS du server memgpt dans settings.py

ligne 20 cors_origins: Optional[list] = ["http://memgpt.localhost", "http://localhost:8283", "http://localhost:8083", "http://localhost:5173", "http://127.0.0.1:5173"]

This template should help get you started developing with Vue 3 in Vite.

# todo

- [ ] Add all cli commands,
- [ ] web terminal comme scenaristeur/agent to run commands
- [ ] generer les types dans memGPT `npx openapicmd typegen ./openapi_memgpt.json > openapi_memgpt.d.ts ` ( https://www.npmjs.com/package/openapi-client-axios)
- [ ] Cors error when deleting human & persona
- [ ]       console.log("voir count vec le cursor ?",params); pour récupérer les messages

# OpenAPIClientAxios

OpenAPIClientAxios operation methods take 3 arguments:
client.operationId(parameters?, data?, config?)

# docs

- https://memgpt.readme.io/docs/index
- https://memgpt.readme.io/reference/api
- http://localhost:8283/docs

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
