const fs = require('fs');

// Create dist directory if it does not exist
if (!fs.existsSync('./dist')){
    fs.mkdirSync('./dist');
}

fs.copyFileSync('./src/index.html', './dist/index.html');
fs.copyFileSync('./src/announcement.png', './dist/announcement.png');

console.log('Files have been copied!')