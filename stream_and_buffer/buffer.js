const fs = require('fs');
const path = require('path');

const buffer = {};

buffer.streams = fs.createReadStream(path.join(__dirname, 'bigdata.txt'))

module.exports = buffer;