import { FileModel } from "../models/file.model";
import {Common, Content} from "../models/common.model";
import { FolderModel } from "../models/folder.model";
import * as fs from "fs";
import * as util from "util";

const readdir = util.promisify(fs.readdir)

const skipList = [
    'node_modules',
    '.idea'
]

export async function getContent(pathD: string): Promise<Content> {
    let folders: FolderModel[] = []
    let files: FileModel[] = []

    const paths = await readdir(pathD)
    paths.forEach(path => {
        if (skipList.includes(path)) {
            return
        }

        const fullPath = `${pathD}/${path}`

        fs.lstatSync(fullPath).isDirectory() ?
            folders.push(new FolderModel(fullPath)) :
            files.push(new FileModel(fullPath))
    });

    const sortFn = (a: Common, b: Common) => {
        const aN = a.fullPath.toLowerCase()
        const bN = b.fullPath.toLowerCase()
        return aN === bN ? 0 : aN > bN ? 1 : -1
    }

    folders = folders.sort(sortFn)
    files = files.sort(sortFn)
    return [...folders, ...files]
}