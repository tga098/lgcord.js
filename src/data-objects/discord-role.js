"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
exports.__esModule = true;
exports.DiscordRole = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
var DiscordRole = /** @class */ (function () {
    // managed	boolean	whether this role is managed by an integration
    // mentionable	boolean	whether this role is mentionable
    // tags?	role tags object	the tags this role has
    function DiscordRole(id, name, permissions) {
        this.id = id;
        this.name = name;
        this.permissions = permissions;
    }
    DiscordRole.fromJson = function (json) {
        var newInst = new DiscordRole(json.id, json.name, json.permissions);
        return newInst;
    };
    return DiscordRole;
}());
exports.DiscordRole = DiscordRole;
