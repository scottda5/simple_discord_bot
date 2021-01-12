const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {
    console.log(message)
    if (message.content.includes('<@!343496726302162944>')) {
       var user = message.author.id
       var channelId = message.channel.id
       var reply = '!warn <@' + user + '> do not ping owner.  Go read the rules <#' + channelId + '>'
       message.channel.send(reply);
    }
});

 


client.login(process.env.BOT_TOKEN);