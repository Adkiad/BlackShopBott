const Discord = require ("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const prefix = "$"
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
  bot.user.setActivity("Kawaii")
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


	if(cmd === prefix + 'bc') {
    var argsBC = message.content.split(' ').slice(1).join(' ');
    var x = 0;
    if (message.author.id != "284151161291014144")
    if (message.author.id != "508002163457392660") return message.reply("ولدددد م عندك برمششششن")
    if(!argsBC) return err(message, "Type the message to send it.");
    message.delete();
    

    message.channel.send("انتظر قليلاً").then(message1 => {
      message.guild.members.filter(m => !m.user.bot).forEach(m => {
        m.send(argsBC.replace(/muser/g, m)).catch(err => console.log(err));
      });
      setTimeout(() => {
        message1.edit(`تم ارسال الرسالة الى: ${message.guild.members.filter(m => !m.user.bot).size} عضو`, "")
        
        });
      }, 20000);
    }
  })
    const clean = text => {
      if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
        return text;
     }
    bot.on("message", message => {
      const args = message.content.split(" ").slice(1);
      if (message.content.startsWith(prefix + "eval")) {
        if (message.author.id != "284151161291014144")
        if (message.author.id != "508002163457392660") return message.reply("ولدددد م عندك برمششششن")
        try{
          const code = args.join(" ");
          let evaled = eval(code);
          if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
          message.channel.send(clean(evaled), {code:"xl"});
        }catch (err){
          message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
      }
    })
  

bot.login(process.env.BOT_TOKEN)
