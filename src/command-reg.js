require("dotenv").config();
// const { version } = require("discord.js");
const { REST, Routes } = require("discord.js");
const commands = [
  {
    name: "quotes",
    description: "Generate a random quote",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
(async () => {
  try {
    console.log("Registering command..."),
      await rest.put(
        Routes.applicationGuildCommands(
          process.env.BOT_ID,
          process.env.SERVER_ID
        ),
        { body: commands }
      );
    console.log("command registed");
  } catch (error) {
    console.log(`An error occured ${error}`);
  }
})();
