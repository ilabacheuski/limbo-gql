import {makeExecutableSchema} from 'graphql-tools'

const RootQuery = `
  type RootQuery {
    name: String
  }
`

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`

const resolverMap = {
  RootQuery: {
    name () {
      return 'Hello world'
    }
  }
}

export default makeExecutableSchema({
  typeDefs: [
    SchemaDefinition, RootQuery,
    // ...Post
  ],
  resolvers: resolverMap,
})
