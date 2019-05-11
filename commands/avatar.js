const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: false});

module.exports.run = async (bot, message, args) => {

    let usuario = message.guild.member(message.mentions.users.first());// || message.guild.members.get(args[0]));
    //if(!usuario) return errors.cantfindUser(message.channel);

    let semnada = new Discord.RichEmbed()
    .setDescription(`Clique [aqui](${message.author.avatarURL}) para pegar o link da foto.`)
    .setAuthor(`🖌️ Imagem de perfil`)//Clique [aqui](${usuario.user.avatarURL}) para pegar o link da foto.`)
    .setColor("#bc0000")
    .setImage(message.author.avatarURL)
    .setTimestamp()
     .setFooter(" BarthBOT - Todos os direitos reservados", bot.user.avatarURL)
    
    if(!usuario)
    return message.channel.send(semnada)

    let msg = new Discord.RichEmbed()
    .setDescription(`Clique [aqui](${usuario.user.avatarURL}) para pegar o link da foto.`)
    .setAuthor(`🖌️ Imagem de perfil`)//Clique [aqui](${usuario.user.avatarURL}) para pegar o link da foto.`)
    .setColor("#bc0000")
    .setImage(usuario.user.avatarURL)
    .setTimestamp()
     .setFooter(" BarthBOT - Todos os direitos reservados", message.author.avatarURL)
    
    message.channel.send(msg);
}

module.exports.help = {
    name: "avatar"
  }