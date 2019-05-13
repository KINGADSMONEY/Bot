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
            .setTitle("🔧 | Administracao")
            .setDescription("b!retirado @Usuario foi retirado da equipe!\n b!rebaixar @Usuario foi rebaixado a @Cargo\n b!promover @Usuario foi promovido a @Cargo\n b!anunciopv <mensagem>\n b!ban @Barth <motivo>\n b!mute @Barth <motivo>\n b!anuncio <msg>\n b!clear 99 \n b!chaton \n b!chatoff`")
            msg.edit(embed);
        })
        
    pc.on('collect', r2 => { 
        embed = new Discord.RichEmbed()
            .setTitle("🎮 | Jogadores")
            .setDescription("b!memes - Reage com memes poha... \n b!banir - Da um ban em um jogador que você odeia, seu batatao...\n b!invite - Pegue meu link de convite!\n b!invites - Saiba quantos invites você tem.\n b!avatar\n b!policia @Jailson\n b!beijar @Jailson\n b!cargoinfo Cargo ( Saiba as informaçoes do cargo.)\n b!ship @Barth @Sneck\n b!invite \nb!servidores \n")
            msg.edit(embed);
        })

    placadevideo.on('collect', r2 => { 
        embed = new Discord.RichEmbed()
            .setTitle("🤖  | BOT")
            .setDescription("Criador : \n <@573609837519437844>")
            msg.edit(embed);
        })        
    })
}