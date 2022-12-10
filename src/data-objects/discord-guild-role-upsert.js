"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordGuildRoleUpsert = void 0;
const discord_role_1 = require("./discord-role");
class DiscordGuildRoleUpsert {
    constructor(guild_id, role) {
        this.guild_id = guild_id;
        this.role = role;
    }
    static fromJson(json) {
        const newInst = new DiscordGuildRoleUpsert(json.guild_id, discord_role_1.DiscordRole.fromJson(json.role));
        return newInst;
    }
}
exports.DiscordGuildRoleUpsert = DiscordGuildRoleUpsert;
