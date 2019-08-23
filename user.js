let users = new Map;

let user =
    {
        add: (username) => {
            let obj = {
                username,
                relations: [],
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
    }
module.exports = user;