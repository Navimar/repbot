const exe = require('./exe');

module.exports = (scribe) => {
    switch (scribe.val.event) {
        case 'start':
            exe.start(scribe.val.user);
            break;
        case 'relation':
            exe.relation(scribe.val.obj, scribe.val.subj, scribe.val.comment, scribe.val.relation);
            break;
        default:
            console.log("read.js => unknown scribe");
            console.log(scribe);
            throw ('unknown scribe');
    }
};