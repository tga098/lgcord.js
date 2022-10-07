"use strict";
exports.__esModule = true;
exports.WebSocketData = void 0;
var WebSocketData = /** @class */ (function () {
    function WebSocketData(ws, shard) {
        this.resume = false;
        this.session_id = '';
        this.seq = -1;
        this.ws = ws;
        this.shard = shard;
    }
    return WebSocketData;
}());
exports.WebSocketData = WebSocketData;
