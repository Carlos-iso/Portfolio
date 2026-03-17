const logo = document.querySelector('.logo');

function reloadPage(){
    location.reload();
}

logo.addEventListener('click', reloadPage);