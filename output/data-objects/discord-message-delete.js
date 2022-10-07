"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordMessageDelete = void 0;
class DiscordMessageDelete {
    constructor(id, channel_id) {
        this.id = id;
        this.channel_id = channel_id;
    }
    static fromJson(json) {
        const newInst = new DiscordMessageDelete(json.id, json.channel_id);
        newInst.guild_id = json.guild_id;
        return newInst;
    }
}
exports.DiscordMessageDelete = DiscordMessageDelete;
