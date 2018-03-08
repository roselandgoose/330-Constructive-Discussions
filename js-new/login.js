/* Hard Coded Values:
 *
 * userState:
 * 0 -> No user logged in
 * 1 -> JaneDoe123
 * 2 -> JohnSmith456
 *
*/

//Jquery
$(document).ready(function() {
    /* Site Loading */
    document.onload = check_login_status();
    
    // On document load, check the login status
    function check_login_status(event) {
        var userState = sessionStorage.getItem('userState');
        var header_profile_icon = document.querySelector('#header-profile-icon'); 
        var feedback_buttons = $(".feedback-buttons");

        if ((userState == '1') || (userState == '2')) {
            // Set the profile icon display status
            header_profile_icon.style.display = "block";

            // Set the reply button display statuses
            //feedback_buttons.style.display = "block";
            // this doesn't work I think because it conflicts with the template feedback buttons
        }
        else {
            return 
        }
    }

    /* Logging In */
    var login_button = document.querySelector('#header-login-button');

    var login_dialogue_overlay = document.querySelector('#login-dialogue_overlay');
    var login_dialogue_box = document.querySelector('#login-dialogue_box');
    var login_username_field = document.querySelector('#loginuser');
    var login_cancel_button = document.querySelector('#logincancel');

    var login_notification = document.querySelector('#login-toast');

    function show_login_dialogue() {
        login_dialogue_overlay.style.display = 'block';
    }

    function close_login_dialogue(event) {
        login_dialogue_overlay.style.display = 'none';
    }

    // On clicking the log in button, show the dialogue box
    login_button.addEventListener('click', show_login_dialogue);

    // Prevent clicks in the dialogue box from passing through
    login_dialogue_box.addEventListener('click', function(event) {event.stopPropagation();}
    );

    // Monitor keypresses in the login box
    login_dialogue_box.addEventListener('keyup', function(event) {
        // On pressing escape, close the box
        if (event.keyCode === 27) {
            close_login_dialogue(event);
        }
        // On pressing enter in the box, login
        else if (event.keyCode === 13) {
            login(event);
        }
    });

    function login(event) {
        // If the submission is recognized, store the current user, and reload the page
        if (loginuser.value == 'JaneDoe123') {
            sessionStorage.setItem('userState', '1');
            close_login_dialogue();
            location.reload();
        }
        else if (loginuser.value == 'JohnSmith456') {
            sessionStorage.setItem('userState', '2');
            close_login_dialogue();
            location.reload();
        }
        // Otherwise, notify the user
        else {
            var login_failure_message = {message: "Invalid username or password!"};
            login_notification.MaterialSnackbar.showSnackbar(login_failure_message);
        }
    }

    // On pressing cancel, close the box
    login_cancel_button.addEventListener('click', close_login_dialogue);

    // On clicking on the overlay, outside the box, close the box
    login_dialogue_overlay.addEventListener('click', close_login_dialogue);


    /* Logging Out */
    // On clicking the log out button, store the user state, undisplay the profile icon, set the log in/out status, and hide the reply buttons

    // -- If the user is at their profile page, go to the home page

    /* Profile Creation */
    // On clicking the submit button, go to the profile page and log in
    
})
