'use strict';

let fs = require('fs');

let file1 = `./data/file1.txt`;
let file2 = `./data/file2.text`;
let file3 = `./data/file3.txt`;

module.exports = exports = (arrayFiles, callback) => {
  fs.readFile( arrayFiles, (err, data) => {
    if(err) { callback(err); }
    else { callback(undefined, data.toString().trim()); }
  });
};

let handleData = (err,data) => {
  if (err) {
    throw err;
  }
  console.log('this is my console', data.toString());
};

//the fs readFile takes error first as an argument. if error is undefined, then run the callback function
fs.readFile(file1, handleData);
fs.readFile(file2, handleData);
fs.readFile(file3, handleData);
