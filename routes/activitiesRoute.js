const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/activitiesCtrl');

router.get('/', ctrl.getAllActivities);

module.exports = router;