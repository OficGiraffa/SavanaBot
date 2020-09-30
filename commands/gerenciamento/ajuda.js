const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let embed_help_1 = new Discord.MessageEmbed()
    .setTitle("Ajuda do bot!")
    .setColor("RANDOM")
    .setDescription(
      `👋Bem vindo <@${message.author.id}> a central de ajuda e comandos do SavanaBot!\n` +
        "👉Sobre mim: \n" +
        "Sou um bot de discord feito por @Ofic_Giraffa (Com a ajuda de Patin) apenas para estudos.\n" +
        "Digite =infos para mais informações!\n" +
        "💼Comandos:\n" +
        "🎭 - Diversão\n" +
        "🎲 - Utilidades\n" +
        "🚦 - Gerenciamento\n"
    )
    .setFooter("Por: " + message.author.username);

  let messageEmbed = await message.channel.send(embed_help_1);
  messageEmbed.react("⬅️");
  messageEmbed.react("🎭");
  messageEmbed.react("🎲");
  messageEmbed.react("🚦");

  let embed_help_2 = new Discord.MessageEmbed()
    .setTitle("Ajuda do bot!")
    .setColor("RANDOM")
    .setDescription(
      "👋Bem-vindo @" +
        message.author.tag +
        " a central de comandos de diversão!\n" +
        "\n" +
        "💼Comandos:\n" +
        "👋 =bater - Bate num otário!\n" +
        "😍 =beijar - Com todo amor!\n" +
        "🏃 =fugir - Use para correr de alguém! O mencione.\n" +
        "🤗 =abraçar - Abraçe seu amiguinho!\n" +
        "🤑 =caraoucoroa - Bom pra apostas!\n" +
        "☭  =comidasoviética - Nossa comida.\n" +
        "🚬 =fumar - Hm, cancêr!\n"
    )
    .setFooter("Por: " + message.author.username);

  let embed_help_3 = new Discord.MessageEmbed()
    .setTitle("Ajuda do bot!")
    .setColor("RANDOM")
    .setDescription(
      "👋Bem-vindo @" +
        message.author.tag +
        " a central de comandos utilidades!\n" +
        "\n" +
        "💼Comandos:\n" +
        "😶 =avatar - Mostra o seu avatar ou de alguém mencionado\n" +
        "😀 =falar - Fala algo no mesmo canal escrito este comando ou num mencionado\n" +
        "👻 =apagar - Apaga mensagens no canal digitado. Coloque o número de mensagens a apagar\n" +
        "🤚 =fecharcanal - Não deixa as pessoas digitarem no canal especificado ou no mesmo digitado\n" +
        "👍 =abrircanal - Deixa as pessoas digitarem no canal especificado ou no canal onde o comando foi chamado\n" +
        "🤔 =mute - Muta uma pessoa\n" +
        "🤐 =muterole - O cargo permitido de mutar\n"
    )
    .setFooter("Por: " + message.author.username);

  let embed_help_4 = new Discord.MessageEmbed()
    .setTitle("Ajuda do bot!")
    .setColor("RANDOM")
    .setDescription(
      "👋Bem-vindo @" +
        message.author.tag +
        " a central de comandos de gerenciamento! \n" +
        "\n" +
        "💼Comandos:\n" +
        "✋ =ajuda - Ajuda ;) \n" +
        "🤖 =prefixo - Muda o prefixo atual para outro! Coloque na frente o prefixo desejado! \n"
    )
    .setFooter("Por: " + message.author.username);

  client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.channel) return;

    if (user.id === message.author.id) {
      if (reaction.emoji.name === "🎭") {
        messageEmbed.edit(embed_help_2);
      }
      if (reaction.emoji.name === "🎲") {
        messageEmbed.edit(embed_help_3);
      }
      if (reaction.emoji.name === "🚦") {
        messageEmbed.edit(embed_help_4);
      }
      if (reaction.emoji.name === "⬅️") {
        messageEmbed.edit(embed_help_1);
      }
    }
  });
};
