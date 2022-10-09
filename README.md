<h1 align="center">LGcord.Js</h1>

<img src="https://cdn.discordapp.com/attachments/959752620103319592/1028575159931637760/1665301818603.png">

> **A Nodejs Discord API wrapper. This is a small library that allows you to interact with Discord API to make discord bots**

## Installation

> **Nodejs 16.9.0 or higher is needed**

```js
npm install lgcord.js
```

## Usage

> **Make a basic bot using lgcord.js**

```js
const { Client, INTENTS } = require("lgcord.js")


const client = new Client([
    INTENTS.GUILDS, INTENTS.GUILD_MESSAGES, INTENTS.GUILD_MESSAGE_REACTIONS
])

client.on('ready', ready => {
    console.log(`Logged in as ${ready.user.username}`);
});

client.login("bot token here");

```

# Events Available:

- messageCreate *reply to a message or get info a message sent/receieved by the bot*
- messageDelete *get info of a message when deleted*
- messageUpdate *get info of a message if it gets updated/edited*

*MORE EVENTS DOCS WILL BE ADDED*

Embed Example:

```js

const { DiscordEmbed } = require("lgcord.js")

let embed = new DiscordEmbed()
.setTitle("Hello World")
.setColor("Color")
.setDescription('Bot using lgcord.js')
.setFooter('Footer')
.setTimestamp()



```
