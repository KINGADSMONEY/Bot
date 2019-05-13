const Discord = require('discord.js');


exports.run = (client, message, args) => {   
    var respostas = [`To zuando seu corno. (CONFIRMADO S!CORNO)`,`Eu admito e verdade sim..`,`Pau pequeno kk`,`Suas perguntas são uma bosta pqp`,`É bixa kk`,`Meu zap : 11944535342`,`Vem pro fut irmao`,`Acho que sim né kk`,`Você seu gordinho feio`,`Não te interresa.`, 'Filho da puta', 'Nem existe numero pra isso', 'Umas 300mil vezes', '12200000',`Sim`, 'Não', 'Sua mãe', 'Posto ipiranga', 'RedeSky', 'Claro que sim', 'Eu te amo', 'Várias vezes', 'Eu slá porra', 'Nunca nem vi', 'Que viage é essa?', 'Guilherme o melhor', 'Você é gay xiu', 'Revista playboy', 'Bebe', 'Felipe Neto', 'Luccas Netto', 'Anuncio igual sua mãe', 'Nem copiei ninguém', 'Talvez', 'Imagina...', 'Eu sei...', 'Claro que não', 'Seu idiota']
    var variavel = respostas[Math.floor(Math.random() * respostas.length)]

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`${variavel}`)
    message.channel.send(embed)
  }