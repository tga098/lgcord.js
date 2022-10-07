"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordGuildMemberUpdate = void 0;
const discord_user_1 = require("./discord-user");
class DiscordGuildMemberUpdate {
    constructor(guild_id, roles, user) {
        this.guild_id = guild_id;
        this.roles = roles;
        this.user = user;
    }
    static fromJson(json) {
        const newInst = new DiscordGuildMemberUpdate(json.guild_id, json.roles, discord_user_1.DiscordUser.fromJson(json.user));
        newInst.nick = json.nick;
        newInst.avatar = json.avatar;
        newInst.joined_at = json.joined_at;
        newInst.premium_since = json.premium_since;
        newInst.deaf = json.deaf;
        newInst.mute = json.mute;
        newInst.pending = json.pending;
        newInst.communication_disabled_until = json.communication_disabled_until;
        return newInst;
    }
}
exports.DiscordGuildMemberUpdate = DiscordGuildMemberUpdate;
