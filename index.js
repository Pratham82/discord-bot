require('dotenv').config()
// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js')

// Create a new client instance
const bot = new Client({ intents: [Intents.FLAGS.GUILDS] })
const prefix = '!'

// When the client is ready, run this code (only once)
bot.once('ready', () => {
  console.log('Ready!')
})

bot.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return
  if (message.content === 'hi') {
    message.reply(`hello 😄 ${message.author.username}`)
  }
  if (message.content.startsWith(prefix)) {
    const [cmd, ...args] = message.content.slice(1).trim().split(/\s+/)
    console.log(cmd, args)
    if (cmd === 'kick') {
      // perform kick
    }
  }
})

bot.login(process.env.DISCORD_BOT_TOKEN)
