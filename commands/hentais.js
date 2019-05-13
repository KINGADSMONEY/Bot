const Discord = require('discord.js');


exports.run = (client, message, args) => {   

let say = args.join(" ")

const embed = new Discord.RichEmbed()

.setAuthor("Uma listinha boinha. ( ATUALIZA  A CADA 3 DIAS )..",)
.setColor("#a32aff")
.setThumbnail("")
.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYX2bl-vvj7niH0pSQjt1q8nG2SiJMw6mA9kG6wcXQG1JjH8c4")
.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhPRswlO30HvB92nsVccQyQFBZWU2sqKggA-aYqHEg7h4dKT1a")
.setImage("http://1.bp.blogspot.com/-iIpu7FVE7tY/URKT3rPp6_I/AAAAAAAAAPo/P4ejOUNKMkU/s1600/009ecchi_hentaigif.net.jpg")
.setImage("http://3.bp.blogspot.com/-mUcyFahL7gs/TZaVIqceMSI/AAAAAAAAAO4/xgCSlhJZQD4/s1600/CK2Bk1563467-02.jpg")
.setImage("https://img.superhentais.com/img/animes/58526-large.jpg")
.setImage("http://4.bp.blogspot.com/_V6JSlvc0b5s/TDDrhwD-XJI/AAAAAAAAAM4/kOSVpbzgxvs/s640/MINITOKYO.FEMALE.SCANS.UNKNOWN.ECCHI_343924.jpg")
.setImage("https://sohentais.com/imgs/img-capa-hentai/kimi-omou-koi.jpg")
.setImage("http://videosporno.br.com/wp-content/uploads/2018/04/hentai-forcado-na-escola.jpg")

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "irineu",
    aliases: ["irineu"]
}