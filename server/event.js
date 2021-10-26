const exe = require('./exe');

module.exports = {
    lunch: () => {
        exe.lunch();
    },
    start: (user) => {
        exe.start(user);
        return ({
            event: 'start',
            user,
        });

    },
    relation: (obj, subj, comment, relation) => {
        exe.relation(obj, subj, comment, relation);
        return ({
            event: 'relation',
            obj, subj, comment, relation
        });
    },
}