worker: node index.js

const ytdl = require(`ytdl-core`);
exports.run = async (bot, message, args, ops) => {
    console.log("works");



    if(!message.member.voiceChannel) 

    return message.channel.send(`Please Connect to a voice channel`);

    if (message.guild.me.voiceChannel) 
    return message.channel.send(`Sorry, the bot is already connected to a channel`);

    if (!args[0]) return message.channel.send(`Sorry, please input a url following the command.`);

    let validate = await ytdl.validateURL(args[0]);

    if (!validate) return message.channel.send(`Sorry, please input a **VALID** url following the command.`);

    let info = await ytdl.getInfo(args[0]);

    let connection = await message.member.voiceChannel.join();

    let dispatcher = await connection.play(ytdl(args[0],{ filter: `audioonly`}));

    message.channel.send(`Now Playing: ${info.title}`);


}
    exports.help = {
    name:"music"
}
