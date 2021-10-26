const user = require('./user.js');

module.exports = {
  findPath: (from, to) => {
    if (from == to) {
      return 'self'
    }
    let map = new Map;
    map.set(from, true)
    let getRelations = (username) => {
      let theUser = user.byUsername(username);
      return theUser.relations;
    }
    let que = [];
    getRelations(from).forEach(e => {
      if (e.username != from)
        que.push([{ username: e.username, comment: e.comment, relation: e.relation }]);
      // console.log(que)
    });
    // console.log(que)
    // [
    //   [{ username: 'another', comment: 'gjh' }],
    //   [{ username: to, comment: 'a good person' }, { username: 'krokodil', comment: 'best friend' }, { username: 'popoev', comment: 'very very nice' }],
    // ]
    while (que.length > 0 && que[0].length < 6 && que[0][0].username !== to) {
      // console.log('zzz', que)
      let firstpath = que.shift();
      if (firstpath[0].relation == '+') {
        getRelations(firstpath[0].username).forEach(e => {
          if (!map.has(e.username)) {
            que.unshift([{ username: e.username, comment: e.comment, relation: e.relation }].concat(firstpath));
            map.set(e.username, true)
          }
        });;
      }
      // firstpath[0].relations.forEach(e => {
      //   que.unshift([{ username: e.username, comment: e.comment }].concat(firstpath));
      // });;
    }
    // console.log('res que', que)
    let result = que[0];
    return result
  },
}

