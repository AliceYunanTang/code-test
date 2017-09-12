//server.test.js

const should = require('chai').should();
const expect = require('chai').expect;
var server = require('../server');
const chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

// Read sample_request.json and store it to a variable
const sampleReqObj = require('./sample_request.json');

// Read sample_response.json and store it to a variable
const sampleResObj = require('./sample_response.json');

// BDD (Behavior-driven development) test
describe('server', ()=>{

  describe('#get "/"', ()=>{

    it('expects a 200 ok response', (done) => {
      chai.request(server).get('/')
      .set('Accept','application/json')
      .end( (err, res) => {
        res.should.have.status(200);
        done();
      });
    }); // it

    it('expects a 404 not found response', (done) => {
      chai.request(server).get('/nonexist')
      .set('Accept','application/json')
      .end( (err, res) => {
        res.should.have.status(404);
        done();
      });
    }); // it

  }); // #get

  describe('#post "/"', ()=>{

    it('expects response to equal sample response', (done) => {
      chai.request(server).post('/')
      .set('Accept','application/json')
      .set('Content-Type','application/json')
      .send( sampleReqObj )
      .end((err, res) =>{
        res.should.have.status(200);
        expect('Content-Type', 'application/json');
        expect(res.body).to.deep.equal(sampleResObj);
        done();
      });
    }); // it

    it('expects a 400 Bad Request', (done) => {
      chai.request(server).post('/')
      .set('Accept','application/json')
      .send( "wrong format data, not json format" )
      .end((err, res) =>{
        res.should.have.status(400);
        expect(res.body).to.deep.equal({error: "Could not decode request: JSON parsing failed"});
        done();
      });
    }); // it

  }); // describe #post
}); // describe server.js
