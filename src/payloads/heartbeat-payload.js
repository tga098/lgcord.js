"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeartBeatPayload = void 0;
const gateway_payload_1 = require("./gateway-payload");
class HeartBeatPayload extends gateway_payload_1.GatewayPayload {
    constructor(seq) {
        super();
        this.op = 1;
        this.d = seq == -1 ? null : seq;
    }
}
exports.HeartBeatPayload = HeartBeatPayload;
