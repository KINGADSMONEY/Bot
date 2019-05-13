const Discord = require('discord.js');


exports.run = (client, message, args) => {

    if(!args[0]){
        message.channel.send(new Discord.RichEmbed()
        .setDescription("**Marque quem você quer banir, membrinho...**")
        .setColor("#a32aff"))
        }
            let volte = args[0];
            if (!volte) return;
   

let say = args.join(" ")

const embed = new Discord.RichEmbed()

.setAuthor("✉ Banido !",)
.setColor("#a32aff")
.setThumbnail("")
.setDescription(`**Olha o batatudo ${message.author.tag} tentou banir o chefe, cabeça de caixa d'agua mesmo seu merda.**`)

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "banir",
    aliases: ["banir"]
}