var Discord = require('discord.js')
    module.exports.run = async (bot, message, args) => {
        let user = message.mentions.users.first();
        if(!user) return message.channel.send(message.author + " Quem você quer dar um tapinha? ");
        let gifs = ['https://tenor.com/view/batman-slap-robin-gif-10206784','https://media.tenor.com/images/bd092fb261df4588a51f9dd1f4815fea/tenor.gif','https://media.tenor.com/images/5c1eaa78ebca82bca08a9a70b901d38e/tenor.gif','https://media.tenor.com/images/bed2e8652b6bd6ce3751ef4950db71b1/tenor.gif','https://media.tenor.com/images/bed2e8652b6bd6ce3751ef4950db71b1/tenor.gif','https://media.tenor.com/images/58cf197c359e36cccea8c56e5494cfd8/tenor.gif','https://media.tenor.com/images/15605581b37b757016bc0ff441617b54/tenor.gif','https://media.tenor.com/images/28237ac3e7af9c7c1699606210ade5ce/tenor.gif','https://media.tenor.com/images/482b1c5415f3809d76153447ea2dedb5/tenor.gif'] 
        let random = Math.round(Math.random() * gifs.length);
        let embed = new Discord.RichEmbed()
            .setDescription(`**${message.author.username}** Deu um supertapinha no **${user.username}**.`)
            .setImage(gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1])
            .setColor('RANDOM')
            .setFooter(`Tapeiro : ${message.author.tag}`, message.author.avatarURL)
            .setTimestamp()

        message.channel.send(embed);
     }

     module.exports.help = {
        name: "tapinha"
        }