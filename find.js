const user = require('./user.js');

module.exports = {
  findPath: (from, to) => {
    if (from == to) {
      return 'self'
    }
    let res = false;
    let r = [];
    r[0] = connection(from, to);
    r[0].forEach(e => {
      if (e.success) {
        res = e;
      }
    })
    for (let n = 0; n < 5; n++) {
      r[n + 1] = [];
      if (Array.isArray(r[n])) {
        r[n].forEach(e => {
          if (Array.isArray(r[n + 1])) {
            let nextcircle = connection(e.obj.username, to, e.path);
            nextcircle.forEach(e => {
              if (e.success) {
                res = e;
              }
            })
            r[n + 1] = r[n + 1].concat(nextcircle);
          }
        })
      }
    }
    return res;
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
    let newpath = path;
    if (newpath) {
      newpath.push({ obj: trst.obj.username, comment: trst.comment });
    } else {
      newpath = [{ obj: trst.obj.username, comment: trst.comment }];
    }
    circle.push({ obj: trst.obj, comment: trst.comment, success, path: newpath });
  }

  return circle
}