"use strict";
exports.__esModule = true;
var RateLimitBucket = /** @class */ (function () {
    function RateLimitBucket() {
        this.bucket = '';
        this.limit = 0;
        this.remain = 0;
        this.resetTime = 0;
        this.resetAfter = 0;
    }
    return RateLimitBucket;
}());
exports["default"] = RateLimitBucket;
