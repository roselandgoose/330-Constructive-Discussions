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
    // Header icons
    var header_profile_icon = document.querySelector('#header-profile-icon'); 

    // Login/out buttons
    var login_button = document.querySelector('#header-login-button');
    var logout_button = document.querySelector('#header-logout-button');

    // Login dialogue
    var login_dialogue_overlay = document.querySelector('#login-dialogue_overlay');
    var login_dialogue_box = document.querySelector('#login-dialogue_box');
    var login_username_field = document.querySelector('#loginuser');
    var login_cancel_button = document.querySelector('#logincancel');

    // Notifications
    var login_notification = document.querySelector('#login-toast');
    
    // Comments
    var feedback_buttons = $(".feedback-buttons");

    // Location Identification
    var atCreateAccount = location.pathname.includes("create_account")
    var atProfile = location.pathname.includes("profile")

    /* Site Loading */
    document.onload = check_login_status();
    
    // On document load, check the login status
    function check_login_status() {
        var userState = sessionStorage.getItem('userState');

        if ((userState == '1') || (userState == '2')) {
            // Set the profile icon display status
            header_profile_icon.style.display = "block";

            if (userState == '1') {
                header_profile_icon.setAttribute("href", "profile.html");
            }
            else {
                header_profile_icon.setAttribute("href", "profile2.html");
            }

            // Set the reply button display statuses
            //feedback_buttons.style.display = "block";
            // this doesn't work I think because it conflicts with the template feedback buttons

            // Replace the login button with a logout button
            login_button.style.display = "none";
            logout_button.style.display = "block"; 
        }
    }

    /* Logging In */

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
    // On clicking the log out button, log out
    logout_button.addEventListener('click', logout);
    function logout(event) {
        // store the user state
        sessionStorage.setItem('userState', '0');

        // If the user is at their profile page, go to the home page
        if (atProfile) {
            location.assign('./index.html');
        }
        // Otherwise
        else {
            // Hide the profile icon
            header_profile_icon.style.display = "none";

            // Hide the feedback buttons

            // Replace the logout button with a login button
            login_button.style.display = "block";
            logout_button.style.display = "none"; 
        }
    }


    /* Profile Creation */
    if (atCreateAccount) {
        var create_profile_submit_button = document.querySelector('#create-profile-submit-button');

        // On clicking the submit button, login and go to the profile page for user 1
        create_profile_submit_button.addEventListener('click', function() {
            sessionStorage.setItem('userState', '1');
            location.assign("./profile.html");
        });
    }
})
