var Discord = require('discord.js')
    module.exports.run = async (bot, message, args) => {
        let user = message.mentions.users.first();
        if(!user) return message.channel.send(message.author + " Quem você quer beijar? Escolha! ");
        let gifs = ['https://media.discordapp.net/attachments/495603769317261312/497179148066881576/6fc25fdd3e22d89b19c3ea76d11789e6.gif?width=400&height=224', 'https://media.discordapp.net/attachments/495603769317261312/497213957191237633/giphy_3.gif?width=400&height=225'] 
        let random = Math.round(Math.random() * gifs.length);
        let embed = new Discord.RichEmbed()
            .setDescription(`**${message.author.username}** Deu um beijo forçado em **${user.username}**.`)
            .setImage(gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1])
            .setColor('RANDOM')
            .setFooter(`Beijoqueiro : ${message.author.tag}`, message.author.avatarURL)
            .setTimestamp()

        message.channel.send(embed);
     }

     module.exports.help = {
        name: "beijar"
        }