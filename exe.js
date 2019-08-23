const user = require('./user.js');

module.exports = {
    lunch: () => {
    },
    start: (username) => {
        if (!user.byUsername(username)) {
            return user.add(username);
        }
    },
    relation: (objname, subjname, comment, relation) => {
        let obj = user.byUsername(objname);
        // let subj = user.byUsername(subjname);
        // if (!subj) {
        //     subj = user.add(subjname);
        // }
        obj.relations.push({ username: subjname, comment, relation });
    },
    clearrealtion: (objname, subjname) => {
        let obj = user.byUsername(objname);
        if (!obj) {
            obj = user.add(objname);
        }
        for (let r in obj.relations) {
            if (obj.relations[r].obj.username == subjname) {
                obj.relations.splice(r, 1);
            }
        }
    },
}