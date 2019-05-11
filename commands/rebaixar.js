const Discord = require('discord.js');


exports.run = (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(new Discord.RichEmbed()
    .setColor("#a32aff")
    .setTimestamp()
    .setDescription(" | Você não tem permissão para promover alguém!")).then(m => m.delete(5000))

    if(!args[0]){
        message.channel.send(new Discord.RichEmbed()
        .setDescription("**Marque quem você quer rebaixar!**")
        .setColor("#a32aff"))
        }
            let volte = args[0];
            if (!volte) return;
   

let say = args.join(" ")

const embed = new Discord.RichEmbed()

.setAuthor("✉ News",)
.setColor("#a32aff")
.setThumbnail("")
.setDescription(`**${say} foi rebaixado da equipe pelo ${message.author.tag}**`)

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "rebaixar",
    aliases: ["rebaixar", "rebaixar"]
}