/**
 * A signup page body that contains the signup form element
 * @author Elias Hajji & Daniel Runge Petersen
 * @returns Html is generated in a javascript file by encapsulatinig it in a function
 */
function signuphtml() {
  const htmlcontent = `
  <main class="signup">
		<div class="signup-container">
			<h1>sign up</h1>
			<p>Please choose a Email and Password</p>
            <form action="/signup" method="POST">
				<label>Email: </label>
            	<input type="email" id="email" placeholder="Enter Email" name="email" required>
            	<label>Password: </label>
            	<input type="password" id="password" placeholder="Enter Password" name="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>
            	<label>Confirm password: </label>
              <input type="password" id="confpassword" placeholder="Confirm password" name="confpassword" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>
              <input name="submit" value="SIGN UP" type="submit"></input> 
              </form>
		</div>
		<div class="right-side">
            <section class="help-block">
                <h3>Help</h3>
                <p>The password must contain the following:</p>
				<ul class="guide">
					<li>A minimum of eight characters</li>
					<li>At least 1 lower case character</li>
					<li>At least one upper case character</li>
					<li>at least one number</li>
				</ul>
            </section>
            <section class="sign-up">
                <div>
                    <h3>Log in</h3>
                    <p>If you already have an AAU account then you can login here.</p>
                </div>
                <a class="circle-button" href="/login"><i class='bx bx-log-in'></i></a>
            </section>
        </div>
	</main>
</body>

<script>
let password = document.getElementById("password")
let confirm_password = document.getElementById("confpassword");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

</script>
</html>`;

  return htmlcontent;
}

//The function is exported to the server
module.exports = {
  signuphtml,
};
