import { Common, Content } from "./common.model";
import { getContent } from "../utils/content";

export class FolderModel extends Common {
    type = 'folder'
    content: Content = []

    constructor(f: string, content: Content = []) {
        super(f)
        this.content = content
    }
}
