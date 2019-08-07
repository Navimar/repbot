const bot = require('./bot');
const handle = require('./handle');


module.exports = {
    init: () => {

        bot.on('text', (ctx) => {
            handle.text(ctx, ctx.message.text);
            // return ctx.reply(ctx.message.text);
        })
        // bot.start((ctx) => ctx.reply('Welcome!'))
        // bot.help((ctx) => ctx.reply('Send me a sticker'))
        // bot.on('sticker', (ctx) => ctx.reply('👍'))
        // bot.hears('hi', (ctx) => ctx.reply('Hey there'))
        bot.launch();

    }
}