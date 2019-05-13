const Discord  = module.require('discord.js');

const agree    = "✅";
const disagree = "❎";

module.exports.run = async (bot, message, args) => {

  if (message.mentions.users.size === 0){
    return message.reply(":x: " + "| Marque o usuario que quer iniciar a votaçao");
  }

  let kickmember = message.guild.member(message.mentions.users.first());
  if(!kickmember){
    message.reply(":x: " + "| Ele e um fantasma tia.!");
  }

  if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
    return message.reply(":x: " + "| Você não tem permissão \"KICK_MEMBERS\" para kickar.").catch(console.error);
  }

  let msg = await message.channel.send("Vote iniciado (10 Seconds)");
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 10000});
  msg.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.RichEmbed()
  
            .addField("Voting Finished:", "----------------------------------------\n" +
                                          "Total votes (Não): " + `${NO_Count-1}\n` +
                                          "Total votes (Sim): " + `${YES_Count-1}\n` +
                                          "----------------------------------------\n" +
                                          "NOTE: Votos para ser kickado (3+)\n" +
                                          "----------------------------------------", true)

            .setColor("0x#FF0000")

  await message.channel.send({embed: sumsum});

  if(YES_Count >= 4 && YES_Count > NO_Count){

    kickmember.kick().then(member => {
      message.reply(`${member.user.username} foi kickado =D`)
    })
  }else{

    message.channel.send("\n" + "Agora estamos seguros irmaos..");
  }

}

module.exports.help = {
    name: "votekick"
}