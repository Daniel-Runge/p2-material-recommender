function navigationBarhtml() {
  const navigationBar = `
    <nav class="nav-container">
        <h3>C2-20 Material Recommender</h3>
        <a href="/about">About</a>
        <a href="/profile">Profile</a>
        <a href="/logout">logout</a>
    </nav>
    `;
  return navigationBar;
}

module.exports = { navigationBarhtml };
