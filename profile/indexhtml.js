function generate(){
    const htmlcontent = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>



</head>
<body>
 <h3>Opret ny bruger</h3>
 <p>Venligst udfyld nedenstående felter</p>

<div class="container">
<!--Div boks-->
            <form action="validation.html" method="POST">
            <label for="Fornavn">Fornavn</label>
            <input type="text" id="fornavn" name="fornavn" required>

            <label for="efternavn">Efternavn</label>
            <input type="text" id="efternavn" name="efternavn" required>

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>

            <label for="password">Adgangskode</label>
            <input type="password" id="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>

            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label><br>

            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label><br>

            <input type="radio" id="other" name="gender" value="other">
            <label for="other">Other</label><br><br>

            <button href="validation.html" >Opret</button>
            </form>

</div>

<div id="message">
    <h3>Adgangskoden skal indeholde følgende:</h3>
    <p id="letter" class="invalid">Et <b>lille</b> bogstav</p>
    <p id="capital" class="invalid">Et <b>stort</b> bogstav</p>
    <p id="number" class="invalid">Et <b>Tal</b></p>
    <p id="length" class="invalid">Minimum <b>8 karakterer</b></p>
  </div>

</body>
<head> <script src="/signup.js"></script></head>
</html>`

return htmlcontent

}

module.exports = {
    generate
}