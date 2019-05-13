const Discord = require('discord.js');


exports.run = (client, message, args) => {   

let say = args.join(" ")

const embed = new Discord.RichEmbed()

.setAuthor("**OLOKINHO MEOHHHHH.....**",)
.setColor("#a32aff")
.setThumbnail("")
.setImage("https://pbs.twimg.com/media/D4HxrNgXsAApcJi.jpg:large")

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "olokinhomeu",
    aliases: ["olokinhomeu"]
}