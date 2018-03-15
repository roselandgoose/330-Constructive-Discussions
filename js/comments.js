$(document).ready(function() {

    // User Logged-in
    var userState = sessionStorage.getItem('userState');

    // Notifications
    var comment_notification = document.querySelector('#comments-toast');
    
    // Commenting
    var comments = document.querySelector('#comments');
    var comments_array = $(".comment");
    var add_comment_button = document.getElementById("add_comment_button");
    var new_comment_dialogue = document.getElementById("new_comment-dialogue");
    var new_comment_text_area = document.getElementById("new_comment-text_area");
    var new_comment_submit_button = document.getElementById("new_comment-submit_button");
    var close_comment_button = document.getElementById("new_comment-close_button");
    var num_new_comments = 0;
    var reply_buttons = $('.reply_button');
    var feedback_buttons = $('.feedback_button');

    /* Comment Creation */
    // On clicking the add comment button, open the dialogue box with the correct context
    add_comment_button.addEventListener('click', open_new_comment_dialogue);
    
    function open_new_comment_dialogue(event) {
        var userState = sessionStorage.getItem('userState');
        if ((userState == '1') || (userState == '2')) {
            if (event.target.parentNode.id == 'add_comment_button') {
                // Comment is not a reply -> append to #comments
                new_comment_dialogue.setAttribute('target_id', 'false');
            }
            else {
                // Comment is a reply -> append to reply container of specified comment
                new_comment_dialogue.setAttribute('target_id', event.target.parentNode.id);
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

        $("#new_comment-text_box").removeClass('is-dirty');
    }

    // On clicking the reply button, open the dialogue box with the correct context
    reply_buttons.on('click', open_new_comment_dialogue);
    // I can update the open_new_comment_dialogue event handler to set an attribute on the dialogue box containing either the id of the comment being replied to or the id of the comments container before opening the dialogue box.

    // On submission, duplicate the model comment into the correct context, insert the correct content, and scroll down to it
    new_comment_submit_button.addEventListener('click', create_comment);

    function create_comment(event) {
        var new_comment_text = new_comment_text_area.value;
        var target_id = new_comment_dialogue.getAttribute('target_id')

        if (new_comment_text) {
            // Copies the template comment and displays it
            var new_comment_wrapper = $("#comment-template-wrapper").clone().attr('id', 'new-comment-wrapper' + num_new_comments);
            new_comment_wrapper.children(".comment").attr('id', 'new-comment' + num_new_comments)
            // This should read the attribute from the dialogue box to determine where to place the comment.
            if (target_id == 'false') {
                new_comment_wrapper.appendTo(comments);
            }
            else {
                var replies_container = $('#' + target_id).parents(".comment_wrapper").children(".replies_container")[0];
                new_comment_wrapper.appendTo(replies_container);
                replies_container.style.display = "block";
            }

            // Updates the text of the duplicated template to the submitted text
            $('#new-comment' + num_new_comments).children("div.comment-content").text(new_comment_text);

            var commenter_name = $('#new-comment' + num_new_comments).children("div.commenter").children("div.commenter-name");

            if (userState == '1') {
                // 1 -> JaneDoe123
                commenter_name.text("Jane Doe"); 
            }
            else if (userState == '2') {
                // 2 -> JohnSmith456
                commenter_name.text("John Smith"); 
            }

            // Increment the counter
            num_new_comments++;

            // Close the dialogue box
            close_new_comment_dialogue();
            
            // Scroll down to the new comment
            
            // Update event handlers
            var reply_buttons = $('.reply_button');
            reply_buttons.on('click', open_new_comment_dialogue);
            
            var feedback_buttons = $('.feedback_button');
            feedback_buttons.on('click', feedback);
            
            var comments_array = $(".comment");
            comments_array.hover(show_current_feedback_buttons, hide_previous_feedback_buttons);
            hide_all_feedback_buttons();
        }
        else {
            var comment_failure_message = {message: "Comments cannot be empty."};
            comment_notification.MaterialSnackbar.showSnackbar(comment_failure_message);
        }

    }

    /* Feedback */
    // On clicking a feedback button (envokes general handler):
    feedback_buttons.on('click', feedback);

    function feedback(event) {
        var userState = sessionStorage.getItem('userState');
        if ((userState == '1') || (userState == '2')) {
            // Handy filtering functions
            function remove_empty(el) {
                return (el.length != 0) && (el != '\n');
            }

            function get_score(div) {
                var array = div.text().split(' ').filter(remove_empty).pop().split('/');
                return [parseInt(array[0]), parseInt(array[1])]
            }
            
            // get the target comment
            var target_comment = $(this).parent();

            var argument_feedback_given = target_comment.attr("argument_feedback_given");
            var agreement_feedback_given = target_comment.attr("agreement_feedback_given");

            // get the current feedback scores
            var agreement_div = target_comment.children(".feedback_score").children(".agreement_score");
            var argument_div = target_comment.children(".feedback_score").children(".argument_score");
            
            var agreement_score = get_score(agreement_div); 
            var argument_score = get_score(argument_div);
            
            // cases on the type of the activated button
            if ($(this).hasClass("agree_button")) {
                if (agreement_feedback_given == "false") {
                    var new_score_text = "Agree: " + (agreement_score[0] + 1) + "/" + (agreement_score[1] + 1);
                    agreement_div.text(new_score_text);
                    target_comment.attr("agreement_feedback_given", "true");
                }
                else {
                    var comment_failure_message = {message: "You can only declare agreement once."};
                    comment_notification.MaterialSnackbar.showSnackbar(comment_failure_message);
                }
            }
            else if ($(this).hasClass("disagree_button")) {
                if (agreement_feedback_given == "false") {
                    var new_score_text = "Agree: " + (agreement_score[0] - 1) + "/" + (agreement_score[1] + 1);
                    agreement_div.text(new_score_text);
                    target_comment.attr("agreement_feedback_given", "true");
                }
                else {
                    var comment_failure_message = {message: "You can only declare agreement once."};
                    comment_notification.MaterialSnackbar.showSnackbar(comment_failure_message);
                }
            }
            else if ($(this).hasClass("argued_button")) {
                if (argument_feedback_given == "false") {
                    var new_score_text = "Well Argued: " + (argument_score[0] + 1) + "/" + (argument_score[1] + 1);
                    argument_div.text(new_score_text);
                    target_comment.attr("argument_feedback_given", "true");
                }
                else {
                    var comment_failure_message = {message: "You can only assess argument once."};
                    comment_notification.MaterialSnackbar.showSnackbar(comment_failure_message);
                }
            }
            else if ($(this).hasClass("flawed_button")) {
                if (argument_feedback_given == "false") {
                    var new_score_text = "Well Argued: " + (argument_score[0] - 1) + "/" + (argument_score[1] + 1);
                    argument_div.text(new_score_text);
                    target_comment.attr("argument_feedback_given", "true");
                }
                else {
                    var comment_failure_message = {message: "You can only assess argument once."};
                    comment_notification.MaterialSnackbar.showSnackbar(comment_failure_message);
                }
            }
        }
        else {
            var comment_failure_message = {message: "You must be logged-in to give feedback"};
            comment_notification.MaterialSnackbar.showSnackbar(comment_failure_message);
        }
    }

    /* Dynamic Button Display */
    // Show the feedback buttons when you're hovering over a comment, but not otherwise
    
    comments_array.hover(show_current_feedback_buttons, hide_previous_feedback_buttons);
    
    function show_current_feedback_buttons(event) {
        $(this).children(".feedback_button").css('display', "inline-block");
        $(this).children(".agree_label").css('display', "inline-block");
        $(this).children(".argued_label").css('display', "inline-block");
    }

    function hide_previous_feedback_buttons(event) {
        $(this).children(".feedback_button").css('display', "none");
        $(this).children(".agree_label").css('display', "none");
        $(this).children(".argued_label").css('display', "none");
    }

    // Hide feedback buttons on page load
    document.onload = hide_all_feedback_buttons();

    function hide_all_feedback_buttons() {
        $(".feedback_button").css('display', "none");
    }

})
