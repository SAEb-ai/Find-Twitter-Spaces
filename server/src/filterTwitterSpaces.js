require("dotenv").config();
const express = require("express");
const cors = require("cors");
const filterTwitterSpaces = require("./routes/filter");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors({ origin: ["http://localhost:3000", "https://find-twitter-spaces.onrender.com"] }));
app.use("/", filterTwitterSpaces);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server started listening at port ${PORT}`));
