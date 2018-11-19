const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "507614444592037889"; // ايدي السررفر
var channel = "513345664915079178";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**  Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer Voxer **')
    },305);
})






client.on('message', message => {
if(message.content.startsWith('2s')) {
if(message.author.id !== "480407581085532180") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});
 





client.login(process.env.BOT_TOKEN2);
