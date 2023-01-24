// Config
import config from './config/index.mjs'

// Bot class
import { Bot } from './bot.mjs'

// Handlers
import onTextHandlers from './handlers/onText.mjs';

const tgBot = new Bot(config.TELEGRAM_TOKEN)

tgBot.init()

tgBot.executeHandlers([
    ...onTextHandlers
])
