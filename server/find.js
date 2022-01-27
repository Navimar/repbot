const user = require('./user.js');

module.exports = {
  findPath: (from, to) => {
    if (from == to) {
      return 'self'
    }

    // let map = new Map;
    // map.set(from, true)
    let que = [];
    // user.byUsername(from).relations.forEach(e => {
    //   if (e.username != from)
    //     que.push([{ username: e.username, comment: e.comment, relation: e.relation }]);
    // });

    // while (que.length > 0 && que[0].length < 6 && que[0][0].username !== to) {
    //   let firstpath = que.shift();
    //   if (firstpath[0].relation == '+') {
    //     user.byUsername(firstpath[0].username).relations.forEach(e => {
    //       if (!map.has(e.username)) {
    //         que.unshift([{ username: e.username, comment: e.comment, relation: e.relation }].concat(firstpath));
    //         map.set(e.username, true)
    //       }
    //     });;
    //   }
    // }
    // console.log('===========GODEEP================');
    godeep = (node, to, level, path) => {
      // console.log('path', path);
      if (!path)
        path = [];
      if (!level)
        level = 0;
      let theuser = user.byUsername(node);
      let relations = theuser.relations;
      // console.log('node', theuser);
      if (node == to)
        que.push(path);
      else if (level < 6)
        relations.forEach(e => {
          if (e.username != from && (e.relation == '+' || e.username == to)) {
            godeep(e.username, to, level + 1, [{ username: e.username, comment: e.comment, relation: e.relation }].concat(path));
          }
        });
    }
    godeep(from, to);

    que.sort((a, b) => {
      if (a[0].relation == '-' && b[0].relation == '+')
        return -1;
      if (a[0].relation == '+' && b[0].relation == '-')
        return 1;
      if (a.length > b.length)
        return 1;
      if (a.length < b.length)
        return -1;
    });

    // console.log('res que', que)
    let result = que[0];
    return result
  },
}

