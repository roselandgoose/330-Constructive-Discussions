

//JS
(function() {
  'use strict';
  var snackbarContainer = document.querySelector('#demo-toast-example');
  var showToastButton = document.querySelector('#submit');
  showToastButton.addEventListener('click', function() {
    'use strict';
    var data = {message: 'Comment Posted'};
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  });
}());






//Jquery
$(document).ready(function() {

//Variables
var overlay = $("#overlay"),
        fab = $(".fab"),
     cancel = $("#cancel"),
     submit = $("#submit"),
     textfield = document.getElementById('sample5'),
     comment = document.getElementById('new-comment0'),
     tocomments = $(".comment-button"),
     commentboxwrapper = $('.commentboxwrapper'),
     upvote = $('.upvote0'),
     downvote = $('.downvote0'),
     reply = $('#reply'),
     seemore = $('.seemore'),
     upvotescore = $('#upvotescore'),
     score = 0
     commentopen = 0
     upvote1 = $('.upvote1'),
     downvote1 = $('.downvote1'),
     upvotescore1 = $('#upvotescore1'),
     score1 = 0;



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
/*
//fab click
fab.on('click', openFAB);
overlay.on('click', closeFAB);
cancel.on('click', closeFAB);
tocomments.on('click', openFAB);



function openFAB(event) {
  if (event) event.preventDefault();
  fab.addClass('active');
  $('.comment_wrapper').addClass('active');
  fab.removeClass('mdl-js-ripple-effect mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-js-ripple-effect');
  $('.mdl-button__ripple-container').hide();
  overlay.addClass('dark-overlay');

  //$('#sample5')[0].scrollIntoView()
}

function closeFAB(event) {
    if (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  
    fab.removeClass('active');
    fab.addClass('mdl-js-ripple-effect mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-js-ripple-effect');
    $('.mdl-button__ripple-container').show();
    overlay.removeClass('dark-overlay');
    textfield.value = "";
    $('.mdl-textfield').removeClass('is-dirty');
    
  }
*/
// Post button
submit.on('click', create_comment);

var i = 1 //counts number of new comments

function create_comment() {
  if (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }


  var proto = $('#new-comment0').clone();
  proto.attr('id', 'new-comment' + i);
  
  $('#new-comment' + (i-1)).after(proto);

  var commentbox = document.getElementById('new-comment' + i);
  var divlist = commentbox.getElementsByTagName('div');
  var commentername = divlist[1];
  var commentcontent = divlist[2];

  commentername.innerHTML = 'Me';

  commentcontent.innerHTML = sample5.value;

  'use strict';	
  modal.style.display = "none";
  sample5.value = '';
  textbox.classList.remove('is-dirty');

  $('#new-comment' + i)[0].scrollIntoView()

  i++;
}

reply.on('click', replyg);

function replyg() {

}

var j = 2;

function replyf() {
  var top1 = $('#top1');
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
  var snackbarContainer = document.querySelector('#demo-toast1');
  var showToastButton = document.querySelector('#loginbutart');
  showToastButton.addEventListener('click', function() {
    'use strict';
    var data = {message: 'Invalid username or password!'};
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  });
}()); 



var loginbutart = document.getElementById('loginbutart');
var modal = $('.modal2')[0];

loginbutart.onclick = function() {
    'use strict';	

    if (loginuser.value == 'user1')
    {sessionStorage.setItem('state', '1');
    modal.style.display = "none";}

    else if (loginuser.value == 'user2')
    {sessionStorage.setItem('state', '2');
    modal.style.display = "none";}

    else {
      sessionStorage.setItem('state', '0');     
      return;
  }

    location.reload();
}




})


/* new comments */

var modal = document.getElementById('mdl-custom-modal');
var	btn = document.getElementById("mdl-custom-btn");
var close = document.getElementById("closer");
var sample5 = document.getElementById('sample5');
var textbox = document.getElementsByClassName('mdl-textfield')[1];
var submit = document.getElementById('submit');




btn.onclick = function() {
	'use strict';
	modal.style.display = "block";
}

close.onclick = function() {
  'use strict';	
  modal.style.display = "none";
  sample5.value = '';
  textbox.classList.remove('is-dirty');
}

/* end new comments */
