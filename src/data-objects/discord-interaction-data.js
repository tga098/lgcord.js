"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_application_command_interaction_data_option_1 = __importDefault(require("./discord-application-command-interaction-data-option"));
const discord_interaction_resolved_data_1 = __importDefault(require("./discord-interaction-resolved-data"));
class DiscordInteractionData {
    constructor(id, name, type) {
        /**
         * The params + values from the user
         */
        this.options = [];
        /**
         * The values the user selected
         */
        this.values = [];
        this.id = id;
        this.name = name;
        this.type = type;
    }
    static fromJson(json) {
        const newInst = new DiscordInteractionData(json.id, json.name, json.type);
        newInst.resolved = json.resolved && discord_interaction_resolved_data_1.default.fromJson(json.resolved);
        newInst.options = json.options?.map(discord_application_command_interaction_data_option_1.default.fromJson) ?? [];
        newInst.custom_id = json.custom_id;
        newInst.component_type = json.component_type;
        newInst.values = json.values;
        newInst.target_id = json.target_id;
        return newInst;
    }
}
exports.default = DiscordInteractionData;
