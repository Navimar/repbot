const user = require('./user.js');
const load = require('./load.js');

module.exports = {
    lunch: () => {
        user.clear();
        // load();
    },
    start: (username) => {
        if (!user.byUsername(username)) {
            return user.add(username);
        }
    },
    relation: (objname, subjname, comment, relation) => {
        let obj = user.byUsername(objname);
        let flag = true
        for (let r in obj.relations) {
            if (obj.relations[r].username == subjname) {
                if (relation == '0') {
                    obj.relations.splice(r, 1);
                } else {
                    obj.relations[r] = { username: subjname, comment, relation }
                }
                flag = false;
            }
        }
        if (flag) {
            obj.relations.push({ username: subjname, comment, relation });
        }
    },
    // clearrealtion: (objname, subjname) => {
    //     let obj = user.byUsername(objname);
    //     for (let r in obj.relations) {
    //         if (obj.relations[r].username == subjname) {
    //             obj.relations.splice(r, 1);
    //         }
    //     }
    // },
}