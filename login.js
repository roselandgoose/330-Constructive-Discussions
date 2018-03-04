

$(document).ready(function() {


  

var loginn = document.getElementById('loginn');


document.onload = checklog();

function checklog(e) {
    var pic = document.getElementById('black');
    var pic1 = document.getElementById('black1');


  var state = sessionStorage.getItem('state');

  if (state == '1') {
    loginn.innerHTML = 'Log out';
    loginn.id = 'logoutind'
    pic.style.display = 'block';
    

    var logout = document.getElementById('logoutind');

    logout.onclick = function() {
      sessionStorage.setItem('state', '0');
      location.reload();
    }

  }

  else if (state == '2') {
    loginn.innerHTML = 'Log out';
    loginn.id = 'logoutind'
    pic1.style.display = 'block';
    

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

(function() {
  'use strict';
  var snackbarContainer = document.querySelector('#demo-toast1');
  var showToastButton = document.querySelector('#loginbut');
  showToastButton.addEventListener('click', function() {
    'use strict';
    var data = {message: 'Invalid username or password!'};
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  });
}()); 

var loginuser = document.getElementById('loginuser');
var loginbut = document.getElementById('loginbut');
var modal = $('.modal1')[0];

loginbut.onclick = function() {
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