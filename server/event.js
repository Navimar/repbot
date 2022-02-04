const exe = require('./exe');

module.exports = {
    lunch: () => {
        exe.lunch();
    },
    start: (user, id) => {
        exe.start(user, id);
        return ({
            event: 'start',
            user, id
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