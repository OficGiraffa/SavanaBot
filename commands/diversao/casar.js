const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

const erro = Discord.MessageEmbed

.setColor('BLUE')
.setTitle(':giraffe: use ``=ajuda`` para ver todos os meus comandos!')
.setDescription('<a:Duvida:760338776660115456> ``=casar``\nO amor está no ar! Se case com a sua webcrush ou com sua webnamorada, os casamentos são eternos então preste atenção com quem vai casar!\n\n<a:KomaYaaaaaaaaaaaaaay:760339715441295381> **como usar?** ``=marry <@user>``\n🔀 **Sinônimos**\n``marry, casar``')

let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if(!user) return(erro)
let casados = db.get('casados')

message.channel.send('teste!')
}