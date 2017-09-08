'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./shows'));

router.get('/', (req, res) => {
    //provide endpoints
    res.json({
        "shows": "/api/v1/shows"
    });
});


module.exports = router;

