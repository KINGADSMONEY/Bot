const { version } = require("discord.js");
const Discord = require("discord.js")

module.exports.run = (client, message, args, level) => {
    if (!message.content.startsWith(setting.prefixo)) return;
  const duration = moment.duration(client.uptime).format(" D [d], H [h], m [m], s [s]");
let statusembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setColor([54, 57, 63])
  .setTitle(`<:Database:497894225262804992> | Minhas informaçoes.!`)
  .setDescription(`Aqui estão as minhas informações de funcionamento, ${message.author}! Sinta-se a vontade para conferir como eu estou.\n

**<:rammemory:503010831869673482>| Utilização de RAM  :** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
──────────────────────────────────────
**<:alarmclock:503010831609495552>| Uptime     : ${duration}**
──────────────────────────────────────
**<:user:503010832242966528>| Usuários      : ${client.users.size.toLocaleString()}**
──────────────────────────────────────
**<:discord:503010831793913876>| Servidores    : ${client.guilds.size.toLocaleString()}**
──────────────────────────────────────
**<:channel:503010831571615764>| Canais   : ${client.channels.size.toLocaleString()}**
──────────────────────────────────────
**<:nodejs:497894338903146503>| Node      :  ${process.version}**
──────────────────────────────────────`, {code: "asciidoc"})

message.channel.send(statusembed).then(msg => msg.delete(30000));
}
module.exports.help = {
  name: "status"

}