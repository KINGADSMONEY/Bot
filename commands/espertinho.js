const Discord = require('discord.js');


exports.run = (client, message, args) => {   

let say = args.join(" ")

const embed = new Discord.RichEmbed()

.setAuthor("**Aaah, espertinho.....**",)
.setColor("#a32aff")
.setThumbnail("")
.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBffVJSDdQSA0rmN-IvumqL0Q1D8io3_0VLn9tPXb3W12JfFZw")

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "espertinho",
    aliases: ["espertinho"]
}