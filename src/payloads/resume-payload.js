"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumePayload = void 0;
const gateway_payload_1 = require("./gateway-payload");
class ResumePayload extends gateway_payload_1.GatewayPayload {
    constructor(token, session_id, seq) {
        super();
        this.op = 6;
        this.d = {
            token,
            session_id,
            seq
        };
    }
}
exports.ResumePayload = ResumePayload;
