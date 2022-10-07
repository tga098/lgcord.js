"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
exports.__esModule = true;
exports.DiscordGuildMember = void 0;
var discord_user_1 = require("./discord-user");
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
var DiscordGuildMember = /** @class */ (function () {
    function DiscordGuildMember() {
        // public avatar?	?string	the member's guild avatar hash
        this.roles = []; // Array of role object ids
    }
    DiscordGuildMember.fromJson = function (json, parentUser) {
        var _a;
        if (parentUser === void 0) { parentUser = undefined; }
        var newInst = new DiscordGuildMember();
        newInst.user = json.user ? discord_user_1.DiscordUser.fromJson(json.user) : parentUser;
        newInst.nick = json.nick;
        newInst.roles = (_a = json.roles) !== null && _a !== void 0 ? _a : [];
        newInst.permissions = json.permissions;
        return newInst;
    };
    return DiscordGuildMember;
}());
exports.DiscordGuildMember = DiscordGuildMember;
