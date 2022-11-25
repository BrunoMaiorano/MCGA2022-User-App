const express = require('express')
const mongoose = require('mongoose');
require("dotenv").config()
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors());

//rutas
const mainRouter = require('./routes/index')
app.use('/', mainRouter);

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("🟢 DB Connected");
    app.listen({ port: process.env.PORT }, () => {
      console.log(`🚗 Server running on port ${process.env.PORT} + http://localhost:3030/`);
    });
  })
.catch((err) => {
    console.log("🔴 There was an error on the DB connection method.");
    console.log(err);
  });