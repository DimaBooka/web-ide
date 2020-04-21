"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_model_1 = require("./common.model");
class FileModel extends common_model_1.Common {
    constructor(f) {
        super(f);
        this.type = 'file';
        this.ext = this.getExt();
    }
    getExt() {
        const m = this.name.match(/\.[0-9a-z]+$/i);
        return m ? m[0] : '';
    }
}
exports.FileModel = FileModel;
//# sourceMappingURL=file.model.js.map