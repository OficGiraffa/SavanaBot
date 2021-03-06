const express = require("express");
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(
    `Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos
const Fs = require("fs");

client.on("ready", async message => {
  let status = [
    "Criador: @Ofic_Giraffa",
    "Prefixo inicial: =",
    "Digite: =ajuda para ajuda",
    "#LutePorSuaLiberdade"
  ];
  setInterval(() => {
    client.user.setActivity(status[Math.floor(Math.random() * status.length)]);
  }, 10000);

  let servers = client.guilds.cache.size;

  let embed_status = new Discord.MessageEmbed()
    .setTitle("Status: Ligado ou reiniciado")
    .setDescription(
      `Sou o SavanaBot! Estou em ${servers} servers e estou pronto para uso!\n` +
        `Neste server tem ${
          client.guilds.cache.get("759215232844562453").memberCount
        } membros!`
    )
    .setColor("GREEN")
    .setFooter("SavanaBot_Status");

  client.guilds.cache
    .get("759215232844562453")
    .channels.cache.get("760277403808825355")
    .send(embed_status);

  client.guilds.cache
    .get("738458523775533177")
    .channels.cache.get("739847372116459592")
    .setTopic(
      "Membros: " + client.guilds.cache.get("738458523775533177").memberCount
    );
});

client.on("guildMemberAdd", async member => {
  client.guilds.cache
    .get("738458523775533177")
    .channels.cache.get("739847372116459592")
    .setTopic(
      "Membros: " + client.guilds.cache.get("738458523775533177").memberCount
    );
});
client.on("guildMemberRemove", async member => {
  client.guilds.cache
    .get("738458523775533177")
    .channels.cache.get("739847372116459592")
    .setTopic(
      "Membros: " + client.guilds.cache.get("738458523775533177").memberCount
    );
});

client.on("message", async message => {
  let prefixes_file = Fs.readFileSync("./prefixes.json", "utf8");
  let prefixes = JSON.parse(prefixes_file);

  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }

  let prefix = prefixes[message.guild.id].prefixes;
  //console.log(prefix);

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.content.startsWith(prefix)) return;
  if (
    message.content.startsWith(`<@!${client.user.id}`) ||
    message.content.startsWith(`<@${client.user.id}`)
  )
    return;

  let args = message.content
    .trim()
    .split(" ")
    .slice(1);
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  command = command.toLowerCase();
  
  if (message.content === (`<@${756590483165151302}>`)){
    message.channel.send("FALA CAMBADA IZIZIZI AQUI É XANDÃO PORA");
  };
  
  try {
    let commandFile = require(`./commands/utilidades/${command}.js`);

    //delete require.cache(require.resolve(`./commands/${command}.js`));

    return commandFile.run(client, message, args, prefix);
  } catch {
    try {
      let commandFile = require(`./commands/diversao/${command}.js`);

      return commandFile.run(client, message, args, prefix);
    } catch {
      try {
        let commandFile = require(`./commands/gerenciamento/${command}.js`);

        return commandFile.run(client, message, args, prefix);
      } catch (err) {
          console.log(err);
      }
    }
  }
});

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token
