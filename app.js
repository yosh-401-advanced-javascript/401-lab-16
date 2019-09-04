'use strict';


const event = require('./lib/event.js');
require('./lib/files.js');
require('./lib/logger.js');

let file = process.argv.slice(2).shift();

const alterFile = (file) => {
  event.emit('readFile', file);
};

// The application must accept a filename as a command line parameter
// Read the file from the file system
// Convert it’s contents to upper case
// Write it back to the file system

event.emit('readFile', file);
event.emit('writeFile', file);
event.emit('writeUpperCase', file);


alterFile(file);

