const express = require("express");
const app = express();
require("dotenv").config();

const router = require("./routes/routes");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

const PORT = 3000;
app.listen(PORT, () => console.log(`running on port ${PORT}`));
