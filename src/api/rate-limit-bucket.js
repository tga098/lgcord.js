"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RateLimitBucket {
    constructor() {
        this.bucket = '';
        this.limit = 0;
        this.remain = 0;
        this.resetTime = 0;
        this.resetAfter = 0;
    }
}
exports.default = RateLimitBucket;
