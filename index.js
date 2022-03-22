const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;
const path = require("path");
const supportUkraine = require("./modules/supportUkraine");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/ukraine", (req, res) => {
  const banner = supportUkraine();
  res.status(200).send(banner);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
