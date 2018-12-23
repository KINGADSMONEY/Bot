var Discord = require('discord.js')
module.exports.run = async (client,message,args)=>{
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Desculpe, você não tem permissão para isto')
    let sayMessage = args.join(" ");
    var anuncio = new Discord.RichEmbed()
        .setAuthor("Anúncio", "https://media.discordapp.net/attachments/509052537177899014/510877389023346718/416793772672679939.gif")
        .setDescription(`${sayMessage} \n \n \n`)
        .setTimestamp()
        .setColor("ff0000")
        .setFooter(` Por `, message.author.avatarURL)
    message.guild.members.map(membro=>{ membro.send(anuncio)})
}

module.exports.help = {
    name: "anunciopv"
}