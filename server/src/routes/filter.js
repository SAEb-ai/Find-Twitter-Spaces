require("dotenv").config();
var express = require('express');
const needle = require("needle");

var router = express.Router();
const endpointUrl = `https://api.twitter.com/2/spaces/search`;
const token = process.env.BEARER_TOKEN;

router.post("/filter", async (req, res) => {
    const params = {
      query: "Twitter",
    };
    const filterTwitterSpaces = await needle("get", endpointUrl, params, {
      headers: {
        "User-Agent": "v2SpacesSearchJS",
        authorization: `Bearer ${token}`,
      },
    });
    if (filterTwitterSpaces.body) {
      res.status(201).send("Successful request");
    } else {
      res.status(424).send("Unsuccessful request");
    }
});

module.exports = router;