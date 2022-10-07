"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordReady = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const discord_application_1 = __importDefault(require("./discord-application"));
const discord_guild_1 = require("./discord-guild");
const discord_user_1 = require("./discord-user");
class DiscordReady {
    constructor(json) {
        this.v = json.v;
        this.user = discord_user_1.DiscordUser.fromJson(json.user);
        this.guilds = json.guilds.map(discord_guild_1.DiscordGuild.fromJson);
        this.session_id = json.session_id;
        this.resume_gateway_url = json.resume_gateway_url;
        this.shard = json.shard;
        this.application = discord_application_1.default.fromJson(json.application);
    }
}
exports.DiscordReady = DiscordReady;
