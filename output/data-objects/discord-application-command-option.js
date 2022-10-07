"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordApplicationCommandOption = void 0;
const discord_application_command_option_choice_structure_1 = require("./discord-application-command-option-choice-structure");
class DiscordApplicationCommandOption {
    constructor(name, description, type) {
        /**
         * Types for the user to pick from, max 25
         */
        this.choices = [];
        /**
         * Array of application command option if the option is a subcommand or subcommand group type, these nested options will be the parameters
         */
        this.options = [];
        /**
         * If the option is a channel type, the channels shown will be restricted to these types
         */
        this.channel_types = [];
        this.name = name;
        this.description = description;
        this.type = type;
    }
    static fromJson(json) {
        const newInst = new DiscordApplicationCommandOption(json.name, json.description, json.type);
        newInst.required = json.required;
        newInst.choices = json.choices?.map(discord_application_command_option_choice_structure_1.DiscordApplicationCommandOptionChoiceStructure.fromJson) ?? [];
        newInst.options = json.options?.map(DiscordApplicationCommandOption.fromJson) ?? [];
        newInst.channel_types = json.channel_types ?? [];
        newInst.min_value = json.min_value;
        newInst.max_value = json.max_value;
        newInst.autocomplete = json.autocomplete;
        return newInst;
    }
    setRequired() {
        this.required = true;
        return this;
    }
    addChoiceKeyVal(key, value) {
        this.choices.push(new discord_application_command_option_choice_structure_1.DiscordApplicationCommandOptionChoiceStructure(key, value));
        return this;
    }
    addChoice(choice) {
        this.choices.push(choice);
        return this;
    }
}
exports.DiscordApplicationCommandOption = DiscordApplicationCommandOption;
