const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");


const userRoutes = require("./routes/user");
const eventRoutes = require("./routes/event");
 const notificationRoutes = require("./routes/notification");
const app = express();

mongoose.connect("mongodb+srv://ido:03-9793838@cluster0-vowhd.mongodb.net/angular-node", { useNewUrlParser: true })
    .then(() => { console.log("db is connected") })
    .catch((err) => { console.log("db is not connected") });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization, Unauthorized"
//     );
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "GET, POST, PATCH, DELETE, OPTIONS"
//     );
//     next();
// });

app.use("/api/user", userRoutes);
app.use("/api/event",eventRoutes);
app.use("/api/notification",notificationRoutes);

module.exports = app;