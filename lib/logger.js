'use strict';

const event = require('./event');


event.on('readFile', content => log('Reading the File', content));
event.on('writeFile', content => log('Writing the File', content));
event.on('error', error => log('Ohs nos!! Error!', error));

function log(event, content) {
  let time = new Date();
  console.log({event, time, content});
}

