const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let bicon = bot.user.displayAvatarURL;
    let string = '';
    bot.guilds.forEach(guild => {
    string += guild.name + '\n';})
    let bt = bot.user.username;
    let botembed = new Discord.RichEmbed()
        .setColor("#8B0000")
        .addField("Servidores 🌟:", string)
        .setTimestamp()
        .setFooter("Comando Requisitado por: " + message.author.username, message.author.avatarURL);
    message.channel.send(botembed);
}
module.exports.help = {
    name: "servidores"
}    