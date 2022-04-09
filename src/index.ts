import { Telegraf } from "telegraf";
import setup from "./setup";
import botActions from "./botActions";
import botCommands from "./botCommands";
import botHandleMessage from "./botHandleMessage";


!(async () => {
    const { BOT_TOKEN } = await setup()
    const bot = new Telegraf(BOT_TOKEN)

    botCommands(bot);
    botActions(bot);

    bot.on('text', async (ctx) => {
        botHandleMessage(ctx);
    })

    await bot.launch()

    console.log("bot started")
})();