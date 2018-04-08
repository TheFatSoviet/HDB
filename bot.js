 Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});
client.on('message', message => {
    if (message.content === '!Hporn') {
    	message.reply('https://www.cowcotland.com/images/news/2016/05/mod-apex-pc-sobre-mais-diablement-realise.jpg');
  	}
});
client.on('message', message => {
    if (message.content === 't2') {
    	message.reply('t3 mdr');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
