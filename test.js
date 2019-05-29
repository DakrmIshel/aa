const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTgyNTg0ODk1NDk5NjY1NDA4.XOv8fQ.w87oRE5Of7flGtw238-d5Ly3568');