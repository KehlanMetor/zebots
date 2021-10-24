const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")
const botPrefix = "/"


const { MessageEmbed } = require('discord.js');

var botname = "ZeBots" //You can change this with /setbotname

client.on('ready', () => {
  console.log('my bot is ready');
  client.user.setActivity("ZeBots Official", {
    type: "STREAMING",
    url: "https://www.twitch.tv/azudiscord"
  });
});

client.on('message', msg => {

});

client.login(process.env.TOKEN);