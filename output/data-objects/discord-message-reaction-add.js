"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordMessageReactionAdd = void 0;
const DiscordAPI = __importStar(require("../api/discord-api"));
const discord_emoji_1 = require("./discord-emoji");
const discord_guild_memeber_1 = require("./discord-guild-memeber");
class DiscordMessageReactionAdd {
    constructor(user_id, channel_id, message_id, emoji) {
        this.user_id = user_id;
        this.channel_id = channel_id;
        this.message_id = message_id;
        this.emoji = emoji;
    }
    static fromJson(json) {
        const newInst = new DiscordMessageReactionAdd(json.user_id, json.channel_id, json.message_id, discord_emoji_1.DiscordEmoji.fromJson(json.emoji));
        newInst.guild_id = json.guild_id;
        newInst.member = json.member && discord_guild_memeber_1.DiscordGuildMember.fromJson(json.member);
        return newInst;
    }
    removeUser(userId) {
        return DiscordAPI.deleteUserReaction(this.channel_id, this.message_id, this.emoji.name ?? '', userId);
    }
    remove() {
        return DiscordAPI.deleteUserReaction(this.channel_id, this.message_id, this.emoji.name ?? '', this.user_id);
    }
}
exports.DiscordMessageReactionAdd = DiscordMessageReactionAdd;
