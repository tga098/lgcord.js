"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordMessageActionRow = void 0;
const discord_component_types_1 = require("../custom-types/discord-component-types");
const discord_component_1 = __importDefault(require("./discord-component"));
class DiscordMessageActionRow extends discord_component_1.default {
    constructor() {
        super();
        /**
         * A list of child components
         */
        this.components = [];
        super.type = discord_component_types_1.DiscordComponentType.ACTION_ROW;
    }
    addComponents(...components) {
        this.components = components;
        return this;
    }
}
exports.DiscordMessageActionRow = DiscordMessageActionRow;
