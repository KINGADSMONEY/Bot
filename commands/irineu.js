const Discord = require('discord.js');


exports.run = (client, message, args) => {   

let say = args.join(" ")

const embed = new Discord.RichEmbed()

.setAuthor("**Irineu, você não sabe nem eu.....**",)
.setColor("#a32aff")
.setThumbnail("")
.setImage("https://i.ytimg.com/vi/Hebw7Mw_WAg/maxresdefault.jpg")

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "irineu",
    aliases: ["irineu"]
}