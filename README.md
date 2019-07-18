# minimal-koa-react

### Boilerplate for a [React](https://reactjs.org/) client with a [koa](https://koajs.com/) API

#### Installation

Clone this repo, and install dependencies.

```js
$ npm install
```

### Development mode

To start in dev mode, run `$ npm run dev`. Then visit `http://localhost:3000` and `http://localhost:3000/api`.

In dev mode, we run the default dev server created by [create-react-app](https://github.com/facebook/create-react-app) to support hot reloading, etc. The only thing that’s special is that we proxy requests to `/api/*` routes to the koa api.

### Production mode

To start in prod, first build static react assets with `npm run build`, then run `npm run prod`, which starts a koa server that mounts the api and also serves react’s static assets with koa-static.
