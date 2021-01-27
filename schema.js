const { buildSchema } = require('graphql')

const schema = buildSchema(`
    input PostInput {
        userId: Int
        title: String
        body: String
    }

    type Geo {
        lat: String
        lng: String
    }
    
    type Address {
        street: String
        suite: String
        city: String
        zipcode: String
        geo: Geo
    }
    
    type Company {
        name: String
        catchPhrase: String
        bs: String
    }
    
    type User {
        id: ID
        name: String
        username: String
        email: String
        address: Address
        phone: String
        website: String
        company: Company
    }
    
    type Post {
        id: ID
        userId: Int
        title: String
        body: String
    }
    
    type Comment {
        id: ID
        postId: Int
        name: String
        email: String
        body: String
    }
    
    type Login {
        login: String
        id: ID
        node_id: String
        avatar_url: String
        gravatar_id: String
        url: String
        html_url: String
        followers_url: String
        following_url: String
        gists_url: String
        starred_url: String
        subscriptions_url: String
        organizations_url: String
        repos_url: String
        events_url: String
        received_events_url: String
        type: String
        site_admin: Boolean
        name: String
        company: String
        blog: String
        location: String
        email: String
        hireable: Boolean
        bio: String
        twitter_username: String
        public_repos: Int
        public_gists: Int
        followers: Int
        following: Int
        created_at: String
        updated_at: String    
    }
    
    type Query {
        user(id: ID!): User
        post(id: ID!): Post
        comment(id: ID!): Comment
        commentsByPostId(postId: ID!): [Comment]
        loginByToken(token: String!): Login
    }
    
    type Mutation {
        updatePost(id: ID!, input: PostInput): Post
        deletePost(id: ID!): Post
    }
`)

exports.schema = schema
