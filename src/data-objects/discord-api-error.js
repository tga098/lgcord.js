"use strict";
exports.__esModule = true;
exports.DiscordAPIError = void 0;
var DiscordAPIError = /** @class */ (function () {
    function DiscordAPIError(code, message, errors, endpoint) {
        this.code = code;
        this.message = message;
        this.errors = errors;
        this.endpoint = endpoint;
    }
    return DiscordAPIError;
}());
exports.DiscordAPIError = DiscordAPIError;
