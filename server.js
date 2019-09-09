const express = require("express");
const cors = require("cors");
const mongo = require("./database");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/signIn", require("./servers/signIn"));
app.use("/signUp", require("./servers/signUp"));
app.use("/companies", require("./servers/companies"));
app.use("/drivers", require("./servers/drivers"));
app.use("/extra", require("./servers/extra"));
app.use("/extra2", require("./servers/extra2"));

app.get("/", (req, res) => {
  res.json("server is working");
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
