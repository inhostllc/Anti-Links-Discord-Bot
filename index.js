require('dotenv').config(); // Import and configure dotenv

// Require the Discord.js module
const { Client, Intents, WebhookClient } = require('discord.js');

// Create a new Discord client instance
const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

// Retrieve bot token and webhook URL from environment variables
const token = process.env.DISCORD_TOKEN;
const webhookUrl = process.env.WEBHOOK_URL;

// Define the whitelisted channel IDs 
const whitelistedChannels = ['1141168430620348517', '991703210731507772', '1089804113702813716', '1089804219181178901', '1089808293519704135', '1089811203498455090'];

// Define the ignored roles IDs
const ignoredRoles = ['839237666545205248', '985147196330635304', '1094649454654660788', '1209638036485308417'];

// Function to check if a channel is whitelisted
const isWhitelistedChannel = (channelId) => whitelistedChannels.includes(channelId);

// Function to check if a user has any ignored role
const hasIgnoredRole = (member) => {
    return member.roles.cache.some(role => ignoredRoles.includes(role.id));
};

// Function to send log message to webhook channel
const sendLogToWebhook = async (message) => {
    const webhook = new WebhookClient({ url: webhookUrl });
    await webhook.send(message);
};

// Event listener for when the bot is ready
client.once('ready', () => {
    console.log('Bot is ready!');
});

// Event listener for when a message is sent
client.on('messageCreate', async (message) => {
    // Check if the message contains any URLs
    if (message.content.match(/https?:\/\/\S+/gi)) {
        // Check if the channel is not whitelisted and the sender does not have any ignored role
        if (!isWhitelistedChannel(message.channel.id) && !hasIgnoredRole(message.member)) {
            // Delete the message containing the URL
            message.delete()
                .then(async () => {
                    // Send log to webhook channel
                    await sendLogToWebhook(`Deleted message from ${message.author.tag} in #${message.channel.name} containing a link.`);
                })
                .catch(console.error);
        }
    }
});

// Log in to Discord with your app's token
client.login(token);
