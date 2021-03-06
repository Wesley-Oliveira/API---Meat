import { Server } from './server/server';
import { usersRouter } from './users/user.router';
import { restaurantsRouter } from './restaurants/restaurants.router';
import { reviewsRouter } from './reviews/reviews.router';

const server = new Server();
server.bootstrap([
    usersRouter,
    restaurantsRouter,
    reviewsRouter
]).then(server => {
    console.log('Server on: ', server.application.address());
}).catch(error => {
    console.log('Server off');
    console.error(error);
    process.exit(1);
});