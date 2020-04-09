const input = require('./server/input.js')
const user = require('./server/user.js')
const test = require('./server/tests.js')
const load = require('./server/load.js')
const config = require('./server/config');


// Array Remove - By John Resig (MIT Licensed)
// Array.prototype.remove = function (from, to) {
//     var rest = this.slice((to || from) + 1 || this.length);
//     this.length = from < 0 ? this.length + from : from;
//     return this.push.apply(this, rest);
// };

if (config.runtests) {
    load('data/testdata.txt');
    test();
    user.clear();
}

load('data/data.txt');

input.bot();
