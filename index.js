const Discord = require ("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const prefix = "$"
const Canvas = require('canvas');
bot.commands = new Discord.Collection();

bot.on(`ready`, ()=>{
bot.user.setStatus("dnd")
bot.user.setGame(`رابط | BlackShop`, "https://www.twitch.tv/azoqzmj")
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
  bot.on(`ready`, () =>{
    console.log(`Bot Launched...`)

  });

  bot.on(`guildMemberAdd`, member => {
    console.log(`User ` + member.user + `has joined the server!` )

    var role = member.guild.roles.find(`name`, `Member`)

    member.addRole(role)
  });
})

bot.on(`message`, message=>{
  if (message.content.startsWith(prefix + "bc")) {
    if (message.author.id != "346066545107009537")
    if (message.author.id != "284151161291014144")
    if (message.author.id != "284151161291014144") return;
    if (!message.author.id != "346066545107009537") return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
      m.send(`${argresult}\n ${m}`);
    })
    message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`)
    message.delete();
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
    if (message.author.id != "284151161291014144") return;
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



bot.on('guildMemberAdd', member => {

  const welcomer =  member.guild.channels.find(c => c.id == '515164892223897601');

  const w = ['./welcome.png'];



      let Image = Canvas.Image,

         canvas = new Canvas(360, 270),

         ctx = canvas.getContext('2d');

         fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {

         if (err) return console.log(err);

         let BG = Canvas.Image;

         let ground = new Image;

         ground.src = Background;

         ctx.drawImage(ground, 0, 0, 360, 270);

          

      



             let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;

             jimp.read(url, (err, ava) => {

                 if (err) return console.log(err);

                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {

                     if (err) return console.log(err);

                    

                     ctx.font = "bold 14px Arial";

                     ctx.fontSize = '20px';

                     ctx.fillStyle = "#f1f1f1";

                     ctx.textAlign = "center";

                     ctx.fillText(member.user.username, 210, 200);



             let Avatar = Canvas.Image;

                           let ava = new Avatar;

                           ava.src = buf;

                           ctx.beginPath();

                           ctx.arc(77, 145, 73, 0, Math.PI*2);

                           ctx.stroke();

                              ctx.clip();

                              ctx.drawImage(ava, 5, 70, 147, 147);

       welcomer.send({

           file: canvas.toBuffer()

       });

       })

   })

 });                    

});




bot.login(process.env.BOT_TOKEN)
