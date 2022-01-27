// const send = require('./send');
// const event = require('./event');
const find = require('./find');
const user = require('./user');

module.exports = {
  text: (msg) => {
    // console.log(msg)
    let txt = msg.text.trim();
    let send = [];
    event = [];
    let id = msg.from.id;
    // console.log('txt0 '+txt[0]);
    if (['0', '+', '-'].includes(txt[0])) {
      txt = txt[0] + ' ' + txt.substr(1);
    }
    let words = txt.split(' ');
    words = words.filter(Boolean);
    let relation = words[0];
    let username = words[1];
    words.splice(0, 2);
    let comment = words.join(' ');
    if (!comment) {
      comment = "без комментариев";
    }
    if (!msg.from.username || msg.from.username == '') {
      send.push({ id: msg.from.id, text: 'Установите username, чтобы пользоваться ботом' });
    }
    else
      switch (relation) {
        case '/start':
          event.push({ name: 'start', arg: [msg.from.username.toLowerCase(), msg.from.id] });
          send.push({ id: msg.from.id, text: 'Здравствуйте, Сеть Доверия позволяет проверить пользователя телеграм и определить его репутацию среди тех, кому вы доверяете. Чтобы получить инфомрацию об аккаунтах сначала добавьте всех, кому вы доверяете, для этого используйте команду\n+ @username комментарий в свободной форме о причинах доверия и степени доверия\nесли вы хотите предупредить о том что пользователю доверять нельзя используйте команду\n- @username комментарий в свободной форме о причинах и степени недоверия\nУчтите, что при проверке репутации учитывается мнение только тех людей кому Вы доверяете и тех кому доверяют они, по цепочке. Такая система полностью исключает возможность накрутки как с нашей стороны, так и со стороны третьих лиц, ботоводов и накрутчиков. Поэтому Сеть Доверия позволяет получить максимально точную информацию. Для полного Списка команд и более подброного описания используйте команду /help. Задать вопросы и обсудить работу бота можно в группе @trustnetchat.' });
          break;
        case '/help':
          send.push({ id: msg.from.id, text: 'Чтобы обозначить доверие аккаунту наберите "+", затем его юзернейм и комментарий в свободной форме, например\n+ @username неоднакратно отправлял господину Смакову предоплату, товар всегда получал в срок в полном объеме, соотвествующего качества\nЕсли же Вы хотите предупретить тех, кто вам доверяет о том, что определенному аккаунту нельзя доверять, то наберите "-", затем его юзернейм и затем комментарий в свободной форме, например\n- @username затянул работу на 3 месяца, средства не вернул, работу толком так и не выполнил\nДля проверки репутации пользователя просто наберите его юзернейм, @username\nПри возникновении вопросов пишите в нашу группу @trustnetchat' });
          break;
        case '+':
          if (username) {
            if (msg.from.username.toLowerCase() == username.slice(1).toLowerCase()) {
              send.push({ id: msg.from.id, text: "Место для смешной шутки про самолюбие" });
            } else {
              if (username[0] == '@' && username.length > 5) {
                event.push({ name: 'relation', arg: [msg.from.username.toLowerCase(), username.slice(1).toLowerCase(), comment, '+'] })
                send.push({ id: msg.from.id, text: 'Теперь Вы доверяете ' + username + ' с комментарием "' + comment + '"' });
                send.push({
                  id: user.byUsername(username).id, text: "Вам доверяет " + id + ' с комментарием "' + comment + '"'
                });
              } else {
                send.push({
                  id: msg.from.id, text: "Некорректный юзернейм"
                });
              }
            }
          } else {
            send.push({ id: msg.from.id, text: 'Необходимо указать юзернейм' });
          }
          break;
        case '-':
          if (username) {
            if (msg.from.username.toLowerCase() == username.slice(1).toLowerCase()) {
              send.push({
                id: msg.from.id, text: "Не будьте так самокритичны, мы уверены, все будет хорошо"
              });
            } else {
              if (username[0] == '@' && username.length > 5) {
                event.push({
                  name: 'relation', arg: [msg.from.username.toLowerCase(), username.slice(1).toLowerCase(), comment, '-']
                });
                send.push({
                  id: msg.from.id, text: "Теперь Вы НЕ доверяете " + username + ' с комментарием "' + comment + '"'
                });
                send.push({
                  id: user.byUsername(username).id, text: "Вам НЕ доверяет " + id + ' с комментарием "' + comment + '"'
                });
              } else {
                send.push({
                  id: msg.from.id, text: "Некорректный юзернейм"
                });
              }
            }
          } else {
            send.push({
              id: msg.from.id, text: 'Необходимо указать юзерней'
            });
          }
          break;
        case '0':
          if (username) {
            if (username[0] == '@' && username.length > 5) {
              event.push({ name: 'relation', arg: [msg.from.username.toLowerCase(), username.slice(1).toLowerCase(), false, '0'] })
              send.push({
                id: msg.from.id, text: "Теперь Вы нейтрально относитесь к " + username
              });
              send.push({
                id: user.byUsername(username).id, text: "К Вам нейтрален " + id
              });
            } else {
              send.push({
                id: msg.from.id, text: "некорректный юзернейм"
              });
            }
          } else {
            send.push({
              id: msg.from.id, text: 'Необходимо указать юзерней'
            });
          }
          break;
        default:
          if (relation[0] == '@' && relation.length > 5) {
            let answer = find.findPath(msg.from.username.toLowerCase(), relation.slice(1).toLowerCase());
            // let answer = find.f(ctx.from.username, relation.slice(1));

            if (answer == 'self') {
              send.push({ id: msg.from.id, text: '@' + msg.from.username.toLowerCase() + ' можно доверять как себе' });
            } else if (answer && answer.length > 0) {
              let text = '';
              text += '@' + answer[0].username;
              // console.log(answer[0])
              if (answer[0].relation == '+') {
                text += " можно доверять"
              } else {
                text += " НЕЛЬЗЯ доверять!"
              }
              for (let a in answer) {
                text += '\n';
                a = parseInt(a);
                if (a == answer.length - 1) {
                  text += '@' + answer[a].username + " <= Вы"
                } else {
                  text += '@' + answer[a].username + " <= @" + answer[a + 1].username;
                }
                text += '\n';
                text += answer[a].comment;
              }
              send.push({
                id: msg.from.id, text
              });
            } else {
              send.push({
                id: msg.from.id, text: "Для построения цепочки доверия необходимо добавить больше пользователей, которым вы доверяете.\nЧтобы реже видеть эту ошибку, обозначьте свое доверие ко всем, кому вы доверяете командой\n+ @username\nи попросите их указать, кому доверяют они."
              });
            }
          } else {
            send.push({
              id: msg.from.id, text: "некорректный юзернейм"
            });
          }
          break;
      }
    return { send, event };
  }
}