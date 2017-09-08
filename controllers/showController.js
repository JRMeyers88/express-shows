'use strict';

// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database('./db/mediaStore.sqlite');
const { getAllShows, getSingle } = require('../models/Show');
// console.log("get all", getAllShows;

module.exports.getShows = (req, res, next) => {
    // console.log("running");
    getAllShows()
   .then( (shows) => {
    // console.log("run?")
    res.status(200).json(shows);    
   })
   .catch( (err) => {
    //    console.log("caught");
        next(err);
    });
};

module.exports.getOneShow = ({params: {id}}, res, next) => {
                // req.params.id ^^^
    getSingle(id)
    .then( (single) => {
    res.status(200).json(single);
    })
    .catch( (err) => {
        next(err);
    });
};