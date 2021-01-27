const axios = require('axios')

const API_DOMAIN = 'https://jsonplaceholder.typicode.com'

const getUserById = id => axios.get(`${API_DOMAIN}/users/${id}`).then(({ data }) => data)

const getPostById = id => axios.get(`${API_DOMAIN}/posts/${id}`).then(({ data }) => data)

const updatePost = (id, post) => axios.patch(`${API_DOMAIN}/posts/${id}`, post).then(({ data }) => data)

const deletePost = id => axios.delete(`${API_DOMAIN}/posts/${id}`).then(({ data }) => data)

const getCommentById = id => axios.get(`${API_DOMAIN}/comments/${id}`).then(({ data }) => data)

const getCommentsByPostId = postId => axios.get(`${API_DOMAIN}/posts/${postId}/comments`).then(({ data }) => data)

const loginByToken = token => axios.get('https://api.github.com/user', {
    headers: {
        'Authorization': `token ${token}`,
    },
}).then(({ data }) => data)

exports.getUserById = getUserById
exports.getPostById = getPostById
exports.updatePost = updatePost
exports.deletePost = deletePost
exports.getCommentById = getCommentById
exports.getCommentsByPostId = getCommentsByPostId
exports.loginByToken = loginByToken
