let users = new Map;

let user =
{
    add: (username,id) => {
        let obj = {
            username,
            relations: [],
            id,
        }
        users.set(username, obj)
        return obj;
    },
    byUsername: (username) => {
        if (users.has(username)) {
            return users.get(username);
        } else {
            return user.add(username);
        }
    },
    clear: () => {
        users.clear();
    }
}
module.exports = user;