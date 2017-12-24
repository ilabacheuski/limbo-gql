import koa from 'koa'
import koaRouter from 'koa-router'
import koaBody from 'koa-bodyparser'
import { graphqlKoa } from 'apollo-server-koa'
import graphqlPlayground from 'graphql-playground-middleware-koa'
import schema from './graphql/schema.js'

const app = new koa()
const router = new koaRouter()
const PORT = 3000

// koaBody is needed just for POST.
router.post('/graphql', koaBody(), graphqlKoa({ schema }))
router.get('/graphql', graphqlKoa({ schema }))

router.get(
  '/playground',
  graphqlPlayground({ endpointURL: '/graphql' }))

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(PORT)
// eslint-disable-next-line
console.info(`Started server at port: ${PORT}`)
