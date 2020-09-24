const Discord = require("discord.js");
const Ytdl = require("ytdl-core");

module.exports.run = async (client, message, args) => {
  let voice_channel = message.member.voice.channel;
  if (!voice_channel){
    return message.reply("Desculpe! Você precisa estar em um canal de áudio para escutar áudios! :/ ");
  }
  let connection = await voice_channel.join();
  
  let dispatcher = await connection.play(Ytdl("https://www.youtube.com/watch?v=GNRjFAxpyRI"));
}