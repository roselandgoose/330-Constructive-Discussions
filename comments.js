$(document).ready(function() {

//Variables
var overlay = $("#overlay"),
        fab = $(".fab"),
     cancel = $("#cancel"),
     submit = $("#submit");

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
    
  }


})