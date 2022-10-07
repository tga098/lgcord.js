"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
exports.__esModule = true;
exports.DiscordMessageReactionAdd = void 0;
var DiscordAPI = require("../api/discord-api");
var discord_emoji_1 = require("./discord-emoji");
var discord_guild_memeber_1 = require("./discord-guild-memeber");
var DiscordMessageReactionAdd = /** @class */ (function () {
    function DiscordMessageReactionAdd(user_id, channel_id, message_id, emoji) {
        this.user_id = user_id;
        this.channel_id = channel_id;
        this.message_id = message_id;
        this.emoji = emoji;
    }
    DiscordMessageReactionAdd.fromJson = function (json) {
        var newInst = new DiscordMessageReactionAdd(json.user_id, json.channel_id, json.message_id, discord_emoji_1.DiscordEmoji.fromJson(json.emoji));
        newInst.guild_id = json.guild_id;
        newInst.member = json.member && discord_guild_memeber_1.DiscordGuildMember.fromJson(json.member);
        return newInst;
    };
    DiscordMessageReactionAdd.prototype.removeUser = function (userId) {
        var _a;
        return DiscordAPI.deleteUserReaction(this.channel_id, this.message_id, (_a = this.emoji.name) !== null && _a !== void 0 ? _a : '', userId);
    };
    DiscordMessageReactionAdd.prototype.remove = function () {
        var _a;
        return DiscordAPI.deleteUserReaction(this.channel_id, this.message_id, (_a = this.emoji.name) !== null && _a !== void 0 ? _a : '', this.user_id);
    };
    return DiscordMessageReactionAdd;
}());
exports.DiscordMessageReactionAdd = DiscordMessageReactionAdd;
