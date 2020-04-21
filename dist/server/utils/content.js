"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const file_model_1 = require("../models/file.model");
const folder_model_1 = require("../models/folder.model");
const fs = __importStar(require("fs"));
const util = __importStar(require("util"));
const readdir = util.promisify(fs.readdir);
const skipList = [
    'node_modules',
    '.idea'
];
function getContent(pathD) {
    return __awaiter(this, void 0, void 0, function* () {
        let folders = [];
        let files = [];
        const paths = yield readdir(pathD);
        paths.forEach(path => {
            if (skipList.includes(path)) {
                return;
            }
            const fullPath = `${pathD}/${path}`;
            fs.lstatSync(fullPath).isDirectory() ?
                folders.push(new folder_model_1.FolderModel(fullPath)) :
                files.push(new file_model_1.FileModel(fullPath));
        });
        const sortFn = (a, b) => {
            const aN = a.fullPath.toLowerCase();
            const bN = b.fullPath.toLowerCase();
            return aN === bN ? 0 : aN > bN ? 1 : -1;
        };
        folders = folders.sort(sortFn);
        files = files.sort(sortFn);
        return [...folders, ...files];
    });
}
exports.getContent = getContent;
//# sourceMappingURL=content.js.map