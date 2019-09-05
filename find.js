const user = require('./user.js');

module.exports = {
  findPath: (from, to) => {
    if (from == to) {
      return 'self'
    }
    let map = new Map;
    map.set(from, true)
    // from.relations.forEach(e => {
    //   que.unshift([{ username: e.username, comment: e.comment }]);
    // });
    let getRelations = (username) => {
      let theUser = user.byUsername(username);
      // console.log(theUser.relations)
      return theUser.relations;
      // return [{ username: 'lololoev', comment: 'love love love' }, { username: 'mamukov', comment: 'kolbasa sas' }]
    }
    let que = [];
    getRelations(from).forEach(e => {
      que.push([{ username: e.username, comment: e.comment, relation: e.relation }]);
      // console.log(que)
    });
    // console.log(que)
    // [
    //   [{ username: 'another', comment: 'gjh' }],
    //   [{ username: to, comment: 'a good person' }, { username: 'krokodil', comment: 'best friend' }, { username: 'popoev', comment: 'very very nice' }],
    // ]
    while (que.length > 0 && que[0].length < 6 && que[0][0].username !== to) {
      let firstpath = que.shift();
      getRelations(firstpath[0].username).forEach(e => {
        if (!map.has(e.username)) {
          if (e.relation == '+') {
            que.unshift([{ username: e.username, comment: e.comment, relation: e.relation }].concat(firstpath));
          }
          map.set(e.username, true)
        }
      });;
      // firstpath[0].relations.forEach(e => {
      //   que.unshift([{ username: e.username, comment: e.comment }].concat(firstpath));
      // });;
    }
    let result = que[0];
    return result
  },
}
//   findPathold: (from, to) => {
//     if (from == to) {
//       return 'self'
//     }
//     let res = false;
//     let r = [];
//     r[0] = connection(from, to);
//     r[0].forEach(e => {
//       if (e.success) {
//         // console.log(e);
//         res = e;
//       }
//     })
//     for (let n = 0; n < 5; n++) {
//       r[n + 1] = [];
//       if (Array.isArray(r[n])) {
//         r[n].forEach(e => {
//           if (Array.isArray(r[n + 1])) {
//             if (e.relation === '+') {
//               let nextcircle = connection(e.obj.username, to, e.path);
//               nextcircle.forEach(e => {
//                 if (e.success) {
//                   // console.log(e);
//                   res = e;
//                 }
//               })
//               r[n + 1] = r[n + 1].concat(nextcircle);
//             }
//           }
//         })
//       }
//     }
//     return res;
//   },
//   findPathooo: (from, target) => {
//     let success = (e) => {
//       console.log('path:', e);
//     }
//     let obj = user.byUsername(from);
//     let circle = [{ rel: { obj }, path: [] }];
//     for (var i = 0; i < circle.length && i < 10000; i++) {
//       circle[i].rel.obj.relations.forEach(e => {
//         console.log(e);
//         if (e.obj.username == target) {
//           success(e);
//           return;
//         }
//         else {
//           if (e.relation == '+') {
//             path.push(e.rel);
//             circle.push({ rel: e.rel, path });
//           }
//         }
//       });
//     }
//   },
//   findPathx: (from, target) => {
//     // let wave = (start, near) => {
//     //   let map = new Map() // node -> int
//     //   let que = []
//     //   dist.set(start, 0)
//     //   que.add(start)
//     //   while(!que.isEmpty()){
//     //    let cur = que.removeAt(0)
//     //    let next = near(cur).filter(it => map.get(it)==null)
//     //    next.forEach(it => map.set(it,map.get(cur)+1))
//     //    que.addAll(next)
//     //   }
//     //   return map
//     //  }

//     // next.forEach(it => map.set(it,[].addAll(map.get(cur)).add(cur))
//     if (from == target) {
//       return 'self'
//     }

//     let result;
//     let success = (res) => {
//       // console.log('return',res, target);
//       result = res
//     }

//     from = user.byUsername(from);
//     if (!from) {
//       return false;
//     }

//     let que = connection(from, target);
//     let i = 0
//     while (que.length > 0 && i < 100000) {
//       //   console.log('que');
//       // console.log(que);
//       if (que[0].success) {
//         success(que[0]);
//         // console.log(que);
//       }
//       que = que.concat(connection(que[0].obj, target, que[0].path));
//       que.splice(0, 1);
//       i++;
//     }
//     return result;
//   }

// }
// let connection = (obj, target, path) => {
//   let bad = false;
//   let success = false;
//   // let obj = user.byUsername(from);
//   // if (!obj) {
//   //   return false;
//   // }

//   let circle = [];
//   // console.log('connection');
//   // console.log(obj);
//   for (let trst of obj.relations) {
//     if (trst.obj.username == target) {
//       success = true;
//     } else {
//       success = false;
//     }
//     let newpath = path;
//     if (newpath) {
//       newpath.push({ obj: trst.obj.username, comment: trst.comment, relation: trst.relation });
//     } else {
//       newpath = [{ obj: trst.obj.username, comment: trst.comment, relation: trst.relation }];
//     }
//     console.log(trst.obj.username, success, newpath);
//     circle.push({ obj: trst.obj, comment: trst.comment, relation: trst.relation, success, path: newpath });
//   }
//   return circle
// }

