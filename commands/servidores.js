const Discord = require('discord.js');


exports.run = (client, message, args) => {

const embed = new Discord.RichEmbed()

.setAuthor("POPULARIDADE","https://media.discordapp.net/attachments/509052537177899014/510877389023346718/416793772672679939.gif")
.setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
.setTimestamp()
.setColor("#a32aff")
.setThumbnail("")
.setDescription(`Atualmente estou em ${client.guilds.size} servidores, todo dia crescendo!!`)

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "servidores",
    aliases: ["servidores"]
}