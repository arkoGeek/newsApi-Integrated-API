const dotenv = require("dotenv");
dotenv.config();
const axios = require("axios");

exports.fetchNewsAsAsked = async(req, res) => {
  const apiKey = process.env.API_KEY.toString();
  let apiURL = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&pageSize=5`;
  if(req.body.country) apiURL = apiURL.concat(`&country=${req.body.country}`);
  if(req.body.category) apiURL = apiURL.concat(`&category=${req.body.category}`);
  if(req.body.sortBy) apiURL = apiURL.concat(`&sortBy=${req.body.sortBy}`);
  if(req.body.page) apiURL = apiURL.concat(`&page=${req.body.page}`);
  try{
    const data = await axios.get(apiURL);
    res.status(200).json(data.data);
  }catch(err){
    console.log(err);
    res.status(500).send("ISE");
  }
}