const router = require('koa-router')()
const userModel = require('../lib/mysql')
router.get('/', async (ctx, next) => {
  ctx.redirect('/index')
})

router.get('/index', async (ctx, next) => {
  let html = `
            <h1>form,post请求</h1>
            <form action="/data" method="post">
                <input type="text" name="name" >
                <input type="text" name="ages">
                <button type="submit">提交</button>
            </form>
        `
  ctx.body = html
})

router.post('/api', async (ctx, next) => {
  let resd = ''
  await userModel.findAllUser()
    .then(result => {
      resd = JSON.parse(JSON.stringify(result))
      console.log(resd)
    })
  ctx.body = resd
})
router.post('/data', async (ctx, next) => {
  let apps = ctx.request.body
  console.log(ctx.request.body)
  ctx.body = apps
})
router.post('/user', async (ctx, next) => {
  ctx.body = { 'name': 'jerry', age: 1 }
})
module.exports = router