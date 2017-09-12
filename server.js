//===============================
// server.js
// a simple web service
// post JSON data, filter that JSON data and return a few fields.
// details see readme.md
// ==============================

"use strict";
const express = require('express');
const bodyParser = require('body-parser');

// on production use dynamic port, on dev use 5000 port
const PORT = process.env.PORT || 5000;
const app = express();

// use bodyParser middleware so that req.body won't be null.
app.use(bodyParser.json());

// handle post request
app.post('/', (req,res,next) =>{
  const data = req.body;

  // check if request headers content-type is json format, if not throw 400 error.
  if (req.headers['content-type'] !== 'application/json') {
    let err = new Error('Could not decode request: JSON parsing failed');
    err.status = 400;
    next(err);
  }

  // results array to hold records which met drm = true and episodeCount > 0
  const results = [];

  // iterate request payload json array to fileter out drm:true and episodeCount>0 records
  if (typeof req.body.payload !=='undefined') {
    req.body.payload.forEach( obj => {
      if (obj.drm==true && obj.episodeCount >0 ) {
        let { image:{showImage:image}, slug, title } = obj;
        results.push({image, slug, title});
      }
    });
    // send results back using json format
    res.json({
      response: results
    });
  }
});

app.get('/', (req,res) => {
  res.json({test: "testing"});
});

// show error when page not found
app.use((req,res,next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//========================================
// uncomment below code to show detailed
// error in DEV ENV
//========================================
// if (app.get('env') === 'development') {
//   app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.json({
//       message: err.message,
//       error: err
//     });
//   });
// }

// hide error detail in prod env
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  if (err.status == 400){
    err.message = 'Could not decode request: JSON parsing failed'
  }
  res.json({
    error: err.message
  });
});

// START THE SERVER
app.listen(PORT,() => console.log(`Express server is listening on port ${PORT}`));

module.exports = app;     // for Mocha/Chai testing
