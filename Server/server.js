const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv").config();

const cors = require("cors");
const port = process.env.PORT;
const corsOptions = {
  origin: "*", // Allow all origins (change this for security)
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

// const port = process.env.PORT;

app.use(cors());
app.use(cors(corsOptions));
app.use(express.json());

const con = require("./db/connection.js");