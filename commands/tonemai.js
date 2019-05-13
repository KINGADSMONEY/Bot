const Discord = require('discord.js');


exports.run = (client, message, args) => {   

let say = args.join(" ")

const embed = new Discord.RichEmbed()

.setAuthor("**TO NEM AIIII.....**",)
.setColor("#a32aff")
.setThumbnail("")
.setImage("https://i.ytimg.com/vi/I1kduuFQsys/hqdefault.jpg")

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "tonemai",
    aliases: ["tonemai"]
}