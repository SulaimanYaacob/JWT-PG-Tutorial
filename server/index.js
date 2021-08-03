const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json()); // req.body
app.use(cors());

// ROUTES
app.use("/auth", require("./routes/jwtAuth"));

//dashboard
app.use("/dashboard", require("./routes/dashboard"));

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
