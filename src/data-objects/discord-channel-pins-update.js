"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordChannelPinsUpdate = void 0;
class DiscordChannelPinsUpdate {
    constructor(channel_id) {
        this.channel_id = channel_id;
    }
    static fromJson(json) {
        const newInst = new DiscordChannelPinsUpdate(json.channel_id);
        newInst.guild_id = json.guild_id;
        newInst.last_pin_timestamp = json.last_pin_timestamp;
        return newInst;
    }
}
exports.DiscordChannelPinsUpdate = DiscordChannelPinsUpdate;
