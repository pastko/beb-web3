const router = require('express').Router();

router.get('/', function(req, res, next){
    res.json({ index : 'Hello word' });
})

module.exports = router;