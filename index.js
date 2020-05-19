const discord = require("discord.js");
const botConfig = require("./bot config.json");


const client = new discord.Client();
client.login(process.env.token);

client.on("ready", async () => {
 

    console.log(`${client.user.username} is online.`);
    
    
});

client.on("message", async message =>{
    if(message.author.bot) return;


    if(message.channel.type == "dm") "return";



    var prefix = botConfig.prefix; 



var messageArray = message.content.split(" ");

var command = messageArray[0];


if (command === `${prefix}help`) {
}

    return message.channel.send("WIP");
    if (command === `${prefix}L`) {
        return message.channel.send("https://cdn.discordapp.com/attachments/694873047076700180/709700159004475412/image0-7.gif");
      
 
}});
bot.login(process.env.token);