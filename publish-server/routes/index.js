var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log('req',req.body);
  fs.writeFileSync('../server/public/'+req.query.filename, req.body.msg)
  //res.render('index', { title: 'Express' });
  res.send('');
  res.end();
});

module.exports = router;
