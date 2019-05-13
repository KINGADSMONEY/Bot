const Discord = require('discord.js');


exports.run = (client, message, args) => {   

let say = args.join(" ")

const embed = new Discord.RichEmbed()

.setAuthor("**VÔ PEGAR MINHA MARREEEEETA....**",)
.setColor("#a32aff")
.setThumbnail("")
.setImage("https://i.ytimg.com/vi/5LrhmU7SJxY/maxresdefault.jpg")

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "marreta",
    aliases: ["marreta"]
}