
//Global variables are created, which will be used further down in the upcomming functions
const brugernavn = document.getElementById("brugernavn");
const email=document.getElementById("email");

const password = document.getElementById("password");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");

const form = document.getElementById('form')

/*
let users = []
const addUser = (ev) => {
  ev.preventDefault();
  let user = {
    brugernavn: document.getElementById('brugernavn').value,
    email: document.getElementById('email').value
    password: document.getElementById('password').value
  }
  users.push(user);
  document.querySelector('form').reset;

  console.warn('added', {users});
  let tag = document.querySelector('');
  tag.textContent = '\n' + JSON.stringyfy(users, '\t' 2)

}*/

document.addEventListener('loaded', () => {
    document.getElementbyId('validation.html').addEventListener('click', addUser);
});

//The information message box for the password is hidden when not clicked on
password.onfocus=function hide(){
    document.getElementById("message").style.display= "block";
    }

//The information message box is onblured and dispalyed when clicked on
password.onblur=function show(){
    document.getElementById("message").style.display= "none";
    }

//The password is validated by forcing the user to include a lowercase letter from a to å
password.onkeyup=function validate(){
    let lowerCaseLetters=/[a-å]/g;
    if(password.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

//The password is validated by forcing the user to include a uppercase letter from a to å
    let upperCaseLetters = /[A-Å]/g;
    if(password.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

//The password is validated by forcing the user to include a number
    let numbers = /[0-9]/g;
    if(password.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

//The password is validated by forcing the user to include atleast characters
    if(password.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

//The funnctions are being exported signup.test.js so that they can be tested

module.exports = hide

module.exports = show

module.exports = validate













