const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

function changing_status() {
  let status = [`/ajuda - ${bot.guilds.size} servidores.`]

  let random = status[Math.floor(Math.random() * status.length)]
  bot.user.setActivity(random)
}

bot.on("ready", () => {
  console.log( `${bot.user.username} Está online sem erros, para me reiniciar aperte ctrl + c.`);
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
      message.channel.send(":fire: Verifique seu privado :fire: ");
      
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

        
if(comando === "serverinfo"){
  const moment = require('moment')
    moment.locale('pt-br')
    const msg = message;
    var time = Date.now();
    if (!message.guild.available) return;
    moment.locale('pt-br');


    let guild;

    if (args[0]) {
        guild = client.guilds.get(args[0]);
    } else {
        guild = message.guild;
    }

    let serverRegion = {
        'amsterdam': ':flag_nl: Amsterdã',
        'brazil': ':flag_br: Brasil',
        'eu-central': ':flag_eu: Europa Central',
        'eu-west': ':flag_eu: Europa Ocidental',
        'frankfurt': ':flag_de: Frankfurt',
        'hongkong': ':flag_hk: Hong Kong',
        'japan': ':flag_jp: Japão',
        'london': ':flag_gb: Londres',
        'russia': ':flag_ru: Russia',
        'singapore': ':flag_sg: Singapura',
        'sydney': ':flag_au: Sydney',
        'us-central': ':flag_us: EUA Central',
        'us-east': ':flag_us: EUA Oriental',
        'us-west': ':flag_us: EUA Ocidental',
        'us-south': ':flag_us: EUA Sul',
    }[guild.region];

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    
     .setFooter(message.author.tag,message.author.avatarURL )
        .setTimestamp(new Date())
    .setColor("4a2aed")
    .setThumbnail(sicon)
    .setTitle(`${message.guild.name}`)
    .setFooter("©Anunciador - Todos os direitos reservados", message.author.avatarURL) 
    .addField(`:hammer_pick: Informações sobre o discord`, "Veja as informações do servidor!")
    .addField(":upside_down: __Guild__ __ID__:", message.guild.id , false )
    .addField(":gem: __Dono__ :", message.guild.owner , true )
    .addField(":slight_smile: __Dono__ __ID__:", message.guild.owner.id  , true )
    .addField(":pencil: __Criado__:", message.guild.createdAt , true )
    .addField(":bell: __Região__:", `${serverRegion}` , true)
    .addField(":star: __Emojis__: ", message.guild.emojis.size , true)
    .addField(":radio: __Canais__", message.guild.channels.size, true)
    .addField(":busts_in_silhouette:  __Membros__:", message.guild.memberCount , true)
.addField(":white_circle:  __Onlines__:", `${guild.members.filter(o => o.presence.status === 'online').size}`, true)
.addField(":o: __Ocupados__:",`${guild.members.filter(dnd => dnd.presence.status === 'dnd').size}`, true)
.addField(":open_mouth: __Ausentes__:", `${guild.members.filter(i => i.presence.status === 'idle').size}`, true) 
.addField(":black_circle:  __Offlines__:", `${guild.members.filter(off => off.presence.status === 'offline').size} `, true)

    
      
    return message.channel.send(serverembed);
}

if(comando === "avatar"){

  let usuario = message.guild.member(message.mentions.users.first());// || message.guild.members.get(args[0]));
  //if(!usuario) return errors.cantfindUser(message.channel);

  let semnada = new Discord.RichEmbed()
  .setDescription(`Clique [aqui](${message.author.avatarURL}) para pegar o link da foto.`)
  .setAuthor(`🖌️ Imagem de perfil`)//Clique [aqui](${usuario.user.avatarURL}) para pegar o link da foto.`)
  .setColor("#bc0000")
  .setImage(message.author.avatarURL)
  .setTimestamp()
.setFooter("©Anunciador - Todos os direitos reservados", message.author.avatarURL)

  if(!usuario)
  return message.channel.send(semnada)

  let msg = new Discord.RichEmbed()
  .setDescription(`Clique [aqui](${usuario.user.avatarURL}) para pegar o link da foto.`)
  .setAuthor(`🖌️ Imagem de perfil`)//Clique [aqui](${usuario.user.avatarURL}) para pegar o link da foto.`)
  .setColor("#bc0000")
  .setImage(usuario.user.avatarURL)
  .setTimestamp()
.setFooter("©Anunciador - Todos os direitos reservados", bot.user.avatarURL)
  
  message.channel.send(msg);
}

if(comando === "botinfo"){
  const moment = require('moment')
  moment.locale("pt-BR")
  require("moment-duration-format")
      let duration = moment.duration(bot.uptime).format('D [d], H [h], m [m], s [s]');
      
      let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .addField(':robot: Função:', `Ajuda os membros.`)
    .setTitle(`Informações do ${bot.user.tag}`)
    .setColor("0xff0000")
    .setFooter("©Anunciador - Todos os direitos reservados", message.author.avatarURL)
    .setThumbnail(bicon)
    .addField("Estou em:",` ${bot.guilds.size} servidores!.`)
    .addField("Estou com:",` ${bot.users.size} usuários ❤`)
    .addField("Nome do Bot:", bot.user.username)
    .addField("Estou online à:",`${duration}`)
    .addField("Criado em:",`${moment(bot.user.createdAt).format('LLLL')}`)
    .addField("ID do bot",bot.user.id )
    .addField("Dono do BOT:", `<@450688165926273024>`) 
     return message.channel.send(botembed);
      
  }


});
bot.login(config.token);