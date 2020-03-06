import { Server } from './server/server'

const server = new Server();
server.bootstrap().then(server => {
    console.log('Server on: ', server.application.address());
}).catch(error => {
    console.log('Server off');
    console.error(error);
    process.exit(1);
});