const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: Você não tem permissão.");
  if(!args[0]) return message.channel.send(":x: Você deve especificar o número de mensagens a serem excluídas.");
  if(args >= 100) return message.channel.send("Você não pode excluir mais de 100 mensagens de cada vez.")
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`:pencil2: **${args[0]}** mensagens apagadas.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}