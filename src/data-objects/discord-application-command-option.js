"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
exports.__esModule = true;
exports.DiscordApplicationCommandOption = void 0;
var discord_application_command_option_choice_structure_1 = require("./discord-application-command-option-choice-structure");
var DiscordApplicationCommandOption = /** @class */ (function () {
    function DiscordApplicationCommandOption(name, description, type) {
        this.choices = []; // Types for the user to pick from, max 25
        this.options = []; // Array of application command option if the option is a subcommand or subcommand group type, these nested options will be the parameters
        this.channel_types = []; // If the option is a channel type, the channels shown will be restricted to these types
        this.name = name;
        this.description = description;
        this.type = type;
    }
    DiscordApplicationCommandOption.fromJson = function (json) {
        var _a, _b, _c, _d, _e;
        var newInst = new DiscordApplicationCommandOption(json.name, json.description, json.type);
        newInst.required = json.required;
        newInst.choices = (_b = (_a = json.choices) === null || _a === void 0 ? void 0 : _a.map(discord_application_command_option_choice_structure_1.DiscordApplicationCommandOptionChoiceStructure.fromJson)) !== null && _b !== void 0 ? _b : [];
        newInst.options = (_d = (_c = json.options) === null || _c === void 0 ? void 0 : _c.map(DiscordApplicationCommandOption.fromJson)) !== null && _d !== void 0 ? _d : [];
        newInst.channel_types = (_e = json.channel_types) !== null && _e !== void 0 ? _e : [];
        newInst.min_value = json.min_value;
        newInst.max_value = json.max_value;
        newInst.autocomplete = json.autocomplete;
        return newInst;
    };
    DiscordApplicationCommandOption.prototype.setRequired = function () {
        this.required = true;
        return this;
    };
    DiscordApplicationCommandOption.prototype.addChoiceKeyVal = function (key, value) {
        this.choices.push(new discord_application_command_option_choice_structure_1.DiscordApplicationCommandOptionChoiceStructure(key, value));
        return this;
    };
    DiscordApplicationCommandOption.prototype.addChoice = function (choice) {
        this.choices.push(choice);
        return this;
    };
    return DiscordApplicationCommandOption;
}());
exports.DiscordApplicationCommandOption = DiscordApplicationCommandOption;
