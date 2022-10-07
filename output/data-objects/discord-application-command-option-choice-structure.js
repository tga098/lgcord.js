"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordApplicationCommandOptionChoiceStructure = void 0;
class DiscordApplicationCommandOptionChoiceStructure {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    static fromJson(json) {
        const newInst = new DiscordApplicationCommandOptionChoiceStructure(json.name, json.value);
        return newInst;
    }
}
exports.DiscordApplicationCommandOptionChoiceStructure = DiscordApplicationCommandOptionChoiceStructure;
