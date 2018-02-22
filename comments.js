$(document).ready(function() {

//Variables
var overlay = $("#overlay"),
        fab = $(".fab"),
     cancel = $("#cancel"),
     submit = $("#submit");
     textfield = document.getElementById('sample5');
     comment = document.getElementById('new-comment0');


//fab click
fab.on('click', openFAB);
overlay.on('click', closeFAB);
cancel.on('click', closeFAB);




function openFAB(event) {
  if (event) event.preventDefault();
  fab.addClass('active');
  $('.comment_wrapper').addClass('active');
  fab.removeClass('mdl-js-ripple-effect mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-js-ripple-effect');
  $('.mdl-button__ripple-container').hide();
  overlay.addClass('dark-overlay');

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

  commentcontent.innerHTML = textfield.value;

  i++;
}





})