const dc = require('discord.js')
const moment = require("moment")
require("moment")

module.exports.run = async(bot, message, args) => {
let owner = 'Seu Discord'
let botinfo = new dc.RichEmbed()
.setAuthor('Informações abaixo')
.setColor('9537')
.setTitle(`Olá, sou o Knucks um bot criado por Sneck para te ajudar em seu servidor`)
.addField('🌐 Servidores', `\`\`\`\js\n${bot.guilds.size}\`\`\``, true)
.addField('👪 Usuários', `\`\`\`\js\n${bot.users.size}\`\`\``, true)
.addField(': Ping', `\`\`\`\js\n${Math.round(bot.ping)} ms\`\`\``, true)
.addField(':fire: Memória Usada', `\`\`\`\js\n ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb\`\`\``, true)
.addField('💻 Livraria', `\`\`\`\js\nJavaScript - Discord.js\`\`\``, true)
.addField('⚒ Convites', `\`\`\`\js\nk!invite\`\`\``, true)


message.channel.send(botinfo)
}