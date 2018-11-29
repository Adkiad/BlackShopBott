const Discord = require ("discord.js");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

bot.on(`ready`, ()=>{
bot.user.setStatus("dnd")
bot.user.setGame(`$bc | Vampires`, "https://www.twitch.tv/azoqzmj")
})
bot.on('message', message => {
  if (message.content.startsWith("رابط")) {
    if(!message.author.bot)

message.channel.createInvite({
      thing: true,
      maxUses: 100,
      maxAge: 86400
  }).then(invite =>
    message.author.sendMessage(invite.url))

message.channel.send("**تم ارسال الرابط برسالة خاصة**")
message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 100**`)
  }
})
  


bot.login(process.env.BOT_TOKEN)
