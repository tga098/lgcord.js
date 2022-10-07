import WebSocket from 'ws';
export declare class WebSocketData {
    ws: WebSocket;
    shard: number;
    resume: boolean;
    session_id: string;
    seq: number;
    constructor(ws: WebSocket, shard: number);
}
