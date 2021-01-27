const express = require('express')
const { schema } = require('./schema')
const { graphqlHTTP } = require('express-graphql')
const {
    loginByToken,
    getCommentsByPostId,
    getCommentById,
    deletePost,
    updatePost,
    getPostById,
    getUserById,
} = require('./service')

const port = 3000

const rootValue = {
    user: ({ id }) => getUserById(id),
    post: ({ id }) => getPostById(id),
    updatePost: ({ id, input }) => updatePost(id, input),
    deletePost: ({ id }) => deletePost(id),
    comment: ({ id }) => getCommentById(id),
    commentsByPostId: ({ postId }) => getCommentsByPostId(postId),
    loginByToken: ({ token }) => loginByToken(token),
}

const app = express()

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        rootValue,
        graphiql: true,
    })
)

app.listen(port, () => {
    console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`)
})
