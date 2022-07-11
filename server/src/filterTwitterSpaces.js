require("dotenv").config();
const express = require("express");

const app = express();
const needle = require("needle");

const endpointUrl = `https://api.twitter.com/2/spaces/search`;
const token = process.env.BEARER_TOKEN;

app.post("/filter", async (req, res) => {
  const params = {
    query: "Twitter",
  };
  const res1 = await needle("get", endpointUrl, params, {
    headers: {
      "User-Agent": "v2SpacesSearchJS",
      authorization: `Bearer ${token}`,
    },
  });
  if (res1.body) {
    res.status(201).send("Successful request");
  } else {
    res.status(424).send("Unsuccessful request");
  }
});

// eslint-disable-next-line no-console
app.listen(8000, () => console.log(`Server started listening at port 8000`));
