const express = require('express')
const app = express()
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
// const port =4000 

app.use(morgan("combined"));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "public")));

// app.use("v1", api);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// app.get('/', (req, res) => {
//   res.send('Hello change from vs code!')
// })

module.exports = app