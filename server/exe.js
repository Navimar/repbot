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
        // console.log(objname, subjname, comment, relation)
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
    // clearrealtion: (objname, subjname) => {
    //     let obj = user.byUsername(objname);
    //     for (let r in obj.relations) {
    //         if (obj.relations[r].username == subjname) {
    //             obj.relations.splice(r, 1);
    //         }
    //     }
    // },
}