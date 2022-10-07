"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordGuildMember = void 0;
const discord_user_1 = require("./discord-user");
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
class DiscordGuildMember {
    constructor() {
        /**
         * Array of role object ids
         */
        this.roles = [];
    }
    static fromJson(json, parentUser = undefined) {
        const newInst = new DiscordGuildMember();
        newInst.user = json.user ? discord_user_1.DiscordUser.fromJson(json.user) : parentUser;
        newInst.nick = json.nick;
        newInst.avatar = json.avatar;
        newInst.roles = json.roles ?? [];
        newInst.permissions = json.permissions;
        return newInst;
    }
}
exports.DiscordGuildMember = DiscordGuildMember;
