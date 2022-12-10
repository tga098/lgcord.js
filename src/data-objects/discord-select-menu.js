"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordSelectMenu = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const discord_component_types_1 = require("../custom-types/discord-component-types");
const discord_component_1 = __importDefault(require("./discord-component"));
class DiscordSelectMenu extends discord_component_1.default {
    constructor() {
        super();
        /**
         * Whether the component is disabled, default false
         */
        this.disabled = false;
        /**
         * The choices in the select, max 25
         */
        this.options = [];
        /**
         * The minimum number of items that must be chosen; default 1, min 0, max 25
         */
        this.min_values = 1;
        /**
         * The maximum number of items that can be chosen; default 1, max 25
         */
        this.max_values = 1;
        super.type = discord_component_types_1.DiscordComponentType.SELECT_MENU;
    }
    addOptions(...options) {
        this.options = options;
        return this;
    }
    setCustomId(id) {
        this.custom_id = id;
        return this;
    }
}
exports.DiscordSelectMenu = DiscordSelectMenu;
