const Discord = require('discord.js')
exports.run = (bot, message, args) => {
        message.reply("Enviei todos os meus comandos eu seu privado, confere ae. :fire:")
        var embed = new Discord.RichEmbed()
            .setTitle("Clique nos Emojis.")
            .setDescription("🔧 | Administração\n🎮 | Jogadores\n 🤖 | BOT")

        message.author.send({embed}).then(msg=>{
            msg.react('🔧').then(r=>{
            msg.react('🎮')
            msg.react('🤖')
        })
        const mouse1 = (reaction, user) => reaction.emoji.name === '🔧' && user.id === message.author.id;
        const pc2 = (reaction, user) => reaction.emoji.name === '🎮' && user.id === message.author.id;
        const placadevideo3 = (reaction, user) => reaction.emoji.name === '🤖' && user.id === message.author.id;
        const mouse = msg.createReactionCollector(mouse1, { time: 60000 });
        const pc = msg.createReactionCollector(pc2, { time: 60000 });
        const placadevideo = msg.createReactionCollector(placadevideo3, { time: 60000 });

        
    mouse.on('collect', r2 => { 
        embed = new Discord.RichEmbed()
            .setTitle("**🔧 | Administracao**")
            .setDescription("`k!ban @Knucks <motivo>\n k!mute @Knucks <motivo>\n k!anuncio <msg>\n k!clear 99`")
            msg.edit(embed);
        })
        
    pc.on('collect', r2 => { 
        embed = new Discord.RichEmbed()
            .setTitle("🎮 | Jogadores")
            .setDescription("`k!avatar\n k!policia @Jailson\n k!beijar @Jailson\n k!cargoinfo Cargo ( Saiba as informaçoes do cargo.)\n k!invites @Knucks\n k!ship @Knucks @Sneck\n k!invite `")
            msg.edit(embed);
        })

    placadevideo.on('collect', r2 => { 
        embed = new Discord.RichEmbed()
            .setTitle("🤖 | BOT")
            .setDescription("Criador : \n <@513341525422374961>")
            msg.edit(embed);
        })        
    })
}