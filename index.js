const Discord = require ("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const prefix = "$"
bot.commands = new Discord.Collection();

bot.on(`message`, message=>{
  if (message.content.startsWith(prefix + "bc")) {
    if (message.author.id != "284151161291014144")
    if (message.author.id != "508002163457392660") return message.reply("ولدددد م عندك برمششششن")
    var argsBC = message.content.split(' ').slice(1).join(' ');
    if(!argsBC) return err(message, "Type the message to send.");
    message.guild.members.filter(m => !m.user.bot).forEach(m => {
      m.send(argsBC.replace(/muser/g, m)).catch(err => console.log(err));
      message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`)
      message.delete();
    })
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
     return;
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
