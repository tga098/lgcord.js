"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
Object.defineProperty(exports, "__esModule", { value: true });
class DiscordInteractionResolvedData {
    static fromJson(json) {
        const newInst = new DiscordInteractionResolvedData();
        newInst.users = json.users;
        newInst.members = json.members;
        newInst.roles = json.roles;
        newInst.messages = json.messages;
        return newInst;
    }
}
exports.default = DiscordInteractionResolvedData;
