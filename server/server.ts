import * as express from 'express'
import * as expressGraphql from 'express-graphql'
import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Query {
    message: String
  }
`)

const rootValue = {
  message: () => 'hello world',
}

class GraphqlServer {
  public app: express.Application

  constructor() {
    this.app = express()
    this.config()
  }

  private config(): void {
    this.app.use(
      '/graphql',
      expressGraphql({
        schema,
        rootValue,
        graphiql: true,
      })
    )
  }

  public start(): void {
    this.app.listen(4000, () =>
      console.log(
        'Express GraphQL Server Now Running On localhost:4000/graphql'
      )
    )
  }
}

export default GraphqlServer
