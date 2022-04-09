import { Context, Telegraf } from "telegraf";
import ytdl, { getInfo, videoInfo } from "ytdl-core";
import reply from "../reply";
import { YoutubeActions } from "../types/botActions";
import { CallbackQuery, Message } from "typegram";

const ActionHandler = (action: YoutubeActions, bot: Telegraf) => async (ctx: Context) => {

    const downloadingMessage = await ctx.reply(reply.downloading())
    const deleteDownloadingMessage = () => bot.telegram.deleteMessage(downloadingMessage.chat.id, downloadingMessage.message_id);

    const callbackQueryMessage = (ctx.callbackQuery as CallbackQuery).message as Message.TextMessage;
    const callbackQueryReplyToMessage = callbackQueryMessage.reply_to_message as Message.TextMessage;

    const URL = callbackQueryReplyToMessage.text;

    const videoInfo: videoInfo = await getInfo(URL);

    const replyWithAudio = async () => {
        const audio = ytdl(URL, { filter: 'audioonly' });

        await ctx.replyWithAudio({ source: audio }, {
            caption: videoInfo.videoDetails.title,
        })
            .catch(() => ctx.reply(reply.maxSizeError()))
    }

    const replyWithVideo = async () => {
        const video = ytdl(URL)

        await ctx.replyWithVideo({ source: video }, {
            caption: videoInfo.videoDetails.title,
            supports_streaming: true,
        })
            .catch(() => ctx.reply(reply.maxSizeError()))
    }

    if (action === YoutubeActions.audio) {
        replyWithAudio()
            .then(deleteDownloadingMessage)
    }

    if (action === YoutubeActions.video) {
        replyWithVideo()
            .then(deleteDownloadingMessage)
    }

    if (action === YoutubeActions.videoAndAudio) {
        replyWithAudio();
        replyWithVideo()
            .then(deleteDownloadingMessage)
    }

    bot.telegram.deleteMessage(callbackQueryMessage.chat.id, callbackQueryMessage.message_id)

}

export default ActionHandler;