const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content.includes('@scott_g')) {
       var user = message.member.tag
       var reply = '!warn @' + user + '  don\t ping owner.  Go read the rules #welcome-rules'
       message.reply(reply);

    }

});

 


client.login(process.env.BOT_TOKEN);