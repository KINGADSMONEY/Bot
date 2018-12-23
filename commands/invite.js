const Discord = require('discord.js');


exports.run = (client, message, args) => {

const embed = new Discord.RichEmbed()

.setAuthor("Invite - LINK","https://media.discordapp.net/attachments/509052537177899014/510877389023346718/416793772672679939.gif")
.setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
.setTimestamp()
.setColor("#a32aff")
.setThumbnail("")
.setDescription(` Meu link para me convidar para seu servidor : https://discordapp.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D526441939566985222%26scope%3Dbot%26permissions%3D8`)

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "invite",
    aliases: ["invite"]
}