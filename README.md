# How to run the API
`npm run start`

# Example GraphQL Queries

```
query getUser {
  user(id: 1) {
    id
    name
    username
    email
    address {
      street
      suite
      city
      zipcode
      geo {
        lat
        lng
      }
    }
    phone
    website
    company {
      name
      catchPhrase
      bs
    }
  }
}

query getPost {
  post(id: 1) {
    id
    userId
    title
    body
  }
}

query getComment {
  comment(id: 1) {
    id
    postId
    name
    email
    body
  }
}

query getCommentsByPostId {
  commentsByPostId(postId: 1) {
    id
    postId
    name
    email
    body
  }
}

query loginByToken {
  loginByToken(token: "8e6e67129b9bad38ef31c8558a3cbdb801326986") {
    login
    id
    node_id
    avatar_url
    gravatar_id
    url
    html_url
    followers_url
    following_url
    gists_url
    starred_url
    subscriptions_url
    organizations_url
    repos_url
    events_url
    received_events_url
    type
    site_admin
    name
    company
    blog
    location
    email
    hireable
    bio
    twitter_username
    public_repos
    public_gists
    followers
    following
    created_at
    updated_at  
  }
}
```

# Example GraphQL Mutations

```
mutation updatePost {
  updatePost(id: 1, input: {
    userId: 122
    title: "TODO"
    body: "TODO"
  }) {
    id
    userId
    title
    body
  }
}

mutation deletePost {
  deletePost(id: 1) {
    id
  }
}
```
