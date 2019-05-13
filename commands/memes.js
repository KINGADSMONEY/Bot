const Discord = require('discord.js');


exports.run = (client, message, args) => {

let say = args.join(" ")

const embed = new Discord.RichEmbed()

.setAuthor("Memes Disponiveis =D",)
.setColor("#a32aff")
.setThumbnail("")
.setDescription(`**s!naosei\n**b!irineu\nb!porra\nb!ebixa\nb!tonemai\nb!avaememo\nb!fodase\nb!naosabia\nb!olokinhomeu\nb!marreta\nb!espertinho\n**`)

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "banir",
    aliases: ["banir"]
}