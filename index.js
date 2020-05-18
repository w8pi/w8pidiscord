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
    


{
    if (command === `${prefix}kick`) {
        // kick @user reason

var args = message.content.slice(prefix.length).split(" ");


if(message.member.hasPermission("Kick_Members")) return message.reply("No permissions.")
if(message.guild.me.hasPermission("Kick_Members"))return message.reply("No permissions.")

if(!args[1]) return message.reply("No username given");
if(!args[2]) return message.reply("No reason given");


var KickUser = message.guild.member(mentions.users.first() || message.guild.members.get(args[1]));
var reason = args.slice(2).join(" ");

if(!KickUser) return message.reply("user not found")

var embedquestion = new discord.MessageEmbed()
    .setColor("green")
    .setTitle("respond within 30 seconds")
     .setDescription(`are you sure you want to kick ${kickuser}`)

      
   var embed = new discord.embed 
   .setcolor('#43b03a')
   .setfooter(message.member.displayName)
   .setTimestamp()




{
 

}

 
}

}


});


