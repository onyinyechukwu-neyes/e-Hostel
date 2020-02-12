const express = require("express");
const schoolRouter = require("./src/backend/Routes/schoolRouter");

require("dotenv").config();

const app = express();

app.use(schoolRouter);
const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Listening to", port));
