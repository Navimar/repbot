const send = require('./send');
const event = require('./event');
const find = require('./find');

module.exports = {
    text: (ctx, txt) => {
        const words = txt.split(' ');
        let relation = words[0];
        let username = words[1];
        words.splice(0, 2);
        let comment = words.join(' ');
        if (!comment) {
            comment = "без комментариев";
        }
        switch (relation) {
            case '+':
                if (username) {
                    if (username[0] == '@' && username.length > 5) {
                        event.trust(ctx.from.username, username.slice(1), comment)
                        send(ctx, 'теперь Вы доверяете ' + username + ' с комментарием "' + comment + '"');
                    } else {
                        send(ctx, "некорректный юзернейм");
                    }
                } else {
                    send(ctx, 'need to target user');
                }
                break;
            case '-':
                if (username) {
                    if (username[0] == '@' && username.length > 5) {
                        event.distrust(ctx.from.username, username, comment)
                        send(ctx, "теперь Вы НЕ доверяете " + username + " с комментарием " + comment);
                    } else {
                        send(ctx, "некорректный юзернейм");
                    }
                } else {
                    send(ctx, 'need to target user');
                }
                break;
            case '0':
                if (username) {
                    ji
                    if (username[0] == '@' && username.length > 5) {
                        event.neutral(ctx.from.username, username)
                        send(ctx, "теперь Вы нейтрально относитесь к " + username);
                    } else {
                        send(ctx, "некорректный юзернейм");
                    }
                } else {
                    send(ctx, 'need to target user');
                }
                break;
            default:
                if (relation[0] == '@' && relation.length > 5) {
                    let answer = find.findPath(ctx.from.username, relation.slice(1));
                    send(ctx, "ПРОВЕРКА " + ctx.from.username+" "+ relation.slice(1));
                    answer.forEach(e => {
                        send(ctx, 'хоп');
                        send(ctx, e);
                    });
                } else {
                    send(ctx, "некорректный юзернейм");
                }
                break;

        }

    }
}