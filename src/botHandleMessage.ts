import { Context } from "telegraf";
import { ExtraEditMessageText, ExtraReplyMessage } from "telegraf/typings/telegram-types";
import { Message } from "typegram";
import reply from "./reply";
import ChoiseExtraReplyMessage from "./youtube/ChoiseExtraReplyMessage";

const YOUTUBE_REGEX = /(?:youtube|youtu.be)+(?:.*?)(?:^|\/|v=)([a-z0-9_-]{11})(?:.*)?/i

const botHandleMessage = (ctx: Context) => {
    if (ctx.chat && ctx.chat.type !== "private") return;

    const message = ctx.message as Message.TextMessage;
    const text = message.text
    const messageID = message.message_id;

    if (YOUTUBE_REGEX.exec(text)?.[1] ?? "") {
        const extra: ExtraReplyMessage & ExtraEditMessageText = ChoiseExtraReplyMessage;

        ctx.replyWithHTML(reply.formatChoise(), {
            ...extra,
            reply_to_message_id: messageID
        })

        return;
    }

    ctx.replyWithHTML(reply.unsupported())
}

export default botHandleMessage;