"use strict";
exports.__esModule = true;
exports.DiscordReady = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
var discord_application_1 = require("./discord-application");
var discord_guild_1 = require("./discord-guild");
var discord_user_1 = require("./discord-user");
var DiscordReady = /** @class */ (function () {
    function DiscordReady(json) {
        this.v = json.v;
        this.user = discord_user_1.DiscordUser.fromJson(json.user);
        this.guilds = json.guilds.map(discord_guild_1.DiscordGuild.fromJson);
        this.session_id = json.session_id;
        this.shard = json.shard;
        this.application = discord_application_1["default"].fromJson(json.application);
    }
    return DiscordReady;
}());
exports.DiscordReady = DiscordReady;
