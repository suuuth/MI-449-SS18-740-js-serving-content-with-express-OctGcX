
var showNav = false
var navBtn = document.getElementById('main-nav-btn')
var closeNavBtn = document.getElementById('close-nav')
var nav = document.getElementById('nav')

function showHideNav () {
    showNav = !showNav
    if (showNav) {
        nav.style.display="block"
        setTimeout(function(){ 
            nav.classList.add('show')
         }, 100);
    } else {
        nav.classList.remove('show')
        setTimeout(function(){ 
            nav.style.display=""
         }, 100);
    }
}

navBtn.addEventListener('click', showHideNav)
closeNavBtn.addEventListener('click', showHideNav)
