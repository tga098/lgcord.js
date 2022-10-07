"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordMessageDeleteBulk = void 0;
class DiscordMessageDeleteBulk {
    constructor(ids, channel_id) {
        this.ids = ids;
        this.channel_id = channel_id;
    }
    static fromJson(json) {
        const newInst = new DiscordMessageDeleteBulk(json.ids, json.channel_id);
        newInst.guild_id = json.guild_id;
        return newInst;
    }
}
exports.DiscordMessageDeleteBulk = DiscordMessageDeleteBulk;
