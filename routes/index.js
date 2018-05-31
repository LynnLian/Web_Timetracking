var express = require('express');
var router = express.Router();
const models = require('../database/db_module');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('record', { title: 'Record Tracking' });

  models.Result.update({

  })


});

module.exports = router;
