<div align="center">
  <p> 
    <a href="https://discord.gg/cYJD2Rkb2n" title="Join our Discord Server"><img alt="Built with Love" src="https://forthebadge.com/images/badges/built-with-love.svg"></a>
    <a href="https://discord.gg/cYJD2Rkb2n" title="Join our Discord Server"><img alt="Made with Javascript" src="https://forthebadge.com/images/badges/made-with-javascript.svg"></a>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/lgcord.js"><img src="https://img.shields.io/npm/v/remote-map-cache.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/lgcord.js"><img src="https://img.shields.io/npm/dt/lgcord.js.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/lgcord.js/"><img src="https://nodei.co/npm/lgcord.js.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>


<img src="https://cdn.discordapp.com/attachments/929275625934581820/1028576044162228264/unknown.png" size="30%">

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
