const formRegister = document.getElementById('form_register')
const inputUser = document.getElementById('user');
const inputMail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputPasswordCheck = document.getElementById('password_check');
const checkboxCGU = document.getElementById('CGU');
const allCheckIcon = document.querySelectorAll('.icon_check');
const allAlertMessage = document.querySelectorAll('.alert_message');


inputUser.addEventListener('input', function(e){
    if(e.target.value.length >= 3){
        allCheckIcon[0].style.display = "block"
        allAlertMessage[0].style.display = "none"
    }
    else{
        allCheckIcon[0].style.display = "none"
    }
})

formRegister.addEventListener('submit', function(e){
    console.log(e.target)
    e.preventDefault();
    if(e.target[0].value.length < 3){
        allAlertMessage[0].style.display = "block"
    }
})