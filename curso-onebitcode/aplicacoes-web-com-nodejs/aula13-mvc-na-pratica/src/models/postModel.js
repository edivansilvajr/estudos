let posts = [
    { id: "1", title: "Teste 1", content: "Loren ipsum...", createdAt: new Date(), updatedAt: new Date() },
    { id: "2", title: "Teste 2", content: "Loren ipsum...", createdAt: new Date(), updatedAt: new Date() }
]

const postModel = {
    getAllPosts() {
        return posts
    },

    getPostById(id) {
        return posts.find(post => post.id === id)
    },

    createPost(title, content) {
        const post = {
            id: Date.now().toString(),
            title: title,
            content: content,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        return post
    },

    savePost(post) {
        posts.unshift(post)
    },

    updatePost(id, updatedPost) {
        const index = posts.findIndex(post => post.id === id)
        posts[index] = { ...posts[index], ...updatedPost, updatedAt: new Date() }
    },

    deletePost(id) {
        posts = posts.filter(post => post.id !== id)
    }
}

module.exports = postModel