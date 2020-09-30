const Discord = require("discord.js");
const Fs = require("fs");

module.exports.run = async (client, message, args) => {
  if (message.member.permissions.has("ADMINISTRATOR")) {
    if (!args[0]) {
      return message.reply(
        "Desculpe! Sem falar qual o próximo prefixo não tem como eu definir! :("
      );
    }

    let next_prefix = args[0];

    let prefixes_file = Fs.readFileSync("./prefixes.json", "utf8");
    let prefixes = JSON.parse(prefixes_file);

    prefixes[message.guild.id] = {
      prefixes: next_prefix
    };

    Fs.writeFile("././prefixes.json", JSON.stringify(prefixes), err => {
      //if (err) console.log(err);
    });

    message.reply(
      `Prefixo alterado com sucesso! Agora é: ${prefixes[message.guild.id].prefixes}`
    );
  } else {
    message.reply(
      "Desculpe! Você não pode ficar mudando meu prefixo sem ter as permissões necessárias >:( "
    );
  }
};
