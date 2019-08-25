const input = require('./input.js')
const user = require('./user.js')
const test = require('./tests.js')
const load = require('./load.js')


// Array Remove - By John Resig (MIT Licensed)
// Array.prototype.remove = function (from, to) {
//     var rest = this.slice((to || from) + 1 || this.length);
//     this.length = from < 0 ? this.length + from : from;
//     return this.push.apply(this, rest);
// };


load('testdata.txt');
test();
user.clear();
load('data.txt');

input.init();
