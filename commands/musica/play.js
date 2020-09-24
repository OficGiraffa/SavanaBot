const Discord = require("discord.js");
const ytdl = require("ytdl-core");

const queue = new Map();
export const serverQueue = undefined;

module.exports.run = async (client, message, args) => {
  serverQueue = queue.get(message.guild.id);
  execute(message, args , serverQueue)
};
async function execute(message, args, serverQueue) {
  
  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "Desculpe! Como você vai ouvir sem estar num canal de áudio?"
    );

  const songInfo = await ytdl.getInfo(args[0]);
  const song = {
    title: songInfo.videoDetails.title,
    url: songInfo.videoDetails.video_url
  };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    var connection = await voiceChannel.join();
    queueContruct.connection = connection;
    play(message.guild, queueContruct.songs[0]);
    
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} foi adicionada a fila!`);
  }
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
  
  serverQueue.textChannel.send(`Tocando agora: **${song.title}**`);
}
