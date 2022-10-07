"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
exports.__esModule = true;
exports.DiscordMessageDeleteBulk = void 0;
var DiscordMessageDeleteBulk = /** @class */ (function () {
    function DiscordMessageDeleteBulk(ids, channel_id) {
        this.ids = ids;
        this.channel_id = channel_id;
    }
    DiscordMessageDeleteBulk.fromJson = function (json) {
        var newInst = new DiscordMessageDeleteBulk(json.ids, json.channel_id);
        newInst.guild_id = json.guild_id;
        return newInst;
    };
    return DiscordMessageDeleteBulk;
}());
exports.DiscordMessageDeleteBulk = DiscordMessageDeleteBulk;
