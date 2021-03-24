const formRegister = document.getElementById('form_register')
const inputUser = document.getElementById('user');
const inputMail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputPasswordCheck = document.getElementById('password_check');
const checkboxCGU = document.getElementById('CGU');
const allCheckIcon = document.querySelectorAll('.icon_check');
const allAlertMessage = document.querySelectorAll('.alert_message');

// const regexEmail = /\S+@\S+\.\S+/;
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

inputUser.addEventListener('input', function(e){
    if(e.target.value.length >= 3){
        allCheckIcon[0].style.display = "block"
        allAlertMessage[0].style.display = "none"
    }
    else{
        allCheckIcon[0].style.display = "none"
    }
})

inputMail.addEventListener('input', function(e){
    // search va permettre de vérifier que la valeur de l'input 
    // match avec le schéma décrit dans regexEmail
    // Si ça match la valeur sera égale à 0 (l'index du premier résultat), sinon -1
    if(e.target.value.search(regexEmail) === 0){
        allCheckIcon[1].style.display = "block"
        allAlertMessage[1].style.display = "none"
    }
    else if(e.target.value.search(regexEmail) === -1){
        allCheckIcon[1].style.display = "none"
    }
})

formRegister.addEventListener('submit', function(e){
    console.log(e.target)
    e.preventDefault();
    if(e.target[0].value.length < 3){
        allAlertMessage[0].style.display = "block"
    }
    if(e.target[1].value.search(regexEmail) === -1){
        allAlertMessage[1].style.display = "block"
    }
})