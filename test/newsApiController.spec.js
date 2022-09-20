const chai = require("chai");
const chaiHttp = require("chai-http")
const server = require("../server");

chai.should();                  //assertation style

chai.use(chaiHttp);

describe("newsApi API", () => {
  //Test get route
  describe("GET /", () => {
    it("It should get all news searched by a keyword", (done) => {
      chai.request(server)
      .get("/?search=USA")
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.an("array");
        response.body.should.have.lengthOf.above(0);
        done();
      })
    })
  })

  //Test post route
  describe("POST /", () => {
    it("It should get all the news searched as per the parameters", (done) => {
      chai.request(server)
      .post("/")
      .send({
        country : "us",
        category : "technology",
        sortBy : "popularity"
      })
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.an("array");
        response.body.should.have.lengthOf.above(0);
        done();
      })
    })
  })
})