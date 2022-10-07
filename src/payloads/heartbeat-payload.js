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
exports.HeartBeatPayload = void 0;
var gateway_payload_1 = require("./gateway-payload");
var HeartBeatPayload = /** @class */ (function (_super) {
    __extends(HeartBeatPayload, _super);
    function HeartBeatPayload(seq) {
        var _this = _super.call(this) || this;
        _this.op = 1;
        _this.d = seq == -1 ? null : seq;
        return _this;
    }
    return HeartBeatPayload;
}(gateway_payload_1.GatewayPayload));
exports.HeartBeatPayload = HeartBeatPayload;
