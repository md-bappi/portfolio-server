require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sendMail = require("./controllers/contactController");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// POST endpoint for form
app.post("/api/contact", sendMail);

app.listen(4000, () => console.log(`Server running on port 4000`));
