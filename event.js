const fs = require('fs');
const exe = require('./exe');

module.exports = {
    lunch:()=>{
        exe.lunch();
    },
    start: (user) => {
        exe.start(user);
        saveEvent({
            event: 'start',
            user,
        });
        // send();
    },
    trust: (obj, subj, comment) => {
        exe.trust(obj, subj, comment);
        saveEvent({
            event: 'trust',
            obj, subj, comment
        });
    },
    distrust: (obj, subj, comment) => {
        exe.distrust(obj, subj, comment);
        saveEvent({
            event: 'distrust',
            obj, subj
        });
    },
    neutral: (obj, subj) => {
        exe.neutral(obj, subj);
        saveEvent({
            event: 'neutral',
            obj, subj
        });
    },
}

function saveEvent(val) {
    const data = {
        val,
        date: Date.now()
    };
    // console.log(data);
    fs.appendFile('./data.txt', JSON.stringify(data) + "\n", function (err) {
        if (err !== null) {
            console.log(err);
            throw 'log writing error';
        }
    });
}