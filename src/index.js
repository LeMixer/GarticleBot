const FS = require("fs");
const { Client, Intents, Collection } = require("discord.js");
const newLocal = "../config.json";
const { token } = require(newLocal);

// Create a new client instance
const client = new Client({ intents: [ Intents.FLAGS.GUILDS ] });

client.commands = new Collection();
const COMMAND_FILES = FS.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const FILE of COMMAND_FILES) {
    const COMMAND = require(`./commands/${FILE}`);

    client.commands.set(COMMAND.data.name, COMMAND);
}

// When the client is ready, run this code (only once)
client.once("ready", () => {
    console.log("Ready!");
});

client
    .on("warn", console.log)
    .on("debug", console.log);

client.once("warn", message => {
    console.log(message);
});

process.on("uncaughtException", error => {
    console.log(error);
});

process.on("unhandledRejection", error => {
    console.error("Unhandled promise rejection:", error);
});


client.on("interactionCreate", async interaction => {
    if (!interaction.isCommand())
        return;

    const command = client.commands.get(interaction.commandName);


    if (!command)
        return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        // await interaction.reply({ content: 'There was an error while executing this command!\nPlease contact LearnToChill#4777 for support.', ephemeral: true});
    }
});

// Login to Discord with your client's token
client.login(token);
