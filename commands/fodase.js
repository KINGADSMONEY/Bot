const Discord = require('discord.js');


exports.run = (client, message, args) => {   

let say = args.join(" ")

const embed = new Discord.RichEmbed()

.setAuthor("**Foda-se.....**",)
.setColor("#a32aff")
.setThumbnail("")
.setImage("https://gartic.com.br/imgs/mural/wa/waly00/fds.png")

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "fodase",
    aliases: ["fodase"]
}