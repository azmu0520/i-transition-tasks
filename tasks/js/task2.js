const { createHash } = require('crypto');
const path = require('path');
const fs = require('fs');

//joining path of directory
const directoryPath = path.join(__dirname, 'file');

const hash = createHash('sha3-256');

let res = [];
let fr = fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  let resIn = '';
  //listing all files using forEach
  files.map(function (file) {
    // Do whatever you want to do with the file
    hash.update(file);
    resIn += hash.copy().digest('hex').split('').sort().join('');
    // console.log(typeof hash.copy().digest('hex').split('').sort().join(''));
    // console.log('========================');
  });
  console.log(resIn);
});

// async function fileType() {
//   let files = await promises.readdir(path.resolve(__dirname, 'access'));
//   return files.map((file) => file.split('.').slice(0, -1).join('.'));
// }
