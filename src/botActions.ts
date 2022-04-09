import { Telegraf } from "telegraf"
import { YoutubeActions } from "./types/botActions"
import ActionHandler from "./youtube/ActionHandler"

const botActions = (bot: Telegraf) => {

    // youtube
    bot.action(YoutubeActions.audio, ActionHandler(YoutubeActions.audio, bot))
    bot.action(YoutubeActions.video, ActionHandler(YoutubeActions.video, bot))
    bot.action(YoutubeActions.videoAndAudio, ActionHandler(YoutubeActions.videoAndAudio, bot))
}

export default botActions;