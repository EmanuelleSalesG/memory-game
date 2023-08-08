const input = document.querySelector(".input-login");
const button_login = document.querySelector(".button-login");
const submit_form = document.querySelector(".login-form");

const validateInput = ({target}) => {
    if(target.value.length > 3){
        button_login.removeAttribute('disabled');
    }else{
        button_login.setAttribute('disabled', '');
    }
}

const submitLogin = (event) => {
    event.preventDefault(); //Don't reload the page 
    
    localStorage.setItem('Player', input.value);
    window.location = 'pages/memory-game.html'
}

input.addEventListener('input', validateInput);
submit_form.addEventListener('submit', submitLogin);