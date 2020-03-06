import * as restify from 'restify';

const server = restify.createServer({
    name: 'meat-api',
    version: '1.0.0'
});

server.use(restify.plugins.queryParser());

server.get('/info', (req, resp, next) => {
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

server.listen(3000, () => {
    console.log('API is running on http://localhost:3000');
});