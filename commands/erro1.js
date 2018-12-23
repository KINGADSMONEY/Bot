const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Como usar para reportar um membros \n user: `HF!report @usUario prova`");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .addField("Usuário Reportado", `${rUser} ID: ${rUser.id}`)
    .addField("Reportado por", `${message.author} ID: ${message.author.id}`)
    .addField("Canal", message.channel)
    .addField("Razão", rreason);

     let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Não foi possível encontrar o canal de reports.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
}
