const user = require('./user.js');

module.exports = {
  findPath: (from, to) => {
    if (from == to) {
      return 'self'
    }
    let que = [];
    godeep = (node, to, level, path) => {
      if (!path)
        path = [];
      if (!level)
        level = 0;
      let theuser = user.byUsername(node);
      let relations = theuser.relations;
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

    let result = que[0];
    return result
  },
}

