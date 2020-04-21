import { Socket } from 'socket.io'

import {
    IN_GET_FOLDERS,
    OUT_FOLDERS,
    IN_GET_FOLDER,
    OUT_FOLDER
} from '../constants/messages'
import * as path from "path"
import { getContent } from "../utils/content"

const directoryPath = path.join(__dirname, '/../../..')

export const foldersHandlers = (socket: Socket) => {
    console.log(`User ${socket.id} connected`)

    socket.on(IN_GET_FOLDERS, (msg: any) => {
        getContent(directoryPath).then(f => {
            socket.emit(OUT_FOLDERS, {
                path: directoryPath,
                data: f
            })
        })
    })

    socket.on(IN_GET_FOLDER, (folder: any) => {
        getContent(folder).then(f => {
            socket.emit(OUT_FOLDER, {
                path: folder,
                data: f
            })
        })
    })

    socket.on('disconnect', (msg: string) => {
        console.log(`User ${socket.id} disconnected: ${msg}`)
    })
}
