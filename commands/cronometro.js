const Discord = module.require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

  let Timer = args[0];

  if(!args[0]){
    return message.channel.send(":x: " + "| Por favor, insira um período de tempo seguido por \"s or m or h\"");
  }

  if(args[0] <= 0){
    return message.channel.send(":x: " + "| Por favor, insira um período de tempo seguido por \"s or m or h\"");
  }

  message.channel.send(":white_check_mark: " + "| Cronometro iniciado. TEMPO: " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){
    message.channel.send(message.author.toString() + ` O tempo acabou irmao.., durou: ${ms(ms(Timer), {long: true})}`)

  }, ms(Timer));
}

module.exports.help = {
    name: "cronometro"
}