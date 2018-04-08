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
    function getRandomSite(){
   var sites = ["google.com","bing.com","xyz.com","abc.com","example.com"];
    var i = parseInt(Math.random()*(sites.length-1));
    return sites[i];
};
    	
  	}
});
client.on('message', message => {
    if (message.content === 't2') {
    	message.reply('t3 mdr');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
