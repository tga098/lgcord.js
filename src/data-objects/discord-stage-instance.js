"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordStageInstance = void 0;
class DiscordStageInstance {
    constructor(id, guild_id, channel_id, topic, privacy_level) {
        this.id = id;
        this.guild_id = guild_id;
        this.channel_id = channel_id;
        this.topic = topic;
        this.privacy_level = privacy_level;
    }
    static fromJson(json) {
        const newInst = new DiscordStageInstance(json.id, json.guild_id, json.channel_id, json.topic, json.privacy_level);
        newInst.discoverable_disabled = json.discoverable_disabled;
        newInst.guild_scheduled_event_id = json.guild_scheduled_event_id;
        return newInst;
    }
}
exports.DiscordStageInstance = DiscordStageInstance;
