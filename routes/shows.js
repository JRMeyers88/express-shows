'use strict';

const { Router } = require('express');
const router = Router();
const { getShows, getOneShow } = require('../controllers/showController');

router.get('/shows', getShows);
router.get('/shows/:id', getOneShow);

module.exports = router;