var express = require('express');
var router = express.Router();
var User = require('../models/User');
require('../connection');

router.get('/users', function(req, res, next) {
    const callback = (error, data) => {
        if(error) {
            console.error(error);
            return res.send(500);
        }

        res.json(data);
    }
    User.find({}, callback);
});

router.post('/users', function(req, res, next) {
    const body = req.body;

    const callback = (error, data) => {
        if(error) {
            console.error(error);
            return res.send(500);
        }

        res.json(data);
    }

    User.create(body, callback);
});

router.put('/users', function(req, res, next) {
    const body = req.body;

    const callback = (error, data) => {
        if(error) {
            console.error(error);
            return res.send(500);
        }

        res.json(data);
    }
    
    User.update({_id: body._id}, { $set: body},  callback);
});

router.delete('/users/:userId', function(req, res, next) {
    const body = req.body;
    const userId = req.params.userId;

    const callback = (error, data) => {
        if(error) {
            console.error(error);
            return res.send(500);
        }

        res.json(data);
    }
    
    User.deleteOne({_id: userId},  callback);
});


module.exports = router;
