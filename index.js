const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

function changing_status() {
    let status = [`Anúncios com +anuncio | ${bot.guilds.size} servidores`]
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
      if(comando === 'reiniciar') {
        if (message.author.id !== '430093309617111063') return;
    
        resetBot(message.channel)
        async function resetBot(channel) {
            let token = bot.token;
            await message.react(':white_check_mark:')
                .then(message => bot.destroy())
                .then(message => bot.destroy())
                .then(() => bot.login(token));
            message.channel.send('Bot reiniciado com sucesso!')
        }
    }

  })
bot.login(config.token);