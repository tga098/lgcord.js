"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
exports.__esModule = true;
exports.DiscordEmoji = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
var DiscordEmoji = /** @class */ (function () {
    function DiscordEmoji() {
    }
    // roles?	array of role object ids	roles allowed to use this emoji
    // user?	user object	user that created this emoji
    // require_colons?	boolean	whether this emoji must be wrapped in colons
    // managed?	boolean	whether this emoji is managed
    // animated?	boolean	whether this emoji is animated
    // available?	boolean	whether this emoji can be used, may be false due to loss of Server Boosts
    DiscordEmoji.fromJson = function (json) {
        var newInst = new DiscordEmoji();
        newInst.id = json.id;
        newInst.name = json.name;
        return newInst;
    };
    return DiscordEmoji;
}());
exports.DiscordEmoji = DiscordEmoji;
