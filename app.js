const input = require('./server/input.js')
const user = require('./server/user.js')
const test = require('./server/tests.js')
const load = require('./server/load.js')
const config = require('./server/config');

if (config.runtests) {
    load('data/testdata.txt');
    test();
    user.clear();
}
load('data/data.txt');

input.bot();
