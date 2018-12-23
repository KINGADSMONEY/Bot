const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
message.delete().catch(O_o=>{});
   if (message.member.hasPermission('BAN_MEMBERS')) {
   let member = message.mentions.members.first();
   if(!member)
      return message.channel.send("Mencione um usúario.")
   if(!member.bannable) 
      return message.reply("Eu não posso banir esse usuário! Ele(a) têm um cargo maior.");

   let motivo = args.slice(1).join(' ');
   if(!motivo)
      return message.reply("Por favor, indique um motivo para o banimento!");
  
   await member.ban(`Por: ${message.author.tag} | Motivo: ` + motivo)
      .catch(error => message.reply(`Desculpa ${message.author} Eu não poderia banir por causa de: ${error}`));
      
      
   const banmsg = new Discord.RichEmbed()
       .setAuthor('Você foi banido!', member.user.avatarURL)
       .setColor("RAMDOM")

       .setThumbnail(member.user.avatarURL)

       .setTimestamp()
   .setFooter(" - Todos os direitos reservados", message.author.avatarURL)
    
        .addField("Motivo:", motivo)

        .addField("Servidor:", message.guild.name)  
  
   member.send(banmsg)   
      
   const banido = new Discord.RichEmbed()
       .setAuthor(member.user.tag + ' | Ban', member.user.avatarURL)
       .setDescription(`${member.user.tag} (ID: ${member.user.id}) não cumpriu as regras e foi banido! :worried: `)
       .setColor("RAMDOM")

       .setThumbnail(member.user.avatarURL)

       .setTimestamp()
       .setFooter(" - Todos os direitos reservados", message.author.avatarURL)

        .addField("Motivo:", motivo)

        .addField("Staffer:", message.author)
        
    client.guilds.get("523694859542855700").channels.get("523694859542855700").send(banido)
    } else {
      message.reply("você não tem permissão! :x:")
  }
}