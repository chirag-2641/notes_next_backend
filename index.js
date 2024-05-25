const connectToMongo = require("./db");
const express = require("express");

  var cors = require("cors");
  const app = express();
  // const port = 5000

  require('dotenv').config();

  const mongoose = require('mongoose');
  mongoose.set('strictQuery', false);


  //to use req body
  app.use(cors());
  app.use(express.json());

  //Available routes
  app.use("/api/auth", require("./routes/auth"));
  app.use("/api/notes", require("./routes/notes"));

  connectToMongo().then(()=> {

    app.listen(process.env.PORT, () => {
      console.log(
        `my-notebook backend listening at notes-next-backend.vercel.app:${process.env.PORT}`
        // `my-notebook backend listening at http://localhost:${process.env.PORT}`
      );
    });
  }).catch(err => {
    console.error(err)
  });

