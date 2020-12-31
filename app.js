import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import router from "./routes/routes.js";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static(path.join(process.cwd(), "public")));
app.use(bodyParser.json(true));
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));
app.use(router);

mongoose
    .connect(
        "mongodb://jaiswalrohan:jaiswalrohan@cluster0-shard-00-00.wq1cd.mongodb.net:27017,cluster0-shard-00-01.wq1cd.mongodb.net:27017,cluster0-shard-00-02.wq1cd.mongodb.net:27017/MoviesCollection?ssl=true&replicaSet=atlas-yf9ewr-shard-0&authSource=admin&retryWrites=true&w=majority",
        { useUnifiedTopology: true, useNewUrlParser: true }
    )
    .then(() => {
        app.listen(PORT);
    })
    .catch((err) => console.log(err));
