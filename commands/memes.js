const Discord = require('discord.js');


exports.run = (client, message, args) => {

let say = args.join(" ")

const embed = new Discord.RichEmbed()

.setAuthor("Memes Disponiveis =D",)
.setColor("#a32aff")
.setThumbnail("")
.setDescription(`**s!irineu\ns!porra\ns!ebixa\ns!tonemai\ns!avaememo\ns!fodase\ns!naosabia\ns!olokinhomeu\ns!marreta\ns!espertinho\n**`)

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "banir",
    aliases: ["banir"]
}