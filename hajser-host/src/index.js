import express from 'express';

var ApiRouter = express.Router();

ApiRouter.get('/', (req, res) => {
    res.json({message: "Welcome to our API"});
});

ApiRouter.route('/transactions')
    .all(() => {
        console.log('ROUTE: /transactions'.green);
    })
    .get((req, res) => {
        res.send('GET: /transactions');
    })
    .post((req, res) => {
        res.send('POST: /transactions');
    });

ApiRouter.route('/transactions/:id')
    .all(() => {
        console.log('ROUTE: /transactions/:id'.green);
    })
    .get((req, res) => {
        res.send('GET: /transactions/:id');
    })
    .delete((req, res) => {
        res.send('DELETE: /transactions/:id');
    })
    .put((req, res) => {
        res.send('PUT: /transactions/:id');
    });

ApiRouter.route('/payments')
    .all(() => {
        console.log('ROUTE: /payments'.green);
    })
    .get((req, res) => {
        res.send('GET: /payments');
    })
    .post((req, res) => {
        res.send('POST: /payments');
    });

ApiRouter.route('/payments/:id')
    .all(() => {
        console.log('ROUTE: /payments/:id'.green);
    })
    .get((req, res) => {
        res.send('GET: /payments/:id');
    })
    .put((req, res) => {
        res.send('PUT: /payments/:id');
    })
    .delete((req, res) => {
        res.send('DELETE: /payments/:id');
    });

ApiRouter.route('/users')
    .all(() => {
        console.log('ROUTE: /users'.green);
    })
    .get((req, res) => {
        res.send('GET: /users');
    })
    .post((req, res) => {
        res.send('POST: /users');
    });

ApiRouter.route('/users/:id')
    .get((req, res) => {
        res.send('GET: /users/:id');
    })
    .put((req, res) => {
        res.send('PUT: /users/:id');
    })
    .delete((req, res) => {
        res.send('DELETE: /users/:id');
    });

export default ApiRouter;
