import { GatewayPayload } from './gateway-payload';
export declare class ResumePayload extends GatewayPayload {
    constructor(token: string, session_id: string, seq: number);
}
