"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketData = void 0;
class WebSocketData {
    constructor(ws, shard) {
        this.resume = false;
        this.resume_url = '';
        this.session_id = '';
        this.seq = -1;
        this.ws = ws;
        this.shard = shard;
    }
}
exports.WebSocketData = WebSocketData;
