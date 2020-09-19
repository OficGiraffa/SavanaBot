module.exports.run = async (client, message, args) => {
  let msg = message.channel.send("🚬").then((msg) => {
    setTimeout((msg) => {msg.edit("🚬💨")}, 1000);
  });
}
