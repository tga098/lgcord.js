"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
exports.__esModule = true;
exports.DiscordMessageDelete = void 0;
var DiscordMessageDelete = /** @class */ (function () {
    function DiscordMessageDelete(id, channel_id) {
        this.id = id;
        this.channel_id = channel_id;
    }
    DiscordMessageDelete.fromJson = function (json) {
        var newInst = new DiscordMessageDelete(json.id, json.channel_id);
        newInst.guild_id = json.guild_id;
        return newInst;
    };
    return DiscordMessageDelete;
}());
exports.DiscordMessageDelete = DiscordMessageDelete;
