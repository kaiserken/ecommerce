var router  = require('express').Router();


router.get('/', function(reg, res){
  res.render('main/home');
});

router.get('/about', function(req, res){
  res.render('main/about');
});

module.exports  = router;
