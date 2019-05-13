const Discord = require('discord.js');


exports.run = (client, message, args) => {   

let say = args.join(" ")

const embed = new Discord.RichEmbed()

.setAuthor("**A va e memo????**",)
.setColor("#a32aff")
.setThumbnail("")
.setImage("http://m.memegen.com/jn5dg9.jpg")

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "avaememo",
    aliases: ["avaememo"]
}