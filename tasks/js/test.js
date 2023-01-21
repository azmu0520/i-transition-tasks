const fs = require('fs');
const crypto = require('crypto');
// Iterate over the files and read each file as binary
let files = fs.readdirSync('./file');
let hashes = [];

files.forEach((file) => {
  let fileData = fs.readFileSync(`./file/${file}`);
  let hash = crypto.createHash('sha3-256').update(fileData).digest('hex');
  hashes.push(hash);
});

// Sort the hashes alphabetically in the array
hashes.sort();

// Concatenate the hashes without any separator
let hashString = hashes.join('');

// Concatenate the resulting string with your email address in lowercase
let email = 'azizbekbootcam@gmail.com';
let finalString = hashString + email.toLowerCase();

// Calculate the SHA3-256 hash of the resulting string
let resultHash = crypto
  .createHash('sha3-256')
  .update(finalString)
  .digest('hex');

// Send the obtained 64 hex digits in lowercase to ilearning.task2@gmail.com
console.log(resultHash);
