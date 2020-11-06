const Tweeter = function () {
    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    
    let postIdCounter = 2
    
    let commentIdCounter = 6
    
    const getPosts = function () {
        return _posts
    }
    
    const addPost = function (text) {
        _posts.push({
            text,
            id: `p${postIdCounter + 1}`,
            comments: []
        })
        postIdCounter++
    }

    const removePost = function (postID) {
        for (post of _posts){
            if (post.id === postID){
                _posts.splice(_posts.indexOf(post), 1)
            }
        }
    }

    const addComment = function (text, postID) {
        for (post of _posts){
            if (post.id === postID){
                post.comments.push({
                    id: `c${commentIdCounter + 1}`,
                    text: text
                })
            }
        }
        commentIdCounter++
    }

    const removeComment = function (postID, commentID) {
        for (post of _posts){
            if (post.id === postID){
                for (comment of post.comments){
                    if (comment.id === commentID){
                        post.comments.splice(post.comments.indexOf(comment), 1)
                    }
                }
            }
        }
    }

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}

