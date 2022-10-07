"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordRole = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
class DiscordRole {
    // managed	boolean	whether this role is managed by an integration
    // mentionable	boolean	whether this role is mentionable
    // tags?	role tags object	the tags this role has
    constructor(id, name, permissions, color, hoist, position) {
        this.id = id;
        this.name = name;
        this.permissions = permissions;
        this.color = color;
        this.hoist = hoist;
        this.position = position;
    }
    static fromJson(json) {
        const newInst = new DiscordRole(json.id, json.name, json.permissions, json.color, json.hoist, json.position);
        newInst.icon = json.icon;
        newInst.unicode_emoji = json.unicode_emoji;
        return newInst;
    }
}
exports.DiscordRole = DiscordRole;
