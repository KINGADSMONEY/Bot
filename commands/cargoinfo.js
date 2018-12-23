var Discord = require('discord.js')
module.exports.run = async (bot, message, args) => { 
        let cor = [54, 57, 63];
        let role = message.mentions.roles.first()
        if(!role) return message.reply('Você precisa mencionar um cargo');
        const embed = new Discord.RichEmbed()
            .setTitle(`**Informações do cargo**`)
            .addField(":pencil2: **Nome do cargo**", `\`\`\`${role.name}\`\`\``, true)
            .addField(":volleyball: **ID do cargo**", `\`\`\`${role.id}\`\`\``, true)
            .addField(":100: **Cor**", `\`\`\`${role.color}\`\`\``, true)
            .addField(":clock4: **Cargo criado em**", `\`\`\`${role.createdAt}\`\`\``, true)
            .addField(":unlock: **Permissões**", `\`\`\`${role.permissions}\`\`\``, true)
            .setColor(cor)
            .setFooter(`Comando solicitado por: ${message.author.tag}`, message.author.avatarURL)
            .setTimestamp()
        message.channel.send(embed)
}

module.exports.help = {
    name: "roleinfo"
}