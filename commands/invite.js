const Discord = require('discord.js');


exports.run = (client, message, args) => {

const embed = new Discord.RichEmbed()

.setAuthor("Invite - LINK","https://media.discordapp.net/attachments/509052537177899014/510877389023346718/416793772672679939.gif")
.setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
.setTimestamp()
.setColor("#a32aff")
.setThumbnail("")
.setDescription(` Meu link para me convidar para seu servidor : https://discordapp.com/oauth2/authorize?client_id=526448524624396318&scope=bot&permissions=8`)

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "invite",
    aliases: ["invite"]
}