const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {
    console.log(message)
    if (message.content.includes('<@!343496726302162944>')) {
       var user = message.author.username
       var reply = '!warn @' + user + ' do not ping owner.  Go read the rules #welcome-rules'
       message.reply(reply);
    }
});

 


client.login(process.env.BOT_TOKEN);