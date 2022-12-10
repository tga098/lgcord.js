"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordMessageReactionRemove = void 0;
const discord_emoji_1 = require("./discord-emoji");
class DiscordMessageReactionRemove {
    constructor(user_id, channel_id, message_id, emoji) {
        this.user_id = user_id;
        this.channel_id = channel_id;
        this.message_id = message_id;
        this.emoji = emoji;
    }
    static fromJson(json) {
        const newInst = new DiscordMessageReactionRemove(json.user_id, json.channel_id, json.message_id, discord_emoji_1.DiscordEmoji.fromJson(json.emoji));
        newInst.guild_id = json.guild_id;
        return newInst;
    }
}
exports.DiscordMessageReactionRemove = DiscordMessageReactionRemove;
