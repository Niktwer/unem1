'use strict';
var express = require('express');
var router = express.Router();



var getData9 = function () {
    var el = {
        'item1': '/images/en.png',
        'item2': '/images/uk.png'
    }
    return el;
}

var getData = function () {
    var data = {
        'item1': '/pdf/pdf-test.pdf',
        'item2': '/pdf/text.txt',
        'item3': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-78.jpg'
    }
    return data;
}

var getData1 = function () {
    var data = {
        'item1': '/movies/small.mp4',
        'item2': '/movies/small.webm',
        'item3': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-79.jpg'
    }
    return data;
}

/* GET home page. */
    router.get('/', function (req, res) {
        res.render('index', { title: 'Тверезовський Микола', "data": getData(), "data1": getData1(),  "proba": getData9() });
    });

    module.exports = router;