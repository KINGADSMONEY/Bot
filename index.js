const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

function changing_status() {
  let status = [`|Me doa 1 real pra comprar chocolate ? /doar|`,`|Quer comprar um bot? ADD Guii__#8061|`,`|Quer saber meus comandos? /help|`,`|Estou em ${bot.guilds.size} servidores.|`,`|Me convide usando /convidar|`,`|Fui feito pelo yGuii_XD#8061|`,`|Mande uma mensagem para meu dono /mensagem|`,`|Está solitario faça perguntar para mim /perguntar|`]

  let random = status[Math.floor(Math.random() * status.length)]
  bot.user.setActivity(random)
}


bot.on("ready", () => {
  console.log( `${bot.user.username} Está online sem erros!` );
  setInterval(changing_status, 6000);
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


    if(comando === `convidar`) {
      let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("📢 Ajuda 📢")
      .setDescription("Para me convidar para seu servidor você deve usar esse link.\n\n https://discordbots.org/bot/496078990352711700")
      .setTimestamp()
      .setFooter("Antenciosamente AnúncioBOT")
      message.channel.send(embed);
    }

    if(comando === `doar`) {
      let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("📢 Ajuda 📢")
      .setDescription("Quero comprar um chocolate mais meu papai não deixou dinheiro me doa 1 real? <3\n\nhttps://www.mercadopago.com/mlb/checkout/start?pref_id=271468214-1308944f-1158-4ea2-9017-0a786784d688")
      .setTimestamp()
      .setFooter("Antenciosamente AnúncioBOT")
      message.channel.send(embed);
    }

    if(comando === `mensagem`) {
      
      const sayMessage = args.join(" ");
      let anuncio = new Discord.RichEmbed()
      .setColor("#FFFF00")
      .addField("📢 Mensagem 📢", `${sayMessage}`)
      .setTimestamp()
      .setFooter(`Anunciador: ${message.author.username} \n | Servidor: ${message.guild.name}`)
      .setThumbnail(bot.user.displayAvatarURL)
      message.guild.members.find(m => m.id === "430093309617111063").send(anuncio);
    }

        if(comando === `perguntar`) {
        var respostas = [`Sou Gay eu admito`,`Não te interessa.`, 'Filho da puta', 'Nem existe numero pra isso', 'Umas 300mil vezes', '12200000',`Sim`, 'Não', 'Sua mãe', 'Posto ipiranga', 'RedeSky', 'Claro que sim', 'Eu te amo', 'Várias vezes', 'Eu slá porra', 'Nunca nem vi', 'Que viage é essa?', 'Guilherme o melhor', 'Você é gay xiu', 'Revista playboy', 'Bebe', 'Felipe Neto', 'Luccas Netto', 'Anuncio igual sua mãe', 'Nem copiei ninguém', 'Talvez', 'Imagina...', 'Eu sei...', 'Claro que não', 'Seu idiota']
          var variavel = respostas[Math.floor(Math.random() * respostas.length)]
      
          let embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setAuthor(message.author.tag, message.author.displayAvatarURL)
          .addField('❓ Pergunta:', `${args.join(" ")}`)
          .addField('🎱 Resposta:', `${variavel}`)
          message.channel.send(embed)
        }

        if(comando === `deathnote`) {
          let embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .addField(`Infelizmente o ${message.mentions.users.first()} foi morto pelo DeathNote`)
          .addField("Morreu de:",reason)
          .addField("Assassino:", `${message.author.tag}`)
          .setThumbnail("https://media.giphy.com/media/Lhtui7nKVVeXS/giphy.gif")
          message.channel.send(embed)
        }

        if (message.content.startsWith("/mute")) { 
          let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
          if(!tomute) return message.reply("Eu não achei o usuario");
          if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('**Sem permissão**');
          let muterole = message.guild.roles.find(`name`, "Silenciado");
         
          if(!muterole){
            try{
              muterole = await message.guild.createRole({
                name: "Silenciado",
                color: "#000001",
                permissions:[]
              })
              message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false
                });
              });
            }catch(e){
              console.log(e.stack);
            }
          }
        
  
        
          await(tomute.addRole(muterole.id));
          message.reply("**Usúario mutado com sucesso!**");
      }  

      if(comando === "ajuda"){
        message.channel.send(":discord~1: Verifique seu privado :discord~1: ");
        
            const Aviso = args.join(" ");
            let semnada = new Discord.RichEmbed()
            .setColor("edac2a")
            .setAuthor(bot.user.username, bot.user.avatarURL)
         .setFooter("©Anunciador - Todos os direitos reservados", message.author.avatarURL)
            .setDescription("\n\n:white_small_square: /anuncio - Com este comando você pode fazer um anuncio no chat que você digitou o comando. \n\n :white_small_square:/anunciopv - Mandar mensagem no privado de todos os jogadores do servidor \n\n :white_small_square:/convidar - Você consegue o link para me convidar para seu servidor\n\n :white_small_square:/mute - Tira a permissão de falar da pessoa que for mutada, você deve ter o cargo **SILENCIADO** criado.\n\n :white_small_square:/mensagem - Você manda uma mensagem para o meu criador.\n\n:white_small_square: /perguntar - Está solitario, faça perguntas para ele o cara mais sincero.\n\n:white_small_square:/doar - Me doe 1 real para mim comprar um **CHOCOLATE**, caso me doe seu nome é sua # irá aparecer no meus **STATUS** <3\n\n")
        
            if(!Aviso)
            return message.author.send(semnada)
            message.delete().catch();
            let aviso = new Discord.RichEmbed()
            .setColor("edac2a")
            .setAuthor("Toxic - Pv", "https://cdn.discordapp.com/attachments/409846357982183434/429837842697682955/emoji.png", "toxic.com.br")
            .setDescription(Aviso)
              
            .setTimestamp()
            .setFooter("©Anunciador - Todos os direitos reservados", message.author.avatarURL)
            return message.channel.send(aviso);
          }

});
bot.login(config.token);