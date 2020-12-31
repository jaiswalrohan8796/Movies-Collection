import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import router from "./routes/routes.js";
import mongodburi from './config.js'
const app = express();
app.use(express.static(path.join(process.cwd(), "public")));
app.use(bodyParser.json(true));
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));
app.use(router);

mongoose
    .connect(mongodburi, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        app.listen(3000, () =>
            console.log(`listening on http://localhost:3000`)
        );
    })
    .catch((err) => console.log(err));
