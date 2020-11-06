const Renderer = function() {
    const renderPosts = function(posts) {
        $("#posts").empty()
        let counter = 1
        for (let post of posts){
            $("#posts").append(`<div class=post id=post${counter} data-id=${post.id}></div>`)
            $(`#post${counter}`).append(`<button class=delete type=button>Delete Post</button>`)
            $(`#post${counter}`).append(`<p class=post-text>${post.text}</p>`)
            // $(`#post${counter}`).append(`<button class=delete type=button>Delete Post</button>`)
            $(`#post${counter}`).append(`<div class=comments id=comment${counter}></div>`)
            for (let comment of post.comments){
                $(`#comment${counter}`).append(`<i class="fas fa-trash-alt delete-comment"></i><p class=comment-text data-id=${comment.id}>${comment.text}</p>`)
            }
            $(`#post${counter}`).append(`<div class=post-comment><input type=text class=comment-input placeholder="Type a comment..." /><button class=comment-send type=button>Comment</button></div>`)
            counter++
        }
    }

    return {
        renderPosts,
    }
}