"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordGatewaySessionStartLimit = exports.DiscordGatewayBotInfo = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
class DiscordGatewayBotInfo {
    constructor(json) {
        this.url = json.url;
        this.shards = json.shards;
        this.session_start_limit = new DiscordGatewaySessionStartLimit(json.session_start_limit ?? {});
    }
}
exports.DiscordGatewayBotInfo = DiscordGatewayBotInfo;
class DiscordGatewaySessionStartLimit {
    constructor(json) {
        this.total = json.total;
        this.remaining = json.remaining;
        this.reset_after = json.reset_after;
        this.max_concurrency = json.max_concurrency;
    }
}
exports.DiscordGatewaySessionStartLimit = DiscordGatewaySessionStartLimit;
