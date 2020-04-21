import { Common } from "./common.model";

export class FileModel extends Common {
    type = 'file'
    ext: string

    constructor(f: string) {
        super(f)
        this.ext = this.getExt()
    }

    getExt(): string {
        const m = this.name.match(/\.[0-9a-z]+$/i)
        return m ? m[0] : ''
    }
}
