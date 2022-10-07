"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordEmoji = void 0;
const discord_role_1 = require("./discord-role");
const discord_user_1 = require("./discord-user");
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
class DiscordEmoji {
    static fromJson(json) {
        const newInst = new DiscordEmoji();
        newInst.id = json.id;
        newInst.name = json.name;
        newInst.roles = json.roles?.map((r) => discord_role_1.DiscordRole.fromJson(r));
        newInst.require_colons = json.require_colons;
        newInst.managed = json.managed;
        newInst.animated = json.animated;
        newInst.available = json.available;
        return newInst;
    }
}
exports.DiscordEmoji = DiscordEmoji;
