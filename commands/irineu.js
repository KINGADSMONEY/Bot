const Discord = require('discord.js');


exports.run = (client, message, args) => {   

let say = args.join(" ")

const embed = new Discord.RichEmbed()

.setAuthor("**Irineul, você e burro pqp.......**",)
.setColor("#a32aff")
.setThumbnail("")
.setImage("https://images-ext-1.discordapp.net/external/oqLoGveBhzhkzHmMnqo4wJJ7H-_7Z0PKecObmCuR35I/https/i.ytimg.com/vi/Hebw7Mw_WAg/maxresdefault.jpg?width=300&height=169")

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "irineu",
    aliases: ["irineu"]
}