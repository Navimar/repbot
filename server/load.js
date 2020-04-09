const readline = require('read-each-line-sync');
const read = require('./data');

module.exports = (path) => {
    if (!path) {
        path = 'data.txt'
    }
    readline(path, function (line) {
        let val = JSON.parse(line);
        read(val);
    });
};