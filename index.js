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
      if(comando === `ajuda`) {
        message.channel.send({embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Invite da Xion (Não Liberado)",
            url: "https://discord.gg/jqxd56",
            description: "Lista de Comandos da Xion",
            fields: [{
                name: "**(Prefix)ping**",
                value: "A Bot Mostrara o seu Ping Atual"
              },
              {
                name: "**(Prefix)say**",
                value: "Oque você escrever depois do say, a Almofada falará a mesma coisa!"
              },
              {
                name: "**(Prefix)clear**",
                value: "A Bot limpara as mensagens selecionadas, Apenas membros com a permisão Gerenciar Mensagens pode usar este comando"
              },
              {
                name: "**(Prefix)roleta**",
                value: "A Bot fara um sorteio assim mostrando se o membro perdeu ou ganhou Uso Especifiço para Eventos"
              },
              {
                  name: "**(Prefix)nick**",
                  value: "O Usuário mudara o nick/apelido do membro, presisa ter a permisão gerenciar apelidos para usar este comando!"
              },
              {
                  name: "**(Prefix)ban**",
                  value: "A Bot banira o usuário"
              },
              {
                  name: "**(Prefix)kick**",
                  value: "A Bot kickara o usuário"
              },
              {
                  name: "**(Prefix)sugest**",
                  value: "Mande a sua sugestão para a Xion, comandos etc!   "
              },
              {
                  name: "**(Prefix)avatar**",
                  value: "A Bot Mostrara a foto de perfil do usuário marcado!"
              },
              {
                  name: "**(Prefix)anunciar**",
                  value: "A Bot fara um anuncio com a sua mensagem, Requer ter adm"
              },
              {
                  name: "**(Prefix)parceiros**",
                  value: "mostra os parceiros que a Xion tem"
              },
              {
                  name: "**(Prefix)link**",
                  value: "Mostra o Link do Discord da Xion"
              },
              {
                  name: "**(Prefix)catm**",
                  value: "A Bot enviara uma foto de um meme/piada de 'gato'"
              },
              {
                  name: "**(Prefix)ms**",
                  value: "Mostra a quantidade de usuários e servidores que eu estou"
              },
              {
                  name: "**(Prefix)loli**",
                  value: "A Bot enviara uma loli para o chat"
              },
              {
                  name: "**(Prefix)cat**",
                  value: "Enviara um gato pro chat"
              },
              {
                  name: "**(Prefix)on**",
                  value: "Mostrara quantidade de membros que o servidor atual e servidores que eu estou"
              },
              {
                  name: "**(Prefix)ms**",
                  value: "Mostrara a quantidade de membros e servidore que eu acompanho no momento"
              },
              {
                  name: "**(Prefix)ajuda**",
                  value: "Mostrara todos os comandos da bot"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Xion"
            }
          }
        })
    }
      if(comando === 'reiniciar') {
            if (message.author.id !== '430093309617111063') return;
        resetBot(message.channel)
            async function resetBot(channel) {
                channel.send(`Reiniciando...`)
                .then(msg => client.destroy(true))
                .then(() => client.login('NDk2MDc4OTkwMzUyNzExNzAw.DpWU_w.4L2K3iaCSqPFHCEAtdNjGEA6-h8'));
             }
    
        client.on('ready', () => {
            message.channel.send(`Bot reiniciado com sucesso!`);
        });
    }

    if(comando  === 'status'){
      if (message.author.id !== '430093309617111063') return;
      let stats = args.join(" ");
      if(!stats) return message.channel.send("O que quer que eu jogue?");
      bot.user.setActivity(stats, {type: "PLAYING"});
      message.channel.send(`Agora estou jogando ${stats}`)
    }
    
  });
bot.login(config.token);