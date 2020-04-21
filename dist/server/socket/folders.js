"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../constants/messages");
const path = __importStar(require("path"));
const content_1 = require("../utils/content");
const directoryPath = path.join(__dirname, '/../../..');
exports.foldersHandlers = (socket) => {
    console.log(`User ${socket.id} connected`);
    socket.on(messages_1.IN_GET_FOLDERS, (msg) => {
        content_1.getContent(directoryPath).then(f => {
            socket.emit(messages_1.OUT_FOLDERS, {
                path: directoryPath,
                data: f
            });
        });
    });
    socket.on(messages_1.IN_GET_FOLDER, (folder) => {
        content_1.getContent(folder).then(f => {
            socket.emit(messages_1.OUT_FOLDER, {
                path: folder,
                data: f
            });
        });
    });
    socket.on('disconnect', (msg) => {
        console.log(`User ${socket.id} disconnected: ${msg}`);
    });
};
//# sourceMappingURL=folders.js.map