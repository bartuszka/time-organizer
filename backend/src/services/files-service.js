const fs = require('fs/promises');
const path = require('path');

class FilesService {
  fetchData(url) {
    const urlParts = url.split('/');
    const filePath = path.join(
      path.dirname(process.mainModule.filename),
      'json',
      ...urlParts
    );
    return fs.readFile(filePath, (error, fileContent) => {
      if (!error) {
        return JSON.parse(fileContent);
      }
      console.log(error);
    });
  }
}

module.exports = FilesService;
