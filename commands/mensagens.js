const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, prefix, con) => {
  let target = message.mentions.users.first() || message.guild.members.get(args[1]) || message.author;

  con.query(`Selecione o caixa d'agua.. = '${target.id}'`, (err, rows) => {
    if(err) throw err;

    if(!rows[0]) return message.channel.send("Este usuario nunca falou nada, mudinho.");

    let msgCnt = rows[0].msgCnt

    var MSG = new Discord.RichEmbed()
    .setTitle("__***Total de mensagens digitadas.***__")

    .addField("------------------------------------------",
              "Total de mensagens: " + "__**" + msgCnt + "**__" + "\n" +
              "-----------------------------------------", true)

    .setColor("0x#FF0000")

    message.channel.send(MSG);

  });
}

module.exports.help = {
    name: "mensagens"
}