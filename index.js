const Discord = require("discord.js");
require('dotenv').config();

const { ping, moment, help } = require('./commands/messageCommands');

const client = new Discord.Client();

// bot prefix is "hb!"
const prefix = "bruh!";

const commands = {
    ping,
    moment,
    help
};

client.on("ready", function()
{
    console.log("Ready");
})

client.on("message", function(message) 
{ 
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    // recieves user commands
    let action;
    try
    {
        action = commands[command];
    }
    catch(TypeError)
    {
        action = message => message.channel.send('Bruh, this command does not exist.');
    }
    action(message);
});
client.login(process.env.BOT_TOKEN);
