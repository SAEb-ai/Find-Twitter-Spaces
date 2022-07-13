require("dotenv").config();
const express = require("express");
const filterTwitterSpaces = require("./routes/filter");
const app = express();

app.use("/", filterTwitterSpaces);

// eslint-disable-next-line no-console
app.listen(8000, () => console.log(`Server started listening at port 8000`));
