require("dotenv").config();

const { Client, IntentsBitField } = require("discord.js");
const axios = require("axios");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (bot) => {
  console.log(`${bot.user.tag} is now running`);
});

client.on("messageCreate", async (msg) => {
  if (msg.author.bot) return;
  if (msg.content.toLocaleLowerCase() === "hello") {
    msg.reply(`Hello, ${client.user.username}`);
  } else if (msg.content === "!quote") {
    let quoteContent = await axios.get("https://dummyjson.com/quotes");
    let index = 
     Math.floor(Math.random()* 10)+1;
    msg.reply(`${quoteContent.data['quotes'][index].quote}`);
  } else if (msg.content === "!challenge"){
    let challeng = ''
    msg.reply(`Get a challenge here`)
  }else {
    
    msg.reply("I would like to help, but I don't understand you");
  }
});

client.login(process.env.TOKEN);
