// const btn = document.querySelector('button');

const { sqlGetValuesForProfile } = require("./sqlDbQuery");

// var bruger1 = {
//     ID : "3";
//     Email : "king@hotmail.com";
//     Perception : "7";
//     Input : "3";
//     Processing: "-7";
//     Understanding : "5";
// }
 
function AddUserToSlider() {
    var Perception = document.getElementById("Perception").value;
    var Input = document.getElementById("Input").value;
    var Processing = document.getElementById("Processing").value;
    var Understanding = document.getElementById("Understanding").value;
    var bruger1 = {
    ID : "3",
    Email : "king@hotmail.com",
    Perception : Perception,
    Input : Input,
    Processing: Processing,
    Understanding : Understanding,
}
document.getElementById('PerceptionVal', 'Perception').value = "7";
document.getElementById('InputVal', 'Input').value = "3";
document.getElementById('ProcessingVal').value = "-7";
document.getElementById('UnderstandingVal').value = "5";

}

function fetchValuesForUser(){
    const user = {
      ID: "1",
      Email: "john@hotmail.com"
    };
const result  = sqlGetValuesForProfile(user);
document.getElementById("PerceptionVal", "Perception").value = result.Perception;
document.getElementById("InputVal", "Input").value = result.Input;
document.getElementById("ProcessingVal").value = result.Processing;
document.getElementById("UnderstandingVal").value = result.Understanding;
}
/*
btn.addEventlistener('click' () => {

});*/