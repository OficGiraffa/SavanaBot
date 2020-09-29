const Discord = require("discord.js");
  //message.channel.send(". 　　　。　　　　•　 　ﾟ　　。 　　. \n" +
  //                     " 　　　.　　　 　　.　　　　　。　　 。　.\n" +　
  //                     ".　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n" +
  //                     `　ﾟ　　 <@${}> não era um impostor　 。　. \n` +
  //                     ` '　　　 1 impostores restantes! 　 　　。\n` +
  //                      　"　ﾟ　　　.　　　. ,　　　　.　 .");    
module.exports.run = async (client, message, args, prefix) => {
  //Vai falar quem votou em quem no chat, no momento do voto da pessoa.
  //Ele vai pegar cada reação de todas as mensagens e vai guardar num array
  //Depois ele vai ordenar as mensagens no array de acordo com os votos :white_check_mark: 
  //Vai pegar a primeira reação-mensagem-menção(Pessoa votada) do array
  //Vai julgar aleatoriamente se essa pessoa é ou não o impostor
  //E falar no final se ela é ou não e enviar a mensagem a cima.
  
  //Vê se tem no minimo 2 pessoas mencionadas, se não retorna.
  if (!args[0]){
    return message.reply("Desculpe! É impossível jogar um jogo sem ninguém!");
  } else if (!args[1]){
    return message.reply("Desculpe! Como você vai jogar sozinho? :( ");
  }
  
  //Pega cada pessoa mencionada e guarda num array.
  let players = [];
  message.mentions.users.forEach((user) => {
    players.push(user);
  });
  
  //Dá inicio no jogo e mostra algumas informações.
  message.channel.send("ATENÇÃO JOGADORES! Vocês devem votar nos jogadores que colocarei aqui usando :white_check_mark:! (Vocês tem 5s)");
  
  let voted_colls = null;
  //Envia no canal todas as pessoas mencionadas, faz a reação primaria, e cria o coletor.
  for (let player = 0; player < players.length; player++){
    let msg = message.channel.send(`${players[player]}`).then((msg) => {
      msg.react("✅");
      
      //Cria o coletor que vai pegar todas as reações que ele receber.
      const filter = (reaction, user) => reaction.emoji.name === "✅";
      const reactionCol = msg.createReactionCollector(filter, { time: 5000 });
      
      //Quando alguém reagir ele vai mostrar a pessoa que votou e em quem votou
      reactionCol.on("collect", (reaction, user) => {
        message.channel.send(`<@${user.id}> votou em ${reaction.message.mentions.users.first()}`)
      });
      //Quando o coletor acabar ele vai enviar tudo que foi coletado para o voted_colls
      reactionCol.on("end", (collected) => {
        voted_colls = collected;
      });
    });
  }
  setTimeout(() => {
    return select_voted(voted_colls, message);
  }, 5010);
}

function select_voted(voted_colls, message){
  let players_voted = [];
  voted_colls.forEach((r) => {
    players_voted.push(r);
  });
}