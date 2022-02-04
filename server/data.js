const exe = require('./exe');

module.exports = (scribe) => {
    switch (scribe.val.event) {
        case 'start':
            exe.start(scribe.val.user, scribe.val.id);
            break;
        case 'relation':
            exe.relation(scribe.val.obj.toLowerCase(), scribe.val.subj.toLowerCase(), scribe.val.comment, scribe.val.relation);
            break;
        default:
            console.log("read.js => unknown scribe");
            console.log(scribe);
            throw ('unknown scribe');
    }
};