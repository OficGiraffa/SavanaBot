const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix) => {
  if (!args[0]){
    return message.reply("Digite =h mais o nome de algum comando válido para descobrir mais sobre ele!");
  }
  try {
    require(`./commands/utilidades/${args[0]}.js`);
    return message.channel.send("TOMA NO CU");
  } catch {
    try {
      require(`./commands/diversao/${args[0]}.js`);
      console.log(args[0])
      return message.channel.send("TOMA NO CU");
    } catch {
      try {
        require(`./commands/gerenciamento/${args[0]}.js`);

        return message.channel.send("TOMA NO CU");
      } catch (err) {
          return message.reply("Desculpe! Não encontrei nenhum comando com esse nome! Tente novamente!");
      }
    }
  }
}