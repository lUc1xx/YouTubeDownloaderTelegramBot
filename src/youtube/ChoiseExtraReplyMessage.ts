import { ExtraEditMessageText, ExtraReplyMessage } from "telegraf/typings/telegram-types";
import { YoutubeActions } from "../types/botActions";
import { Markup } from "telegraf";

const ChoiseExtraReplyMessage: ExtraReplyMessage & ExtraEditMessageText = {
    reply_markup: Markup.inlineKeyboard([
        [Markup.button.callback(YoutubeActions.audio, YoutubeActions.audio)],
        [Markup.button.callback(YoutubeActions.video, YoutubeActions.video)],
        [Markup.button.callback(YoutubeActions.videoAndAudio, YoutubeActions.videoAndAudio)],
    ]).reply_markup,
}

export default ChoiseExtraReplyMessage;