import { Server } from './server/server';
import { usersRouter } from './users/user.router';

const server = new Server();
server.bootstrap([usersRouter]).then(server => {
    console.log('Server on: ', server.application.address());
}).catch(error => {
    console.log('Server off');
    console.error(error);
    process.exit(1);
});