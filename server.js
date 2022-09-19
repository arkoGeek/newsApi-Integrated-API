const express = require("express");
const bodyParser = require("body-parser");
const newsApiController = require("./newsApiControllers");
const axios = require("axios");

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.post("/", newsApiController.fetchNewsAsAsked);

app.listen(3000, () => {
  console.log("Server running on 3000");
})