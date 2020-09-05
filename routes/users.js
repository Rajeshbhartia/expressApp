var express = require('express');
var router = express.Router();
var data = require('../public/resources/data.json');

/* GET users listing. */
router.get('/', function (req, res, next) {
	// res.send('respond with a resource hello');
	res.render('form');
});

router.post('/', function (req, res) {
	console.log(req.body);
	res.render('form', { tempData: data[req.body.template] });
});

module.exports = router;
