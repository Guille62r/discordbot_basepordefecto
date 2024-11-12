// archivo index.js
const {Client, Events} = require("discord.js");

// crear nuevo cliente de discord
const client = new Client({
    intents: 53608447
})

// creando nuestro prime evento
client.on(Events.ClientReady, async () => {
    console.log(`Conectado como ${client.user.username}!`)
});

// conectar cliente a nuestra aplicación de discord
client.login("")