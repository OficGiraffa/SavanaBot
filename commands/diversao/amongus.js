const Discord = require("discord.js");
  //message.channel.send(". 　　　。　　　　•　 　ﾟ　　。 　　. \n" +
  //                     " 　　　.　　　 　　.　　　　　。　　 。　.\n" +　
  //                     ".　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n" +
  //                     `　ﾟ　　 <@${}> não era um impostor　 。　. \n` +
  //                     ` '　　　 1 impostores restantes! 　 　　。\n` +
  //                      　"　ﾟ　　　.　　　. ,　　　　.　 .");    
module.exports.run = async (client, message, args, prefix) => {
  //Vai julgar aleatoriamente se essa pessoa é ou não o impostor
  //E falar no final se ela é ou não e enviar a mensagem a cima.
  
  //Vê se tem no minimo 2 pessoas mencionadas, se não retorna.
  if (!args[0]){
    return message.reply("Desculpe! É impossível jogar um jogo sem ninguém!");
  } else if (!args[1]){
    return message.reply("Desculpe! Como você vai jogar sozinho? :( ");
  }
  
  //Variavel que armazena o impostor
  let impostor = null;
  
  //Pega cada pessoa mencionada e guarda num array.
  let players = [];
  message.mentions.users.forEach((user) => {
    players.push(user);
  });
  
  //Dá inicio no jogo e mostra algumas informações.
  message.channel.send("ATENÇÃO JOGADORES! Vocês devem votar nos jogadores que colocarei aqui usando :white_check_mark:! (Vocês tem 5s)");
  
  let voted_colls = null;
  //Envia no canal todas as pessoas mencionadas, faz a reação primaria, e cria o coletor.
  players.forEach((player) => {
    let msg = message.channel.send(`${player}`).then((msg) => {
      msg.react("✅");
      
      //Cria o coletor que vai pegar todas as reações que ele receber.
      const filter = (reaction, user) => reaction.emoji.name === "✅" && user != user;
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
  });
  
  let all_msgR = [];
  setTimeout(() => {
  
    message.channel.send("ATENÇÃO! Tempo de votar acabou!");
    voted_colls.forEach((msgReaction) => {
      all_msgR.push(msgReaction);
    });
    
    all_msgR.sort((a, b) => {
      return a.count - b.count;
    });
    
    impostor = all_msgR[0].message.mentions.users.first();
    
    let i = Math.floor(Math.random * 1);
    
    if (i === 0){
       message.channel.send(". 　　　。　　　　•　 　ﾟ　　。 　　. \n" +
                         " 　　　.　　　 　　.　　　　　。　　 。　.\n" +　
                         ".　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n" +
                         `　ﾟ　　 <@${impostor.id}> não era um impostor　 。　. \n` +
                         ` '　　　 1 impostores restantes! 　 　　。\n` +
                              "　ﾟ　　　.　　　. ,　　　　.　 .");    
    } else if (i === 1){
       message.channel.send(". 　　　。　　　　•　 　ﾟ　　。 　　. \n" +
                         " 　　　.　　　 　　.　　　　　。　　 。　.\n" +　
                         ".　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n" +
                         `　ﾟ　　 <@${impostor.id}> era um impostor　 。　. \n` +
                         ` '　　　 0 impostores restantes! 　 　　。\n` +
                              "　ﾟ　　　.　　　. ,　　　　.　 .");    
    };
  
  }, 5500);
}