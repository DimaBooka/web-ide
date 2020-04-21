"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToUsers = (socketServer, uuids, event, data) => {
    socketServer.emit(event, data);
};
//# sourceMappingURL=utils.js.map