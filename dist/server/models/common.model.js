"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Common {
    constructor(fullPath) {
        this.fullPath = fullPath;
        this.path = this.getPath();
        this.name = this.getName();
    }
    getPath() {
        const m = this.fullPath.match(/\/((\w+|\S)\/?)*\//);
        if (!m) {
            throw "not a path";
        }
        return m[0];
    }
    getName() {
        return this.fullPath.replace(this.path, '');
    }
}
exports.Common = Common;
//# sourceMappingURL=common.model.js.map