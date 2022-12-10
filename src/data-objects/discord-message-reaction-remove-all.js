"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordMessageReactionRemoveAll = void 0;
class DiscordMessageReactionRemoveAll {
    constructor(channel_id, message_id) {
        this.channel_id = channel_id;
        this.message_id = message_id;
    }
    static fromJson(json) {
        const newInst = new DiscordMessageReactionRemoveAll(json.channel_id, json.message_id);
        newInst.guild_id = json.guild_id;
        return newInst;
    }
}
exports.DiscordMessageReactionRemoveAll = DiscordMessageReactionRemoveAll;
