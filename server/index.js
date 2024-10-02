const express = require("express");
const { createDatabase } = require("./database");
const router = require("./routers/contact-router");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
createDatabase();
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use("/", router);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
