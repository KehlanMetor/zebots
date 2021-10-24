const Discord = require('discord.js');
const exampleEmbed = new Discord.MessageEmbed()

if (message.author.bot == "lol") {
	exampleEmbed.setColor('#7289da');
    exampleEmbed.setName("help");
    

message.channel.send(exampleEmbed)
}
