'use strict';

let express = require('express');
let app = express();
require('dotenv').config();

//middleware func. goes between req and res
const logParams = (req, res, next) => {
    console.log('middleware func');
    // console.log('req', req);
    console.log('req.params', req.params);
    next();
};

// const anothaMidware = (req, res, next) => {
//     console.log('thing');
//     next();
// };


//with route arg, will only run when req matches url
// app.use('/hello', anothaMidware);


//defaults to finding the index
let routes = require('./routes/');
console.log('routes', routes);

//without route arg, will run every req
app.use(logParams);

//if API is prefaced, will only use these routes matching route param
app.use('/api/v1/', routes);
// app.use('api/v2/', v2routes);

app.use( (req, res, next) => {
    let err = new Error('Not found yo');
    err.status = 404;
    next(err);
});

app.use( (err, req, res, next) =>{
    res.status( err.status || 500 );
    res.json({
        "message": "Sup sucka",
        err: err
    })
});

//if request type is a get, run. can take route arg 
// app.get();

//same but with post
// app.post();

let port = process.env.PORT || 8888;
app.listen(port, () => {
    console.log(`listenin on ${port}`);
});