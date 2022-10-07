"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordThreadMember = void 0;
class DiscordThreadMember {
    constructor(join_timestamp, flags) {
        this.join_timestamp = join_timestamp;
        this.flags = flags;
    }
    static fromJson(json) {
        const newInst = new DiscordThreadMember(json.join_timestamp, json.flags);
        newInst.id = json.id;
        newInst.user_id = json.user_id;
        return newInst;
    }
}
exports.DiscordThreadMember = DiscordThreadMember;
