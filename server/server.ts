import * as restify from 'restify';
import {environment} from '../common/environment';

export class Server{

    application: restify.Server

    initRoutes(): Promise<any>{
        return new Promise((resolve, reject) => {
            try{
                
                this.application = restify.createServer({
                    name: 'meat-api',
                    version: '1.0.0'
                });
                
                this.application.use(restify.plugins.queryParser());
                
                //routes
                this.application.get('/info', (req, resp, next) => {
                    //Resp e Req
                    /*resp.contentType = 'application/json';
                    resp.status(400);
                    resp.setHeader('Content-Type', 'application/json');
                    resp.send({message: 'hello'});*/
                    resp.json({
                        browser: req.userAgent(),
                        method: req.method,
                        url: req.href(),
                        path: req.path(),
                        query: req.query,
                    });
                
                    //next
                    // Diz que a callback acabou
                    // Controlar o fluxo se tiver mais de uma callback configurado pra mesma rota
                    // Passar um objeto, ex: com status da resposta e mensagem
                    return next();
                })


                this.application.listen(environment.server.port, () => {
                    resolve(this.application);
                });

            } catch(error) {
                reject(error);
            }
        });
    }

    bootstrap(): Promise<Server> {
        return this.initRoutes().then(() => this);
    }
}