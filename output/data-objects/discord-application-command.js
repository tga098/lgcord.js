"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordApplicationCommand = void 0;
const discord_application_command_type_1 = require("../custom-types/discord-application-command-type");
const discord_application_command_option_1 = require("./discord-application-command-option");
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
class DiscordApplicationCommand {
    constructor(application_id, name, description) {
        /**
         * The parameters for the command, max 25	CHAT_INPUT
         */
        this.options = [];
        this.application_id = application_id;
        this.name = name;
        this.description = description;
        this.type = discord_application_command_type_1.DiscordApplicationCommandType.CHAT_INPUT;
    }
    static fromJson(json) {
        const newInst = new DiscordApplicationCommand(json.application_id, json.name, json.description);
        newInst.id = json.id;
        newInst.type = json.type;
        newInst.guild_id = json.guild_id;
        newInst.options = json.options?.map(discord_application_command_option_1.DiscordApplicationCommandOption.fromJson) ?? [];
        newInst.default_permission = json.default_permission;
        newInst.version = json.version;
        return newInst;
    }
    setType(type) {
        this.type = type;
        return this;
    }
    addOption(...options) {
        this.options.push(...options);
        return this;
    }
}
exports.DiscordApplicationCommand = DiscordApplicationCommand;
