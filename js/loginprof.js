var logout = document.getElementById('logoutprof');

logout.onclick = function() {
    sessionStorage.setItem('state', '0');

    window.location.href = './index.html'
}
