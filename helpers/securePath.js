const path = require("path");

/**
 * secture file system access as described on
 * https://nodejs.org/en/knowledge/file-system/security/introduction/
 * @author Brian Nielsen
 * @param {String} userPath
 * @param {String} rootFileSystem
 * @returns A string representing the secure path of the requested file
 */
function securePath(userPath, rootFileSystem) {
    const publicResources = "/public/";

    if (userPath.indexOf("\0") !== -1) {
      return undefined;
    }
    userPath = publicResources + userPath;
  
    let p = path.join(rootFileSystem, path.normalize(userPath));
    return p;
  }

module.exports = { securePath };