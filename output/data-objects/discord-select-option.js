"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordSelectOption = void 0;
const discord_emoji_1 = require("./discord-emoji");
class DiscordSelectOption {
    constructor(label, value) {
        this.label = label;
        this.value = value;
    }
    static fromJson(json) {
        const newInst = new DiscordSelectOption(json.label, json.value);
        newInst.description = json.description;
        newInst.emoji = json.emoji && discord_emoji_1.DiscordEmoji.fromJson(json.emoji);
        newInst.default = json.default;
        return newInst;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
    setEmoji(emoji) {
        this.emoji = emoji;
        return this;
    }
    setDefault(def = true) {
        this.default = def;
        return this;
    }
}
exports.DiscordSelectOption = DiscordSelectOption;
