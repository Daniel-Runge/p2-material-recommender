/**
 * The login page body contains the login form element and the login form data for the current user and the current user's password 
 * @author Daniel Runge Petersen
 * @returns a html text string for the login page body
 */
function loginhtml() { // insert Elias' login form
    const content = `
    <main class="login">
        <div class="login-container">
            <h1>login</h1>
            <p>Enter Username and Password</p>
            <form action="/login" method="post">
                <label>Username: </label>
                <input type="text" placeholder="Enter Username" name="username" required>
                <label>Password: </label>
                <input type="password" placeholder="Enter Password" name="password" required>
                <input name="submit" value="LOGIN" type="submit"></input>
            </form>
        </div>
        <div class="right-side">
            <section class="help-block">
                <h3>About</h3>
                <p>This website is a recommender system for students at AAU.</p>
            </section>
            <section class="sign-up">
                <div>
                    <h3>Sign up</h3>
                    <p>If you haven't already got an AAU account then you can sign up here.</p>
                </div>
                <a class="circle-button" href="/signup"><i class='bx bx-log-in'></i></a>
            </section>
        </div>
    </main>

</body>

</html>`;
    return content;
}

module.exports = { loginhtml }
