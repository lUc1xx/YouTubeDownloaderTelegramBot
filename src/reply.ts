
const bold = (s: string): string => `<b>${s}</b>`

const reply = {
    start: (name: string) =>
        `hello ${name} \n\njust send me a link to ${bold('youtube')} or ${bold('tiktok')} video and i will send you the video file \n\nalso you can choose between audio or video file`,

    unsupported: () => `some error, please try again`,

    formatChoise: () => `download this video as audio or video?`,

    downloading: () => 'Downloading in progress... Please wait. \n\nIt can take some time'
}

export default reply;