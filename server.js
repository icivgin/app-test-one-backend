const express = require("express");
const app = express();
const cors = require("cors");

require('dotenv').config();

const routes = require("./routes/api");

const port = process.env.PORT || 3001;

// Enable all request
app.use(cors());

// parsing application/json
app.use(express.json());

// parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server running at port http://localhost:${port}!`);
});