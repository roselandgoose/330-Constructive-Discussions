//Jquery
$(document).ready(function() {
    // Select toast (notification) box in snackbar (bottom of screen)
    var snackbarContainer = document.querySelector('#toast-1');

    // when #submit button is clicked, give notification
    var showToastButton = document.querySelector('#submit');
    showToastButton.addEventListener('click',
        function() {
            'use strict';
            var data = {message: 'Comment Posted'};
            snackbarContainer.MaterialSnackbar.showSnackbar(data);
        }
    );


    var input1 = document.getElementById("loginuser");

    // Execute a function when the user releases a key on the keyboard
    input1.addEventListener("keyup",
        function(event) {
            // Cancel the default action, if needed
            event.preventDefault();
            
            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Trigger the button element with a click
                document.getElementById("login_form_submit_button").click();
            }
        }
    );


    var input2 = document.getElementById("sample3");

    // Execute a function when the user releases a key on the keyboard
    input2.addEventListener("keyup",
        function(event) {
            // Cancel the default action, if needed
            event.preventDefault();
            
            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Trigger the button element with a click
                document.getElementById("login_form_submit_button").click();
            }
        }
    );


    //Variables
    var cancel = $("#cancel"),
    comment = document.getElementById('new-comment0'),
    commentboxwrapper = $('.commentboxwrapper'),
    commentopen = 0
    downvote = $('.downvote0'),
    downvote1 = $('.downvote1'),
    fab = $(".fab"),
    overlay = $("#overlay"),
    reply = $('#reply'),
    score = 0
    score1 = 0;
    seemore = $('.seemore'),
    submit = $("#submit"),
    textfield = document.getElementById('sample5'),
    tocomments = $(".comment-button"),
    upvote = $('.upvote0'),
    upvote1 = $('.upvote1'),
    upvotescore = $('#upvotescore'),
    upvotescore1 = $('#upvotescore1'),


    seemore.on('click', openComment)

    function openComment(event) {
        if (commentopen == 0) {
            upvote.addClass('active');
            downvote.addClass('active');
            reply.addClass('active');
            commentopen = 1
            seemore.html('See Less');
        }
        else {
            upvote.removeClass('active');
            downvote.removeClass('active');
            reply.removeClass('active');
            commentopen = 0;
            seemore.html('See More');
        }
    }


    upvote.on('click', upscore)

    function upscore(event) {
        if (score < 1) {
            score = 1;
            upvotescore.html("Upvote Score: " + score);
        }
        else if (score == 1){
            score = 0
            upvotescore.html('Upvote Score: ' + score);
        }
        else {
            score = 0;
            upvotescore.html('Upvote Score: ' + score);
        }
    }


    downvote.on('click', downscore)

    function downscore(event) {
        if (score > -1) {
            score  = -1;
            upvotescore.html("Upvote Score: " + score);
        }
        else {
            score = 0;
            upvotescore.html('Upvote Score: ' + score);
        }
    }


    upvote1.on('click', upscore1)

    function upscore1(event) {
        if (score1 < 1) {
            score1 = 1;
            upvotescore1.html("Upvote Score: " + score1);
        }
        else if (score1 == 1){
            score1 = 0
            upvotescore1.html('Upvote Score: ' + score1);
        }
        else {
            score1 = 0;
            upvotescore1.html('Upvote Score: ' + score1);
        }
    }

    downvote1.on('click', downscore1)

    function downscore1(event) {
        if (score1 > -1) {
            score1  = -1;
            upvotescore1.html("Upvote Score: " + score1);
        }
        else {
            score1 = 0;
            upvotescore1.html('Upvote Score: ' + score1);
        }
    }


    // Post button
    submit.on('click', create_comment);

    //counter for naming new comments uniquely
    var num_comments = 1 

    function create_comment() {
        if (event) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }

        var proto = $('#new-comment0').clone();
        proto.attr('id', 'new-comment' + num_comments);

        $('#new-comment' + (num_comments-1)).after(proto);

        var commentbox = document.getElementById('new-comment' + num_comments);
        var divlist = commentbox.getElementsByTagName('div');
        var commentername = divlist[1];
        var commentcontent = divlist[2];
        var modal1 = document.getElementById('mdl-custom-modal1');
        var state = sessionStorage.getItem('state');
        var commentboxer = $('#commentbox');

        if (state == 1) {
            commentername.innerHTML = 'JaneDoe123';
        }
        else if (state == 2) {
            commentername.innerHTML = 'JohnSmith456';
        }
        else {
            commentername.innerHTML = 'Anon';
        }

        commentcontent.innerHTML = sample5.value;

        'use strict';	
        modal1.style.display = "none";
        sample5.value = '';
        commentboxer.removeClass('is-dirty');

        $('#new-comment' + num_comments)[0].scrollIntoView()

        num_comments++;
    }


    reply.on('click', replyg);

    function replyg() {
    }

    var j = 2;

    function replyf() {
        var top_comment_1 = $('#top_comment-1');
        var proto = $('#newcomment0').clone();
        proto.attr('id', 'top' + j);
        $('#top'+ (j-1)).after(proto);
    }


    var loginn = document.getElementById('loginart');

    document.onload = checklog();

    function checklog(e) {
        var state = sessionStorage.getItem('state');
        var pic = $('#black');
        var pic1 = document.getElementById('black1');

        if (state == '1') {
            loginn.innerHTML = 'Log out';
            loginn.id = 'logoutart';
            black.style.display = 'block';

            var logout = document.getElementById('logoutart');

            logout.onclick = function() {
                sessionStorage.setItem('state', '0');
                location.reload();
            }
        }
        else if (state == '2') {
            loginn.innerHTML = 'Log out';
            loginn.id = 'logoutart'
            pic1.style.display = 'block';


            var logout = document.getElementById('logoutart');

            logout.onclick = function() {
                sessionStorage.setItem('state', '0');
                location.reload();
            }
        }
        else {
            var login = document.getElementsByClassName('login')[0];
            var modal = $('.modal2')[0];
            var cancel = document.getElementById('logincancel');

            login.onclick = function() {
                'use strict';
                modal.style.display = "block";
            }

            cancel.onclick = function() {
                modal.style.display = 'none';
            }
        }
    }


    (function() {
        'use strict';
        var snackbarContainer = document.querySelector('#toast-2');
        var showToastButton = document.querySelector('#login_form_submit_button');
        showToastButton.addEventListener('click',
            function() {
                'use strict';
                var data = {message: 'Invalid username or password!'};
                snackbarContainer.MaterialSnackbar.showSnackbar(data);
            }
        );
    }()); 


    var login_form_submit_button = document.getElementById('login_form_submit_button');
    var modal = $('.modal2')[0];

    login_form_submit_button.onclick = function() {
        'use strict';	

        if (loginuser.value == 'JaneDoe123') {
            sessionStorage.setItem('state', '1');
            modal.style.display = "none";
        }
        else if (loginuser.value == 'JohnSmith456') {
            sessionStorage.setItem('state', '2');
            modal.style.display = "none";
        }
        else {
            sessionStorage.setItem('state', '0');     
            return;
        }

        location.reload();
    }


    var modal = document.getElementById('mdl-custom-modal1');
    var	btn = document.getElementById("mdl-custom-btn");
    var close = document.getElementById("closer");
    var sample5 = document.getElementById('sample5');
    var textbox = $('#commentbox');
    var submit = document.getElementById('submit');

    btn.onclick = function() {
        'use strict';
        modal.style.display = "block";
    }

    close.onclick = function() {
        'use strict';	
        modal.style.display = "none";
        sample5.value = '';
        textbox.removeClass('is-dirty');
    }

})
