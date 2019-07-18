const mount = require("koa-mount");
const Koa = require("koa");
const api = require("./api");
const koaStatic = require("koa-static");

const app = new Koa();

app.use(mount("/api", api));

if (process.env.PRODUCTION) {
  app.use(koaStatic("web/build/"));
}

app.listen(process.env.PORT);
