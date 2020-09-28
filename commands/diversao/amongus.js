const Discord = require("discord.js");
  //message.channel.send(". 　　　。　　　　•　 　ﾟ　　。 　　. \n" +
  //                     " 　　　.　　　 　　.　　　　　。　　 。　.\n" +　
  //                     ".　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n" +
  //                     `　ﾟ　　 <@${}> não era um impostor　 。　. \n` +
  //                     ` '　　　 1 impostores restantes! 　 　　。\n` +
  //                      　"　ﾟ　　　.　　　. ,　　　　.　 .");    
module.exports.run = async (client, message, args, prefix) => {
  //O bot vai reagir cada mensagem com :white_check_mark: (Não vai contar)
  //As pessoas vão poder votar no tempo escolhido
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
  
  //Envia no canal todas as pessoas mencionadas, faz a reação primaria, e cria o coletor.
  players.forEach((player) => {
    let msg = message.channel.send(`<@${player.id}>`);
    msg.react("✅");
  })
}
