import { FileModel } from "./file.model";
import { FolderModel } from "./folder.model";

export type Content = (FileModel | FolderModel)[]

export abstract class Common {
    type: string
    name: string
    path: string
    fullPath: string

    constructor(fullPath: string) {
        this.fullPath = fullPath
        this.path = this.getPath()
        this.name = this.getName()
    }

    getPath(): string {
        const m = this.fullPath.match(/\/((\w+|\S)\/?)*\//)
        if (!m) {
            throw "not a path"
        }
        return m[0]
    }

    getName(): string {
        return this.fullPath.replace(this.path, '')
    }
}