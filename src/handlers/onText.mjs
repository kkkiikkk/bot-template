export default [
    {
        firstParam: /^\/hey/,
        event: 'onText',
        executableFunction: async (msg, bot) => {
            const chatId = msg.chat.id

            await bot.sendMessage(chatId, 'hey bro !')
        }
    }
]