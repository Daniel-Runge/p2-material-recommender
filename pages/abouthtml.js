/**
 * A signup page body that contains the signup form element
 * @author Elias Hajji & Daniel Runge Petersen
 * @returns Html is generated in a javascript file by encapsulatinig it in a function
 */
function aboutHtml() {
    const htmlcontent = `
    <main class="about">
          <div class="about-container">
              <h1>About</h1>
              <p>This page describe the pages content</p>
          </div>
      </main>
  </body>
  </html>`;
  
    return htmlcontent;
  }
  
  //The function is exported to the server
  module.exports = { aboutHtml };
  