require("dotenv").config();
var express = require('express');
const needle = require("needle");

var router = express.Router();
const endpointUrl = `https://api.twitter.com/2/spaces/search`;
const token = process.env.BEARER_TOKEN;

router.get("/filter/:topic", async (req, res) => {
    const params = {
      query: req.params.topic,
    };
    console.log(req.params.topic)
    const filterTwitterSpaces = await needle("get", endpointUrl, params, {
      headers: {
        "User-Agent": "v2SpacesSearchJS",
        authorization: `Bearer ${token}`,
      },
    });
    if (filterTwitterSpaces.body) {
      res.status(201).json(filterTwitterSpaces.body);
    } else {
      res.status(424).send("Unsuccessful request");
    }
});

module.exports = router;