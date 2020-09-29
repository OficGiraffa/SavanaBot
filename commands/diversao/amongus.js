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
  
  //Pega cada pessoa mencionada e guarda num array.
  let players = [];
  message.mentions.users.forEach((user) => {
    players.push(user);
  });
  
  //Dá inicio no jogo e mostra algumas informações.
  message.channel.send("ATENÇÃO JOGADORES! Vocês devem votar nos jogadores que colocarei aqui usando :white_check_mark:! (Vocês tem 10s)");
  
  let voted_colls = [];
  //Envia no canal todas as pessoas mencionadas, faz a reação primaria, e cria o coletor.
  players.forEach((player) => {
    let msg = message.channel.send(`${player}`).then((msg) => {
      msg.react("✅");
      
      //Cria o coletor que vai pegar todas as reações que ele receber.
      const filter = (reaction, user) => reaction.emoji.name === "✅" && !user === user.bot;
      const reactionCol = msg.createReactionCollector(filter, { time: 10000 });
      
      //Quando alguém reagir ele vai mostrar a pessoa que votou e em quem votou
      reactionCol.on("collect", (reaction, user) => {
        message.channel.send(`<@${user.id}> votou em ${reaction.message.mentions.users.first()}`)
      });
      //Quando o coletor acabar ele vai enviar tudo que foi coletado para o voted_colls
      reactionCol.on("end", (collected) => {
        voted_colls.push(collected);
      });
    });
  });

  setTimeout(() => {
    console.log(voted_colls);
    voted_colls.sort((a, b) => {
      return a.count - b.count;
    });
    console.log(voted_colls);
    
    let impostor = voted_colls[0].first().message.mentions.users.first();
    //console.log(impostor);
    
    let i = Math.floor(Math.random() * 1);

    if (i == 0){
       /*message.channel.send(". 　　　。　　　　•　 　ﾟ　　。 　　. \n" +
                         " 　　　.　　　 　　.　　　　　。　　 。　.\n" +　
                         ".　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n" +
                         `　ﾟ　　 <@${impostor.id}> não era um impostor　 。　. \n` +
                         ` '　　　 Você perderam!     　 　　。\n` +
                              "　ﾟ　　　.　　　. ,　　　　.　 .");    */
      let msg_embed = new Discord.MessageEmbed()
      .setTitle("ATENÇÃO! Fim de jogo! Perderam!")
      .setDescription(". 　　　。　　　　•　 　ﾟ　　。 　　. \n" +
                         " 　　　.　　　 　　.　　　　　。　　 。　.\n" +　
                         ".　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n" +
                         `　ﾟ　　 <@${impostor.id}> não era um impostor　 。　. \n` +
                         ` '　　　 Vocês perderam!     　 　　。\n` +
                              "　ﾟ　　　.　　　. ,　　　　.　 .")
      .setColor("RED")
      .setFooter("Jogo iniciado por: " + message.author.username);
    } else if (i == 1){
      let msg_embed = new Discord.MessageEmbed()
      .setTitle("ATENÇÃO! Fim de jogo! Conseguiram!")
      .setDescription(". 　　　。　　　　•　 　ﾟ　　。 　　. \n" +
                         " 　　　.　　　 　　.　　　　　。　　 。　.\n" +　
                         ".　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n" +
                         `　ﾟ　　 <@${impostor.id}> era um impostor　 。　. \n` +
                         ` '　　　 Vocês ganharam!     　 　　。\n` +
                              "　ﾟ　　　.　　　. ,　　　　.　 .")
      .setColor("RED")
      .setFooter("Jogo iniciado por: " + message.author.username);
    };
  
  }, 10550);
}