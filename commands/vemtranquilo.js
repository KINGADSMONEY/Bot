const Discord = require('discord.js');


exports.run = (client, message, args) => {   

let say = args.join(" ")

const embed = new Discord.RichEmbed()

.setAuthor("**Vem, vem, vem tranquilo.......**",)
.setColor("#a32aff")
.setThumbnail("")
.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZE7k9e_oFKT0nRpIJqezLg1z7Nh6l-Sn2KLMXk-QZFbtGtyH")

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "vemtranquilo",
    aliases: ["vemtranquilo"]
}