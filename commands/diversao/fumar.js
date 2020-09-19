module.exports.run = async (client, message, args) => {
  let msg = message.channel.send("🚬").then(async (msg) => {
    await client.setTimeout(() => {msg.edit("🚬  💨")}, 1000);
    await client.setTimeout(() => {msg.edit("🚬      💨")}, 1000);
    await client.setTimeout(() => {msg.edit("🚬 💨        💨")}, 1000);
    await client.setTimeout(() => {msg.edit("🚬      💨       💨")}, 1000);
    await client.setTimeout(() => {msg.edit("🚬           💨")}, 1000);
    await client.setTimeout(() => {msg.edit("🚬                    💨")}, 1000);
    await client.setTimeout(() => {msg.edit("🚬                      💨 ")}, 1000);
    msg.edit("🚬");
    })
}