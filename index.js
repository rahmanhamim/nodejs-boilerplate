const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConnect = require("./utils/dbConnect");
const toolsRoutes = require("./routes/v1/tools.route");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

dbConnect();

app.use("/api/v1/tools", toolsRoutes);

/* ------------------ */
app.get("/", (req, res) => {
    res.send("server is running");
});

app.all("*", (req, res) => {
    res.send("No route found");
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
