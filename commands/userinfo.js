const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let memberInfo = message.mentions.members.first();

  if(!memberInfo){
    var userinf = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setThumbnail(message.author.avatarURL)
        .setDescription("Esse usuario e um fantasma!")
        .setColor(0x00FF00)
        .addField("Nome de usuario completo:", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID:", message.author.id)
        .addField("Conta criada em:", message.author.createdAt)

        message.channel.send(userinf);

  }else{

    var userinfoo = new Discord.RichEmbed()
        .setAuthor(memberInfo.displayName)
        .setThumbnail(memberInfo.user.avatarURL)
        .setDescription("Esse usuario e um fantasma!")
        .setColor(0x00FF00)
        .addField("Nome de usuario completo:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`)
        .addField("ID:", memberInfo.id)
        .addField("Conta criada em:", memberInfo.user.createdAt)

        message.channel.send(userinfoo);
  }
}

module.exports.help = {
    name: "userinfo"
}