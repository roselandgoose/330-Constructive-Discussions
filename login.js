$(document).ready(function() {


var loginn = document.getElementById('loginn');


document.onload = checklog();

function checklog(e) {
    
    var state = sessionStorage.getItem('state');

  if (state == '1') {
    loginn.innerHTML = 'Log out';
    loginn.id = 'logoutind'
    loginn.after('profile pic')

    var logout = document.getElementById('logoutind');

    logout.onclick = function() {
      sessionStorage.setItem('state', '0');
      location.reload();
    }

  }

  else {
    var login = document.getElementsByClassName('login')[0];
    var modal = $('.modal1')[0];
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




var loginbut = document.getElementById('loginbut');
var modal = $('.modal1')[0];

loginbut.onclick = function() {
    'use strict';	
    modal.style.display = "none";

    sessionStorage.setItem('state', '1');

    location.reload();
}


})