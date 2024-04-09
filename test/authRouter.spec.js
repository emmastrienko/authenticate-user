const { expect } = require("chai");
const supertest = require("supertest");
const User = require('../src/Users/users.json')

const app = require("../app");



 describe("Testing JWT API's", function () {

   it("Testing login User API", function (done) {
        let newUser = {
            "email": "Charles@abc.com",
            "password": "Charles123"
          }
      supertest(app)
        .post("/auth/login")
        .send(newUser)
       
        .expect(200)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.body).to.be.an("object");
          expect(res.body.STATUS).to.equal("OK");
         
          var token = res.body.data
          expect(res.body.data).not.to.be.null;
          expect(res.body.data).to.equal(token);
        
         
          done(err);
        });
    });
    it("Testing login User API with wrong user", function (done) {
      let newUser = {
        "email": "zzz@abc.com",
        "password": "zzzz123"
      }
      supertest(app)
        .post("/auth/login")
        .send(newUser)
        .expect(401)
        .end((err, res) => {
          expect(res.error.status).to.be.equal(401);
        
          done(null);
        });
    });

  })//end of describe

  
  

  
