"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_model_1 = require("./common.model");
class FolderModel extends common_model_1.Common {
    constructor(f, content = []) {
        super(f);
        this.type = 'folder';
        this.content = [];
        this.content = content;
    }
}
exports.FolderModel = FolderModel;
//# sourceMappingURL=folder.model.js.map