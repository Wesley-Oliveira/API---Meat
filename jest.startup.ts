import * as jestCli from 'jest-cli';

import { Server } from './server/server';
import { environment } from './common/environment';
import { usersRouter } from './users/user.router';
import { reviewsRouter } from './reviews/reviews.router';
import { User } from './users/users.model';
import { Review} from './reviews/reviews.model';

let server: Server;

const  beforeAllTests = () => {
    environment.db.url = process.env.DB_URL || 'mongodb+srv://admin:admin123@cluster0-gke9r.mongodb.net/meat-api-test-db?retryWrites=true&w=majority';
    environment.server.port = process.env.SERVER_PORT || 3002;
    server = new Server();
    return server.bootstrap([
        usersRouter,
        reviewsRouter
    ])
    .then(() => User.remove({}).exec())
    .then(() => Review.remove({}).exec())
}

const afterAllTests = () => {
    return server.shutDown();
}

beforeAllTests()
.then(() => jestCli.run())
.then(() => afterAllTests())
.catch(console.error);