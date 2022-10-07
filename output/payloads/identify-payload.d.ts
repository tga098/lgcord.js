import { GatewayPayload } from './gateway-payload';
export declare class IdentifyPayload extends GatewayPayload {
    constructor(token: string, intents: number, shard: number[]);
}
