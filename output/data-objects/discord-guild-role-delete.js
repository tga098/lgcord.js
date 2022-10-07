"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordGuildRoleDelete = void 0;
class DiscordGuildRoleDelete {
    constructor(guild_id, role_id) {
        this.guild_id = guild_id;
        this.role_id = role_id;
    }
    static fromJson(json) {
        const newInst = new DiscordGuildRoleDelete(json.guild_id, json.role_id);
        return newInst;
    }
}
exports.DiscordGuildRoleDelete = DiscordGuildRoleDelete;
