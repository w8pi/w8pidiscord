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


    return message.channel.send("WIP");
    
    

}
    if (command === `${prefix}hallo`) {
    
        return message.channel.send("Hallo!!");


   var botEmbed = new discord.MessageEmbed()
       .setTitle("Information")
       .setDescription("")
       .setColor("#4b8546");


       return message.channel.send(botEmbed)


}

});

