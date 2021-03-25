const formRegister = document.getElementById('form_register')
const inputUser = document.getElementById('user');
const inputMail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputPasswordCheck = document.getElementById('password_check');
const checkboxCGU = document.getElementById('CGU');
const allCheckIcon = document.querySelectorAll('.icon_check');
const allAlertMessage = document.querySelectorAll('.alert_message');
const strengthSecurity = document.querySelector('.strength_security')
const strgthS1 = document.querySelector('.strength_security_1')
const strgthS2 = document.querySelector('.strength_security_2')
const strgthS3 = document.querySelector('.strength_security_3')

// const regexEmail = /\S+@\S+\.\S+/;
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Vérification nom d'utilisateur correct
inputUser.addEventListener('input', function(e){
    if(e.target.value.length >= 3){
        allCheckIcon[0].style.display = "block"
        allAlertMessage[0].style.display = "none"
    }
    else{
        allCheckIcon[0].style.display = "none"
    }
})

// Vérification email correct
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

// Vérification mot de passe correct
let valueInp;
// On définit le caractère spécial, tout ce qui n'est pas (^) une lettre minuscule (a-z) une lettre majuscule (A-Z) ou un nombre (0-9)
const specialCar = /[^a-zA-Z0-9]/
// On définit l'alphabet donc tous les caractères (a-z) et pas sensible à la casse, maj ou min (i) pour insensitive
const letters =  /[a-z]/i
// On définit les chiffres donc tous les caractères compris entre 0 et 9
const numbers = /[0-9]/

let objValidation = {
    symbole : 0,
    letter : 0,
    number : 0,
}

let testAll = 0;

inputPassword.addEventListener('input', function(e){
    valueInp = e.target.value

    if(valueInp.search(specialCar) !== -1){
        objValidation.symbole = 1;
    }
    if(valueInp.search(letters) !== -1){
        objValidation.letter = 1;
    }
    if(valueInp.search(numbers) !== -1){
        objValidation.number = 1;
    }

    if(e.inputType = 'deleteContentBackward'){
        if(valueInp.search(specialCar) === -1){
            objValidation.symbole = 0;
        }
        if(valueInp.search(letters) === -1){
            objValidation.letter = 0;
        }
        if(valueInp.search(numbers) === -1){
            objValidation.number = 0;
        }
    }

    testAll = objValidation.symbole + objValidation.letter + objValidation.number;

    console.log(objValidation)
    console.log(testAll)

    if(testAll == 3){
        allAlertMessage[2].style.display = "none"
        allCheckIcon[2].style.display = "block"
    }
    else {
        allCheckIcon[2].style.display = "none"
    }

    // Force du mot de passe
    if(valueInp.length > 0 && valueInp.length <= 5){
        console.log('strgth level 1')
        strengthSecurity.style.display = "flex"
        strgthS1.style.display = "block"
        strgthS2.style.display = "none"
        strgthS3.style.display = "none"
    }
    else if(valueInp.length > 5 && valueInp.length <= 9){
        console.log('strgth level 2')
        strengthSecurity.style.display = "flex"
        strgthS1.style.display = "block"
        strgthS2.style.display = "block"
        strgthS3.style.display = "none"
    }
    else if(valueInp.length > 9){
        console.log('strgth level 3')
        strengthSecurity.style.display = "flex"
        strgthS1.style.display = "block"
        strgthS2.style.display = "block"
        strgthS3.style.display = "block"
    }
    else {
        console.log('strgth level 0')
        strengthSecurity.style.display = "none"
        strgthS1.style.display = "none"
        strgthS2.style.display = "none"
        strgthS3.style.display = "none"
    }
})

// Vérification ensemble input avant envoie et si non affichage message pourquoi
formRegister.addEventListener('submit', function(e){
    e.preventDefault();
    if(e.target[0].value.length < 3){
        allAlertMessage[0].style.display = "block"
    }
    if(e.target[1].value.search(regexEmail) === -1){
        allAlertMessage[1].style.display = "block"
    }
    if(testAll < 3){
        allAlertMessage[2].style.display = "block"
    }
})