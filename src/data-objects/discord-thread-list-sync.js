"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordThreadListSync = void 0;
class DiscordThreadListSync {
    constructor(guild_id, threads, members) {
        this.guild_id = guild_id;
        this.threads = threads;
        this.members = members;
    }
    static fromJson(json) {
        const newInst = new DiscordThreadListSync(json.guild_id, json.threads, json.members);
        newInst.channel_ids = json.channel_ids;
        return newInst;
    }
}
exports.DiscordThreadListSync = DiscordThreadListSync;
