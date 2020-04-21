"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const folders_1 = require("./folders");
const path = __importStar(require("path"));
const app = express_1.default();
const server = new http_1.default.Server(app);
exports.socketServer = socket_io_1.default(server);
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
});
const folderNps = exports.socketServer.of('/folders');
folderNps.on('connection', folders_1.foldersHandlers);
exports.runSocketServer = (port) => {
    server.listen(port, () => {
        console.log('listening on *:' + port);
    });
};
//# sourceMappingURL=server.js.map