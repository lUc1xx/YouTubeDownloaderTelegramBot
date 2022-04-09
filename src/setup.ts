

export default async () => {

    const BOT_TOKEN = process.env.BOT_TOKEN

    if (!BOT_TOKEN) {
        console.log("BOT_TOKEN required, include BOT_TOKEN in the .env file.")
        return process.exit(1)
    }

    return { BOT_TOKEN }
}