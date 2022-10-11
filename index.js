const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConnect = require("./utils/dbConnect");
const toolsRoutes = require("./routes/tools.route");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

dbConnect();
app.use("/tools", toolsRoutes);

app.get("/", (req, res) => {
    res.send("server is running");
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
