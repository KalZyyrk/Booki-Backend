const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/lodgingCtrl');

router.get('/', ctrl.getAllLodging);
router.get('/popular', ctrl.popularLodging);

module.exports = router;