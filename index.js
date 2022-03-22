const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;
const path = require("path");
const dynoCode = require("./dynoCode.js");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/:id", async (req, res) => {
  var id = req.params.id;
  var host = req.headers.host;
  console.log(id, host);
  var dyno = dynoCode(id, host);
  res.status(200).send(dyno);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
