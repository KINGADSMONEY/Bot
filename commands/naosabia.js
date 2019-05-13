const Discord = require('discord.js');


exports.run = (client, message, args) => {   

let say = args.join(" ")

const embed = new Discord.RichEmbed()

.setAuthor("**Poh, não sabia.....**",)
.setColor("#a32aff")
.setThumbnail("")
.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5zO_94fXDH7eRTW5y2ll5ShQfWAlEetByOByAN-1BUG-meFe")

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "naosabia",
    aliases: ["naosabia"]
}