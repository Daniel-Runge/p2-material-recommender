//Html is generated in a javascript file by encapsulatinig it in a function
function signuphtml() {
  const htmlcontent = `
<main>
  <!--A header-page title and a text title is created-->
 <h3>Opret ny bruger</h3>
 <p>Venligst udfyld nedenstående felter</p>

<div class="container">
<!--Div box-->
            <form id = form action="/signup" method="POST">

            <label for="brugernavn">Brugernavn</label>
            <input type="text" id="brugernavn" name="brugernavn" required>

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>

            <label for="password">Adgangskode</label>
            <input type="password" id="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>

            <input type="radio" id="mand" name="gender" value="mand">
            <label for="mand">Mand</label><br>

            <input type="radio" id="kvinde" name="gender" value="kvinde">
            <label for="kvinde">Kvinde</label><br>

            <input name="submit" value="SIGN UP" type="submit">

            <div id="msg">
              <pre>tag</pre>
            </div>
            </form>

</div>

<!--A user message box is created to inform the user about the requirements for the password-->
<div id="message">
    <h3>Adgangskoden skal indeholde følgende:</h3>
    <p id="letter" class="invalid">Et <b>lille</b> bogstav</p>
    <p id="capital" class="invalid">Et <b>stort</b> bogstav</p>
    <p id="number" class="invalid">Et <b>Tal</b></p>
    <p id="length" class="invalid">Minimum <b>8 karakterer</b></p>
  </div>

  </main>
</body>
</html>`;

  return htmlcontent;
}

//The function is exported to the server
module.exports = {
  signuphtml,
};
