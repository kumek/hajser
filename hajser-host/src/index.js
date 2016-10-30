import express from 'express';

import mongoose from 'mongoose';

import Transaction from './models/Transaction.js';
import Payment from './models/Payment.js';
import User from './models/User.js';

mongoose.connect('mongodb://localhost/hajser', function() {
    console.log('Connected with mongo database'.green);
});

var ApiRouter = express.Router();

ApiRouter.get('/', (req, res) => {
    res.json({
        message: "Welcome to our API"
    });
});

/////
// Transactions Routes 
ApiRouter.get('/transactions/', (req, res) => {
    Transaction.find({}, function(err, transactions) {
        if (err) console.log(err);
        res.status(200).send(transactions);
    });
});
ApiRouter.post('/transactions/', (req, res) => {
    var newTransaction = new Transaction({
        payerID: req.body.payerID,
        payeeID: req.body.payeeID,
        value: req.body.value
    });
    Transaction.createTransaction(newTransaction, function(err, transaction) {
        if (err) console.log(err);
        res.status(200).send(newTransaction);
    });
});

ApiRouter.get('/transactions/:id', (req, res) => {
    var id = req.params.id;
    Transaction.find({
        _id: id
    }, function(err, transaction) {
        if (err) console.log(err);
        res.status(200).send(transaction);
    });
});

ApiRouter.delete('/transactions/:id', (req, res) => {
    var id = req.params.id;
    Transaction.remove({
        _id: id
    }, function(err, transaction) {
        if (err) console.log(err);
        res.status(200).send(transaction);
    });
});

ApiRouter.put('/transactions/:id', (req, res) => {
    var id = req.params.id;
    var payerID = req.body.payerID;
    var payeeID = req.body.payeeID;
    var value = req.body.value;
    var done = req.body.done;
    //var createDate = req.body.createDate;  ??
    Transaction.find({
        _id: id
    }, function(err, transaction) {
        if (err) console.log(err);
        transaction[0].payerID = payerID;
        transaction[0].payeeID = payeeID;
        transaction[0].value = value;
        transaction[0].done = done;
        transaction[0].save(function(err) {
            if (err) console.log(err);
        });
        res.status(200).send(transaction);
    });
});
/////
// Payments Routes 
ApiRouter.get('/payments', (req, res) => {
    Payment.find({}, function(err, payments) {
        if (err) console.log(err);
        res.status(200).send(payments);
    });
});

ApiRouter.post('/payments', (req, res) => {
    var newPayment = new Payment({
        creatorId: req.body.creatorId,
        value: req.body.value,
        transactionsId: req.body.transactionsId
    });
    Payment.createPayment(newPayment, function(err, payment) {
        if (err) console.log(err);
        res.status(200).send(newPayment);

    });
});

ApiRouter.get('/payments/:id', (req, res) => {
    var id = req.params.id;
    Payment.find({
        _id: id
    }, function(err, payment) {
        if (err) console.log(err);
        res.status(200).send(payment);
    });
});

ApiRouter.put('/payments/:id', (req, res) => {
    var id = req.params.id;
    var creatorId = req.body.creatorId;
    var value = req.body.value;
    var transactionsId = req.body.transactionsId;
    Payment.find({
        _id: id
    }, function(err, payment) {
        if (err) console.log(err);
        payment[0].creatorId = creatorId;
        payment[0].value = value;
        transactionsId[0].value = transactionsId;
        payment[0].save(function(err) {
            if (err) console.log(err);
        });
        res.status(200).send(payment);
    });
});

ApiRouter.delete('/payments/:id', (req, res) => {
    var id = req.params.id;
    Payment.remove({
        _id: id
    }, function(err, payment) {
        if (err) console.log(err);
        res.status(200).send(payment);
    });
});
/////
// Users Routes 
ApiRouter.get('/users', (req, res) => {
    User.find({}, function(err, users) {
        if (err) console.log(err);
        res.status(200).send(users);
    });
});

ApiRouter.post('/users', (req, res) => {
    var newUser = new User({
        name: req.body.name,
        username: req.body.username
    });
    User.createUser(newUser, function(err, newUser) {
        if (err) console.log(err);
        res.status(200).send(newUser);
    });
});

ApiRouter.get('/users/:id', (req, res) => {
    var id = req.params.id;
    User.find({
        _id: id
    }, function(err, user) {
        if (err) console.log(err);
        res.status(200).send(user);
    });
});

ApiRouter.put('/users/:id', (req, res) => {
    var id = req.params.id;
    var name = req.body.name;
    var username = req.body.username;
    User.find({
        _id: id
    }, function(err, user) {
        if (err) console.log(err);
        user[0].name = name;
        user[0].username = username;
        user[0].save(function(err) {
            if (err) console.log(err);
        });
        res.status(200).send(user);
    });
});

ApiRouter.delete('/users/:id', (req, res) => {
    var id = req.params.id;
    User.remove({
        _id: id
    }, function(err, user) {
        if (err) console.log(err);
        res.status(200).send(user);
    });
});

export default ApiRouter;
