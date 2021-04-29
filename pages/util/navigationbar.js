
function generateNavBarhtml (isUserLoggedIn) {
// isUserLoggedIn to render extra nav links in header else don't render in case of signup/login
  const navbar = `
     
    <div class="nav-container">
      <ul class = "navList">
      <li><a href="/about">About</a></li>
       ${isUserLoggedIn ? '<li><a href="/profile">Profile</a></li>' : ""}
       ${isUserLoggedIn ? '<li><a href="/course">Courses</a></li>' : ""}
       ${isUserLoggedIn ?  '<li><a href="/logout">logout</a></li>' : ""}
      </ul>
    </div>
    `
  ;

  return navbar;
}



module.exports = { generateNavBarhtml }
//Logout 
//redirect
//Navlinks that are in both logged in and logged out state.
//All Navlinks needs to be on the different pages when logged in.