var express = require('express');

var controller = require('../controller/index.controller.js');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.indexPOST);
router.post('/create', controller.show);


module.exports = router;