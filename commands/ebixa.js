const Discord = require('discord.js');


exports.run = (client, message, args) => {   

let say = args.join(" ")

const embed = new Discord.RichEmbed()

.setAuthor("**Ih, e bixa rsrs.....**",)
.setColor("#a32aff")
.setThumbnail("")
.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcwk6SvCgZw3ZdCTpNzWCU3k7KwTbpcqxWJqSgH47oEY_9BST_")

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "ebixa",
    aliases: ["ebixa"]
}