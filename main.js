const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

$("#post").on("click", function(){
    tweeter.addPost($("#input").val())
    renderer.renderPosts(tweeter.getPosts())
}) 

$("#posts").on("click", ".delete", function(){
    tweeter.removePost($(this).closest(".post").data().id)
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click", ".comment-send", function(){
    tweeter.addComment($(this).siblings("input").val(), $(this).closest(".post").data().id)
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click", ".delete-comment", function(){
    tweeter.removeComment($(this).closest(".post").data().id, $(this).next("p").data().id)
    renderer.renderPosts(tweeter.getPosts())
})