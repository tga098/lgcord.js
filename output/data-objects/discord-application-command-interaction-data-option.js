"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
Object.defineProperty(exports, "__esModule", { value: true });
class DiscordApplicationCommandInteractionDataOption {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    static fromJson(json) {
        const newInst = new DiscordApplicationCommandInteractionDataOption(json.name, json.type);
        newInst.value = json.value;
        newInst.options = json.options?.map(DiscordApplicationCommandInteractionDataOption.fromJson);
        newInst.focused = json.focused;
        return newInst;
    }
}
exports.default = DiscordApplicationCommandInteractionDataOption;
