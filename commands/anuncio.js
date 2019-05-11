const Discord = require('discord.js');


exports.run = (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(new Discord.RichEmbed()
    .setColor("#a32aff")
    .setTimestamp()
    .setDescription(" | Você não tem permissão para executar este comando.")).then(m => m.delete(5000))

    if(!args[0]){
        message.channel.send(new Discord.RichEmbed()
        .setDescription("**Comando:** b!anuncio")
        .setColor("#a32aff")
        .setImage("")
        .setThumbnail("")
        .addField("Uso:", "\`\`b!anuncio <mensagem>\`\`")
        .addField("Exemplo:", "`\`b!anuncio oie <3`\`")
        .addField("Alternativas:", "\`\`b!anunciar\`\`"))
        }
            let volte = args[0];
            if (!volte) return;
   

let say = args.join(" ")

const embed = new Discord.RichEmbed()

.setAuthor("Aviso","https://media.discordapp.net/attachments/509052537177899014/510877389023346718/416793772672679939.gif")
.setFooter(`Por ${message.author.tag}`, message.author.avatarURL)
.setTimestamp()
.setColor("#a32aff")
.setThumbnail("")
.setDescription(`ㅤㅤ${say}`)

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "anunciar",
    aliases: ["anunciar", "anuncio"]
}