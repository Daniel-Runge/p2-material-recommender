
//Vi opretter nogle globale variabler, som vi benytter senere i vores nedestående funktioner:
let name = document.getElementById("fornavn");
let LastName =document.getElementById("efternavn");
let email=document.getElementById("email");

let password = document.getElementById("password");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

let form = document.getElementById('form')

/*document.querySelector('#validation.html')
    .addEventListener('click', () => {
        window.location.href = 'https://www.juniordevelopercentral.com/';
    })*/

password.onfocus=function hide(){
    document.getElementById("message").style.display= "block";
    }

password.onblur=function show(){
    document.getElementById("message").style.display= "none";
    }

password.onkeyup=function validate(){
    let lowerCaseLetters=/[a-å]/g;
    if(password.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    let upperCaseLetters = /[A-Å]/g;
    if(password.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    let numbers = /[0-9]/g;
    if(password.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if(password.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}












