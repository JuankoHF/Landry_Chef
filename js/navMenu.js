document.querySelector('.arrow').addEventListener('click', activeNavMenu);
document.querySelector('.close_ok').addEventListener('click', activeNavMenu);
document.querySelector('.close_ok1').addEventListener('click', activeNavMenu);
document.querySelector('.close_ok2').addEventListener('click', activeNavMenu);
document.querySelector('.close_ok3').addEventListener('click', activeNavMenu);

var mover = document.querySelector('.continer_span');
var rotateM = document.querySelector('.openMenu');
var goArrow = document.querySelector('.arrow');
var showMenu = document.querySelector('.back-nav_continer');
var paragGo = document.querySelector('.detalles');

function activeNavMenu() {
    mover.classList.toggle('conSpan_end');
    rotateM.classList.toggle('closeMenu');
    goArrow.classList.toggle('arrow_go');
    paragGo.classList.toggle('detalles_go');

    var onShow = showMenu.classList.contains('back-nav_continer');

    if(onShow == true){

        showMenu.classList.remove('back-nav_continer');
        showMenu.classList.add('openNavCont');

    } else {

        showMenu.classList.remove('openNavCont');
        showMenu.classList.add('back-nav_continer');

    }
   
    
}

