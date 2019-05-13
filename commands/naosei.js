const Discord = require('discord.js');


exports.run = (client, message, args) => {   

let say = args.join(" ")

const embed = new Discord.RichEmbed()

.setAuthor("**Eu não sei.......**",)
.setColor("#a32aff")
.setThumbnail("")
.setImage("https://www.bombounowa.com/wp-content/uploads/nao-sei.jpg")

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "naosei",
    aliases: ["naosei"]
}