<h1 align="center">LGcord.Js</h1>

<img src="https://cdn.discordapp.com/attachments/972146644067971153/1027552655112945724/1665058019810.png" size="50%">

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

# Documentation
 > Documentation avaiable at https://lgcordjs.logixdev.net
