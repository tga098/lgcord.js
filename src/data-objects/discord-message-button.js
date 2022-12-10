"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordMessageButton = void 0;
const discord_component_types_1 = require("../custom-types/discord-component-types");
const discord_component_1 = __importDefault(require("./discord-component"));
class DiscordMessageButton extends discord_component_1.default {
    constructor() {
        super();
        /**
         * Whether the component is disabled, default false
         */
        this.disabled = false;
        super.type = discord_component_types_1.DiscordComponentType.BUTTON;
    }
    setCustomId(id) {
        this.custom_id = id;
        return this;
    }
    setLabel(label) {
        this.label = label;
        return this;
    }
    setStyle(style) {
        this.style = style;
        return this;
    }
}
exports.DiscordMessageButton = DiscordMessageButton;
