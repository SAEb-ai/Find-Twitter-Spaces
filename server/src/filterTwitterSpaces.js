require("dotenv").config();
const express = require("express");
const filterTwitterSpaces = require("./routes/filter");
const PORT = process.env.PORT || 8080;

const app = express();

app.use("/", filterTwitterSpaces);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server started listening at port ${PORT}`));
