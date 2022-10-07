"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordGuildMemberRemove = void 0;
const discord_user_1 = require("./discord-user");
class DiscordGuildMemberRemove {
    constructor(guild_id, user) {
        this.guild_id = guild_id;
        this.user = user;
    }
    static fromJson(json) {
        const newInst = new DiscordGuildMemberRemove(json.guild_id, discord_user_1.DiscordUser.fromJson(json.user));
        return newInst;
    }
}
exports.DiscordGuildMemberRemove = DiscordGuildMemberRemove;
