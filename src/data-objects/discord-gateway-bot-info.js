"use strict";
exports.__esModule = true;
exports.DiscordGatewaySessionStartLimit = exports.DiscordGatewayBotInfo = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
var DiscordGatewayBotInfo = /** @class */ (function () {
    function DiscordGatewayBotInfo(json) {
        var _a;
        this.url = json.url;
        this.shards = json.shards;
        this.session_start_limit = new DiscordGatewaySessionStartLimit((_a = json.session_start_limit) !== null && _a !== void 0 ? _a : {});
    }
    return DiscordGatewayBotInfo;
}());
exports.DiscordGatewayBotInfo = DiscordGatewayBotInfo;
var DiscordGatewaySessionStartLimit = /** @class */ (function () {
    function DiscordGatewaySessionStartLimit(json) {
        this.total = json.total;
        this.remaining = json.remaining;
        this.reset_after = json.reset_after;
        this.max_concurrency = json.max_concurrency;
    }
    return DiscordGatewaySessionStartLimit;
}());
exports.DiscordGatewaySessionStartLimit = DiscordGatewaySessionStartLimit;
