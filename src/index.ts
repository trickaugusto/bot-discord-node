import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent]
});

client.on('messageCreate', (message) => {

  console.log('message', message);
  if (message.author.bot) return;

  // author.id = id do bot
  /**
   * aqui busca todas os inputs do banco de dados
   * 
   * bate com o input
   * retorna a resposta baseado no id do input recuperado do db
   */
  message.channel.send(`You said: ${message.content}`);
});

client.login(process.env.DISCORD_TOKEN);

console.log('Bot started!');