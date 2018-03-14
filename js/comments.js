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
            if (event.target.parentNode.id == 'add_comment_button') {
                // Comment is not a reply
            }
            else {
                // Comment is a reply
            }
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
    // I can update the open_new_comment_dialogue event handler to set an attribute on the dialogue box containing either the id of the comment being replied to or the id of the comments container before opening the dialogue box.

    // On submission, duplicate the model comment into the correct context, insert the correct content, and scroll down to it
    new_comment_submit_button.addEventListener('click', create_comment);

    function create_comment(event) {
        var new_comment_text = new_comment_text_area.value;

        if (new_comment_text) {
            // Copies the template comment and displays it
            $("#comment-template").clone().attr('id', 'new-comment' + num_new_comments).appendTo(comments);
            // This should read the attribute from the dialogue box to determine where to place the comment.

            // Updates the text of the duplicated template to the submitted text
            $('#new-comment' + num_new_comments).children("div.comment-content").text(new_comment_text);

            // Increment the counter
            num_new_comments++;

            // Close the dialogue box
            
            // Scroll down to the new comment
        }
        else {
            var comment_failure_message = {message: "Comments cannot be empty."};
            comment_notification.MaterialSnackbar.showSnackbar(comment_failure_message);
        }

    }

    /* Feedback */
    // On clicking a feedback button (envokes general handler):
    //  get the id of the comment
    //  get the type of the activated button (an attribute set in html)
    //  read the current score
    //  update score with logic
})
