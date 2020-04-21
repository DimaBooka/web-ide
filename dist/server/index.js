"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./socket/server");
const socketPort = process.env.SOCKET_PORT || 8999;
server_1.runSocketServer(socketPort);
//# sourceMappingURL=index.js.map