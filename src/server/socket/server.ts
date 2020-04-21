import express from 'express'
import http from 'http'
import io from 'socket.io'
import { foldersHandlers } from './folders'
import * as path from "path";

const app = express()
app.use(express.static(path.join(__dirname,'/../static')));
const server = new http.Server(app)
export const socketServer = io(server)

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../static/index.html'));
});

const folderNps = socketServer.of('/folders')
folderNps.on('connection', foldersHandlers)

export const runSocketServer = (port: number|string) => {
    server.listen(port, () => {
        console.log('listening on *:' + port)
    })
}
