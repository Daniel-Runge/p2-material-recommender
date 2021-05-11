/**
 * Work in process
 */
function loginOrLogout() {
  const loginOrLogout = document.getElementById("loginOrOut");
  const cookie = document.cookie;

  console.log(loginOrLogout);
  console.log(cookie);

  if (!cookie) {
    loginOrLogout.href = "/login";
    loginOrLogout.innerHTML = "login";
    return;
  }

  loginOrLogout.href = "/logout";
  loginOrLogout.innerHTML = "logout";
  return;
}

loginOrLogout();
