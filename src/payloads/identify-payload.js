"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifyPayload = void 0;
const gateway_payload_1 = require("./gateway-payload");
class IdentifyPayload extends gateway_payload_1.GatewayPayload {
    constructor(token, intents, shard) {
        super();
        this.op = 2;
        this.d = {
            token: token,
            intents: intents,
            shard: shard,
            properties: {
                $os: process.platform,
                $browser: 'discord-minimal',
                $device: 'discord-minimal'
            },
        };
    }
}
exports.IdentifyPayload = IdentifyPayload;
