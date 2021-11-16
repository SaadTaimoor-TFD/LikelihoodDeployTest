
const express = require("express");
const dotenv = require('dotenv');
const path = require('path')

dotenv.config()
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// server.js
app.use(require('prerender-node')).set('prerenderToken', process.env.ENV_PRERENDER_IO_TOKEN);

// add middleware
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});