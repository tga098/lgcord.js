"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordApplicationCommandPermissions = void 0;
class DiscordApplicationCommandPermissions {
    // permissions	array of application command permissions	Permissions for the command in the guild, max of 100
    constructor(id, application_id, guild_id) {
        this.id = id;
        this.application_id = application_id;
        this.guild_id = guild_id;
    }
    static fromJson(json) {
        const newInst = new DiscordApplicationCommandPermissions(json.id, json.application_id, json.guild_id);
        return newInst;
    }
}
exports.DiscordApplicationCommandPermissions = DiscordApplicationCommandPermissions;
