const Discord = require("discord.js");
const Ytdl = require("ytdl-core");

module.exports.run = async (client, message, args) => {
  if (!args[0]){
    return message.reply("Desculpe! Como vou saber o que você quer escutar se você não falar?");
  }
  
  let voice_channel = message.member.voice.channel;
  if (!voice_channel){
    return message.reply("Desculpe! Você precisa estar em um canal de áudio para escutar áudios! :/ ");
  }
  
  if (message.member.voice.channel !== message.guild.me.voice.channel){
    return message.reply("Desculpe! Já estou sendo usado em outro canal!");
  }
  
  let connection = await voice_channel.join();
  
  let music_url = Ytdl(args[0], { filter: 'audioonly' });
  
  let dispatcher = await connection.play(music_url); 
  
  let embed_play = new Discord.MessageEmbed()
  .setTitle("Estou tocando um áudio!")
  .setDescription()
  .setColor("RANDOM")
  .setFooter(`Por ${message.author.username}`);
  
  message.channel.send(embemd_play);
}