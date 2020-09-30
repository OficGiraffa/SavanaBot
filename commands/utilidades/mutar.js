const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");

module.exports.run = async (client, message, args, prefix) => {
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.reply("Ops Me parece que você não tem permissão");
  let embederro = new Discord.MessageEmbed()
    .setTitle(`🔇 Comando de Mute:`)
    .setThumbnail("")
    .setDescription(`Mute para aquela pessoa que desobece as regras`)
    .addField(`📝 Exemplo`, `${prefix}mute <@user> 1h <motivo>`)
    .addField(`🕓 tempos`, `<S/M/H/D> S=Segunndos M=Minutos H=Horas D=Dias`)
    .addField(`✋ Permissão`, `**GERENCIAR CARGOS**`)
    .setFooter("você precisa definir um cargo de mutado antes de usar isso!")
    .setColor("#bb00ff");
  const permission = message.channel.permissionsFor(message.client.user);
  if (!permission.has("MANAGE_ROLES")) {
    return message.reply(
      "Pra executar esse comando eu preciso da permissão ```gerenciar mensagens```"
    );
  }
  let mute = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!mute) return message.reply(embederro);

  let motivo = args.slice(2).join(" ");
  if (!motivo) motivo = "nenhum";

  let muterole = db.get(`muterole_${message.guild.id}`);
  if (muterole === null)
    return message.reply(
      `:x: antes de usar esse comando você precisa configurar um cargo para dar pra pessoa, **Para isso use o comando:  ${prefix}muterole <@cargomute>**`
    );
  let role = message.guild.roles.cache.find(role => role.id === muterole);

  let tempo = args[1];
  if (!tempo) return message.reply("e o tempo?");
  if (!tempo.match(/^\d/))
    return message.reply("o tempo que você forneceu não é um número");

  await mute.roles.add(role.id);
  message.reply(
    `**🔇${mute.displayName}** foi mutado(a) por: ${ms(
      ms(tempo)
    )},\n📝Motivo: "**${motivo}**"`
  );
  setTimeout(function() {
    mute.roles.remove(role.id);
    message.channel.send(
      `**🔊${mute.displayName}** Foi desmutado(a),\n📝Motivo por ser Mutado(a): "**${motivo}**"`
    );
  }, ms(tempo));
};
