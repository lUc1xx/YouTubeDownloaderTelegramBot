import { Telegraf } from "telegraf"
import reply from "./reply"

const commands = {
    start: {
        value: "start",
        description: "welcome message"
    }
}

const botCommands = (bot: Telegraf) => {

    bot.use(async (ctx, next) => {
        if (ctx.from?.is_bot) return
        next()
    })

    bot.command(commands.start.value, ctx => {
        const name = `@${ctx.from?.username} - ${ctx.from?.first_name}`
        ctx.replyWithHTML(reply.start(name))
    })

    bot.telegram.setMyCommands([
        { command: commands.start.value, description: commands.start.description }
    ])

}

export default botCommands;