const Discord = require ("discord.js");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();




bot.on(`ready`, ()=>{
    console.log(`${bot.user.username} is online!`);
    console.log(`----------------`);
    console.log(`Desert Bot- Script By : Azoqz`);
    console.log(`----------------`);
    console.log(`ON ${bot.guilds.size} Servers '     Script By : Azoqz ' `);
    console.log(`----------------`);
    console.log(`Logged in as ${bot.user.tag}!`);
      bot.user.setGame(`رابط | Black SHOP`, "https://www.twitch.tv/azoqzmj")
      bot.user.setStatus("dnd")

bot.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 100**`)


    }
});
    

    
    
        })




bot.login(process.env.BOT_TOKEN)
