const user = require('./user.js');

module.exports = {
  findPath: (from, to) => {
    let r = [];
    r[0] = connection(from, to);
    for (let n = 0; n < 5; n++) {
      r[n + 1] = [];
      if (Array.isArray(r[n])) {
        r[n].forEach(e => {
          if (Array.isArray(r[n + 1])) {
            r[n + 1] = r[n + 1].concat(connection(e.obj.username, to));
          }
        })
      }
    }
    return r;
  }
}
let connection = (from, target, path) => {

  let success = false;
  let obj = user.byUsername(from);
  if (!obj) {
    return false;
  }

  let circle = [];
  for (let trst of obj.trust) {
    if (trst.obj.username == target) {
      success = true;
    } else {
      success = false;
    }
    circle.push({ obj: trst.obj, comment: trst.comment, success, path });
  }

  return circle
}