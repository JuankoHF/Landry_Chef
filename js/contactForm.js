document.querySelector('.contact').addEventListener('click', activeForm);
document.querySelector('.contact').addEventListener('click', closeForm);
document.querySelector('.exper').addEventListener('click', activeExperience);
document.querySelector('.cerrar').addEventListener('click', closeExperience);
document.querySelector('.envelp_contact').addEventListener('click', activeForm);
document.querySelector('.envelp_contact').addEventListener('click', closeForm);
document.querySelector('.special').addEventListener('click', activeSpecial);
document.querySelector('.special_close').addEventListener('click', clseSpecial);


var formCont = document.querySelector('.formContiner');
function activeForm() {
    formCont.classList.toggle('active_formContiner');
}


var closeRotate = document.getElementById('idContact');
function closeForm() {

    const changeValue = closeRotate.classList.contains('tactcon');

    if(changeValue == true) {
        closeRotate.value = "Contactar";
        closeRotate.classList.toggle('tactcon');
    } else {
        closeRotate.classList.toggle('tactcon');
        closeRotate.value = "Cerrar  X";
    }
   
}

var opemExperience = document.querySelector('.experience_content');
function activeExperience() {
    opemExperience.classList.toggle('avtive_expContent');
}

function closeExperience() {
    opemExperience.classList.remove('avtive_expContent');
}

var vewSpecial = document.querySelector('.open_special');
function activeSpecial() {
    vewSpecial.classList.toggle('avtive_specialContent');
}
function clseSpecial() {
    vewSpecial.classList.remove('avtive_specialContent');
}