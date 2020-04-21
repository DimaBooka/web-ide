import {runSocketServer} from './socket/server'

const socketPort = process.env.SOCKET_PORT || 8999

runSocketServer(socketPort)
