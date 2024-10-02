const mongoose = require("mongoose");

exports.createDatabase = () =>
  mongoose
    .connect(process.env.DB_URL)
    .then((con) => {
      console.log("Database connected to the host : " + con.connection.host);
    })
    .catch((error) => {
      console.log(error.message);
    });
