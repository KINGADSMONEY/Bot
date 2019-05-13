const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, prefix, con) => {
  let target = message.mentions.users.first() || message.guild.members.get(args[1]) || message.author;

  con.query(`Selecione * nivel para o = '${target.id}'`, (err, rows) => {
    if(err) throw err;

    if(!rows[0]) return message.channel.send("Este usuário não tem Level no registro!");

    let xp = rows[0].xp

    var XPEE = new Discord.RichEmbed()
    .setTitle("__***Total Level***__")

    .addField("------------------------------------------",
              "Nivel: " + "__**" + xp + "**__" + "\n" +
              "-----------------------------------------", true)

    .setColor("0x#FF0000")

    message.channel.send(XPEE);
  });
}

module.exports.help = {
    name: "nivel"
}