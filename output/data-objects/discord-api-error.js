"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordAPIError = void 0;
class DiscordAPIError {
    constructor(code, message, errors, method, endpoint) {
        this.code = code;
        this.message = message;
        this.errors = errors;
        this.method = method;
        this.endpoint = endpoint;
    }
}
exports.DiscordAPIError = DiscordAPIError;
