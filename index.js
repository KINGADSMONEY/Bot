const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

bot.on('ready', () => {
    console.log('Iniciado com sucesso')
    bot.user.setPresence({ game: { name: 'Em manutenção.', type: 3, url: 'https://www.twitch.tv/ladonegro'} });
})

bot.on('message', async message => {

    if(message.channel.id == "495662040300519475"){
      message.react(':sucesso:495590190950383626').then(r=>{
        message.react(':error:495662124517949440')
      })
      };
})

if(comando === `anunciopv`) {
    message.delete();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Desculpe, você não tem permissão para isto')
    const sayMessage = args.join(" ");
    let anuncio = new Discord.RichEmbed()
    .setColor("#FFFF00")
    .addField("📢 Anúncio 📢", `${sayMessage}`)
    .setTimestamp()
    .setFooter(`Anunciador: ${message.author.username} \n | Servidor: ${message.guild.name}`)
    .setThumbnail(bot.user.displayAvatarURL)
    message.guild.members.map(membro=>{ membro.send(anuncio)})
  }

  if(comando === `anuncio`) {
    message.delete();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Desculpe, você não tem permissão para isto')
    const sayMessage = args.join(" ");
    let anuncio = new Discord.RichEmbed()
    .setColor("#FFFF00")
    .addField("📢 Anúncio 📢", `${sayMessage}`)
    .setTimestamp()
    .setFooter(`Anunciador: ${message.author.username}`, message.author.displayAvatarURL)
    .setThumbnail(bot.user.displayAvatarURL)
    message.channel.send(anuncio);
  }

bot.login(config.token);