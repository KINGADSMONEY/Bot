const Welcome = require("discord-welcome");
 
Welcome(bot, {
    privatemsg : `Seja bem-vindo ao servidor ${message.guild.name} respeite as regras e fique de olho nos avisos!`,
    publicmsg : ":black_small_square: - Seja muito bem-vindo @MEMBER.",
    publicchannel : "bem-vindo"
    });