const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConnect = require("./utils/dbConnect");
const toolsRoutes = require("./routes/v1/tools.route");
const viewCount = require("./middleware/viewCount");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

// middleware
// app.use(viewCount);

// database connection
dbConnect();

// routes
app.use("/api/v1/tools", toolsRoutes);

/* ------------------ */
app.get("/", (req, res) => {
    // res.send("server is running");
    // res.sendFile(__dirname + "/public/test.html");
    res.render("home.ejs", {
        id: 5,
        user: {
            name: "test",
        },
    });
});

app.all("*", (req, res) => {
    res.send("No route found");
});

// error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

// global error handler if express fail to handle error
process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    });
});
