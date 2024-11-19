const express = require('express');
const router = express.Router();

const postsArray = require('../posts');

// index
router.get('/', function  (req, res) {
    res.json(postsArray);
});

// show
router.get('/:id', function  (req, res) {
    postsArray.forEach(element => {
        if (element.title === req.params.id) {
            res.json(element);
            return;
        }
        res.send('Ecco il post ' + req.params.id);
    });
});

// store
router.post('/', function  (req, res) {
    res.send('Creazione nuovo post');
});

// update
router.put('/:id', function  (req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
});

// modify
router.patch('/:id', function  (req, res) {
    res.send('Modifica parziale del post' + req.params.id);
});

// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
});

module.exports = router;