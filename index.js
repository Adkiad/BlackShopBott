const Discord = require ("discord.js");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();


bot.on(`ready`, ()=>{
  console.log(`${bot.user.username} is online!`);
  console.log(`----------------`);
  console.log(`VAMPIRES Bot- Script By : Azoqz`);
  console.log(`----------------`);
  console.log(`ON ${bot.guilds.size} Servers '     Script By : Azoqz ' `);
  console.log(`----------------`);
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.setStatus("dnd")
})  

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  
  let prefix = `$`
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = message.content.split(" ").slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);


  if (message.content.startsWith(prefix + "bc")) {
    if (message.author.id != "284151161291014144")
    if (message.author.id != "508002163457392660") return message.reply("ولدددد م عندك برمششششن")
    var argsBC = message.content.split(" ").slice(1).join(' ');
    if(!argsBC) return err(message, "Type the message to send.");
    message.guild.members.filter(m => !m.user.bot).forEach(m => {
      m.send(argsBC.replace(/muser/g, m)).catch(err => console.log(err));
      message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`)
        
      message.delete();
				});
      }
    })
bot.login(process.env.BOT_TOKEN)
