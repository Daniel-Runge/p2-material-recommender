/**
 * This function returns a HTML header string with a title, css styles and JS scripts
 * @author Daniel Runge Petersen
 * @param {String} title The title of the website in the header
 * @param {String[]} csss CSS file names
 * @param {String[]} scripts Script file names
 * @returns {String} A HTML header string created from the parameters
 */
function htmlHeader(title, csss = [], scripts = []) {
  title = title ?? "Title";
  csss = csss ?? [];
  scripts = scripts ?? [];
  let cssString = "";
  for (let i = 0; i < csss.length; i++) {
    let css = csss[i];
    cssString += `${
      css === "" ? "" : '<link rel="stylesheet" href="' + css + '">\n'
    }`;
  }
  let scriptString = "";
  for (let i = 0; i < scripts.length; i++) {
    let script = scripts[i];
    scriptString += `${
      script === "" ? "" : '<script defer src="' + script + '"></script>\n'
    }`;
  }

  const header = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        ${cssString}
        ${scriptString}
    </head>`;
  return header;
}

module.exports = { htmlHeader };
