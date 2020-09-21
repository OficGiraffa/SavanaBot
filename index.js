const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos

client.on("ready", async message => {
  let status = [
    "Criador: @Ofic_Giraffa",
    "Prefixo inicial: =",
    "Digite: =ajuda para ajuda"
  ];
  client.user.setActivity(status[Math.floor(Math.random() * status.length)]);
})

client.on("guildMemberAdd", member => {
  member.guild.channels.get("739898220309643274").reply("BEM VINDO OTARIUKSKSKSKKAHA");
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.content.startsWith(config.prefix)) return;
  //if (message.content.startsWith(`<@!${client.user.id}`) || message.content.startsWith(`<@${client.user.id}`)) return;
  
  let args = message.content.split(" ").slice(1);
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  command = command.toLowerCase();
  
  try {
    let commandFile = require(`./commands/funcoes_basicas/${command}.js`);
    
    //delete require.cache(require.resolve(`./commands/${command}.js`));
    
    return commandFile.run(client, message, args);
    
  } catch {
    
    try {
      
      let commandFile = require(`./commands/diversao/${command}.js`);
      
      return commandFile.run(client, message, args);
      
    } catch {
      
      try {
      
      let commandFile = require(`./commands/gerenciamento/${command}.js`);
      
      return commandFile.run(client, message, args);
      
    } catch (err) {
      
      console.log(err);
    }
  }
  }
});



client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token

