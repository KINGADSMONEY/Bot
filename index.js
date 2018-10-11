const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

function changing_status() {
    let status = [`Anúncios com +anuncio,+anunciopv | ${bot.guilds.size} servidores`]
    let random = status[Math.floor(Math.random() * status.length)]
    bot.user.setActivity(random)
  }
  
  bot.on("ready", () => {
    console.log( `${bot.user.username} Online` );
    setInterval(changing_status, 9000);
  })

  bot.on('message', async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(!message.content.startsWith(config.prefix)) return;


    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

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

      if(comando === `help`) {
        let anuncio = new Discord.RichEmbed()
        .setColor("#FFFF00")
        .setTitle("📢 Ajuda 📢")
        .addField("")
        .setTimestamp()
        .setFooter(`Executor do comando ${message.author.username}`)
        .setThumbnail(bot.user.displayAvatarURL)
        message.channel.send(anuncio);
      }

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

    if(comando  === 'status'){
      if (message.author.id !== '430093309617111063') return;
      let stats = args.join(" ");
      if(!stats) return message.channel.send("O que quer que eu jogue?");
      bot.user.setActivity(stats, {type: "PLAYING"});
      message.channel.send(`Agora estou jogando ${stats}`)
     }

     if(comando === `help`) {
     exports.run = (client,message,args)=>{
     var embed = new discord.RichEmbed()
     .setAuthor(message.author.username)
     .setColor('#FFFAFA');

 message.channel.send(embed)
}
  }

    try {
      let commandFile = require(`./comandos/${command}.js`);
      commandFile.run(bot, message, args);
    } catch (err) {
      console.error(err);
    }

  });
bot.login(config.token);