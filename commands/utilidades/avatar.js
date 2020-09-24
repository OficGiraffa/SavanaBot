const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let user =
    message.mentions.users.first() ||
    client.users.cache.get(args[0]) ||
    message.author;

  let avatar = user.displayAvatarURL({
    dynamic: true,
    format: "png",
    size: 1024
  });

  let embed = new Discord.MessageEmbed()
    .setTitle(`🖼 Avatar de ${user.username}`)
    .setDescription(
      `[clique aqui](${avatar}) para baixar a foto.\n\npatin ajudou tmbm ;)`
    )
    .setColor("RANDOM")
    .setImage(avatar)
    .setFooter("Por: " + message.author.username);

  console.log(message.author.displayAvatarURL);

  message.channel.send(embed);
};
