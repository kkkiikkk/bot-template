// Core
import TelegramBot from 'node-telegram-bot-api'
import { Logger } from 'custom-logger-nodejs'

class Bot {

    token = null

    #bot = null

    #logger = new Logger()

    constructor(token) {
        this.token = token
    }

    init() {
        this.#bot = new TelegramBot(this.token, { polling: true })
    }

    executeHandlers(handlers) {
        try {
            for (const handler of handlers) {
                if (handler.event !== 'sendMessage') {
                    this.#bot[handler.event](handler.firstParam, async (msg) => await handler.executableFunction(msg, this.#bot))
                    this.#logger.info(`${handler.event}: ${handler.firstParam} registred`)
                    continue;
                }
                this.#bot[handler.event](handler.firstParam, handler.executableFunction)
            }
        }
        catch (err) {
            this.#logger.error('[ERROR]', err)
        }
    }

}

export { Bot }