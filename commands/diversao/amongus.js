const Discord = require("discord.js");
  //message.channel.send(". 　　　。　　　　•　 　ﾟ　　。 　　. \n" +
  //                     " 　　　.　　　 　　.　　　　　。　　 。　.\n" +　
  //                     ".　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n" +
  //                     `　ﾟ　　 <@${}> não era um impostor　 。　. \n` +
  //                     ` '　　　 1 impostores restantes! 　 　　。\n` +
  //                      　"　ﾟ　　　.　　　. ,　　　　.　 .");    
module.exports.run = async (client, message, args) => {
  //A pessoa digita =amongus (mencione as pessoas que vão participar)
  //O bot vai falar o tempo que a pessoa tem e que deve votar usando a reação-emoji :white_check_mark: 
  //O bot envia no mesmo canal cada pessoa mencionada separadamente.
  //O bot vai reagir cada mensagem com :white_check_mark: (Não vai contar)
  //As pessoas vão poder votar no tempo escolhido
  //Ele vai pegar cada reação de todas as mensagens e vai guardar num array
  //Depois ele vai ordenar as mensagens no array de acordo com os votos :white_check_mark: 
  //Vai pegar a primeira reação-mensagem-menção(Pessoa votada) do array
  //Vai julgar aleatoriamente se essa pessoa é ou não o impostor
  //E falar no final se ela é ou não e enviar a mensagem a cima.
  
  if (!args[0]){
    return message.reply("Desculpe! É impossível jogar um jogo sem ninguém!");
  } else if (!args[1]){
    return message.reply("Desculpe! Como você vai jogar sozinho? :( ");
  }
  
}
