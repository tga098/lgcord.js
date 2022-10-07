"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.IdentifyPayload = void 0;
var gateway_payload_1 = require("./gateway-payload");
var IdentifyPayload = /** @class */ (function (_super) {
    __extends(IdentifyPayload, _super);
    function IdentifyPayload(token, intents, shard) {
        var _this = _super.call(this) || this;
        _this.op = 2;
        _this.d = {
            token: token,
            intents: intents,
            shard: shard,
            properties: {
                $os: process.platform,
                $browser: 'discord-minimal',
                $device: 'discord-minimal'
            }
        };
        return _this;
    }
    return IdentifyPayload;
}(gateway_payload_1.GatewayPayload));
exports.IdentifyPayload = IdentifyPayload;
