const users = [
    {name: 'Peter', email: 'peter@marvel.com'},
    {name: 'Bruce', email: 'bruce@dc.com'},
];

export class User {
    static findAll(): Promise<any[]>{
        return Promise.resolve(users);
    }
}