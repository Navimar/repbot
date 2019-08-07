const user = require('./user.js');

module.exports = {
    start: () => {
        // send();
    },
    trust: (objname, subjname, comment) => {
        let obj = user.byUsername(objname);
        if (!obj) {
            obj = user.add(objname);
        }
        let subj = user.byUsername(subjname);
        if (!subj) {
            subj = user.add(subjname);
        }
        obj.trust.push({ obj: subj, comment});
    },
    distrust: (obj, subj) => {

    },
    neutral: (obj, subj) => {
    },
}