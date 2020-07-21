const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const app = new Koa()

app.use(static(path.join(__dirname, './static')))
app.use(bodyParser())
app.use(require('./router/index').routes())

app.listen(3000)