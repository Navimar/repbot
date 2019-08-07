let users = new Map;
module.exports = {
    byUsername: (username) => {
        return users.get(username);
    },
    add: (username) => {
        let obj = {
            username,
            trust: [],
            distrust: [],
        }
        users.set(username, obj)
        return obj;
    }
}
