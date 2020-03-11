import 'jest';
import * as request from 'supertest';
import { environment } from '../common/environment';

let adress: string = (<any> global).adress;
const auth: string = (<any> global).auth;

test('get /reviews', () => {
    return request(adress)
        .get('/reviews')
        .set('Authorization', auth)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body.items).toBeInstanceOf(Array);
        })
        .catch(fail);
});