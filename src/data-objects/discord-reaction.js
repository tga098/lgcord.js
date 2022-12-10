"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_emoji_1 = require("./discord-emoji");
class DiscordReaction {
    constructor(count, me, emoji) {
        this.count = count;
        this.me = me;
        this.emoji = emoji;
    }
    static fromJson(json) {
        const reaction = new DiscordReaction(json.count, json.me, discord_emoji_1.DiscordEmoji.fromJson(json.emoji));
        return reaction;
    }
}
exports.default = DiscordReaction;
