#!user/bin/env node

var fs = require('fs');
var path = require('path');

const filename = path.resolve(__dirname + '/../dist/countries.json');
const fileContents = fs.readFileSync(filename, { encoding: 'utf8' });
const pretty = JSON.stringify(JSON.parse(fileContents), null, 4);
fs.writeFileSync(filename, pretty);

