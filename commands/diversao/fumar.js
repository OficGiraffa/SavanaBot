module.exports.run = async (client, message, args) => {
  let msg = message.channel.send("🚬");
  client.setTimeout((msg) => {msg.edit("🚬💨")}, 1000);
  client.setTimeout((msg) => {msg.edit("🚬  💨")}, 1000);
  client.setTimeout((msg) => {msg.edit("🚬💨  💨")}, 1000);
  client.setTimeout((msg) => {msg.edit("🚬  💨")}, 1000);
  client.setTimeout((msg) => {msg.edit("🚬    💨")}, 1000);
  client.setTimeout((msg) => {msg.edit("🚬")}, 0);
}