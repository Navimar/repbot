const user = require('./user.js');

module.exports = {
    lunch: () => {

    },
    start: (username, id) => {
        let u = user.byUsername(username);
        if (!u) {
            return user.add(username, id);
        }
        else if (u.id != id)
            u.id = id;
        return false;
    },
    relation: (objname, subjname, comment, relation) => {
        let obj = user.byUsername(objname);
        let flag = true
        for (let r in obj.relations) {
            if (obj.relations[r].username == subjname) {
                if (relation == '0') {
                    // console.log('relations before')
                    // console.log(obj.relations)

                    obj.relations.splice(r, 1);

                    // console.log('relations after')
                    // console.log(obj.relations)

                } else {
                    obj.relations[r] = { username: subjname, comment, relation }
                }
                flag = false;
            }
        }
        if (flag) {
            if (relation != '0') {
                obj.relations.push({ username: subjname, comment, relation });
            }
        }
    },
}