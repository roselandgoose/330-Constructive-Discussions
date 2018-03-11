$(document).ready(function() {

    // User Logged-in
    var userState = sessionStorage.getItem('userState');

    // Notifications
    var comment_notification = document.querySelector('#comments-toast');
    
    // Commenting
    var comments = document.querySelector('.comments');
    var add_comment_button = document.getElementById("add_comment_button");
    var new_comment_dialogue = document.getElementById("new_comment-dialogue");
    var new_comment_text_area = document.getElementById("new_comment-text_area");
    var new_comment_submit_button = document.getElementById("new_comment-submit_button");
    var close_comment_button = document.getElementById("new_comment-close_button");
    var num_new_comments = 0;

    /* Comment Creation */
    // On clicking the add comment button, open the dialogue box with the correct context
    add_comment_button.addEventListener('click', open_new_comment_dialogue);
    
    function open_new_comment_dialogue(event) {
        if ((userState == '1') || (userState == '2')) {
            new_comment_dialogue.style.display = "block";
        }
        else {
            var comment_failure_message = {message: "You must be logged-in to post a comment"};
            comment_notification.MaterialSnackbar.showSnackbar(comment_failure_message);
        }
    }

    // On clicking the x, close the dialogue box
    close_comment_button.addEventListener('click', close_new_comment_dialogue);
    function close_new_comment_dialogue(event) {
        new_comment_dialogue.style.display = "none";
        new_comment_text_area.value = ''; // This has the side effect of removing the label -- BUG
    }

    // On clicking the reply button, open the dialogue box with the correct context

    // On pressing enter in the box, click the submit button

    // On submission, duplicate the model comment into the correct context, insert the correct content, and scroll down to it
    new_comment_submit_button.addEventListener('click', create_comment);

    function create_comment(event) {
        clone_comment(event);
        //console.log($('#new-comment0'));
    }

    function clone_comment(event) {
        var new_comment = $("#comment-template").clone();
        new_comment.attr('id', 'new-comment' + num_new_comments);

        // Increment the counter
        num_new_comments++;
        
        new_comment.appendTo(comments); // This apperantly changes the display setting automatically
    }

    /* Feedback */
    // On clicking a button, update score
})
