const fs = require('fs');
const exe = require('./exe');

module.exports = {
    lunch: () => {
        exe.lunch();
    },
    start: (user) => {
        exe.start(user);
        saveEvent({
            event: 'start',
            user,
        });

    },
    relation: (obj, subj, comment, relation) => {
        exe.relation(obj, subj, comment, relation);
        saveEvent({
            event: 'relation',
            obj, subj, comment, relation
        });
    },
}

function saveEvent(val) {
    const data = {
        val,
        date: Date.now()
    };
    fs.appendFile('data/data.txt', JSON.stringify(data) + "\n", function (err) {
        if (err !== null) {
            console.log(err);
            throw 'log writing error';
        }
    });
}