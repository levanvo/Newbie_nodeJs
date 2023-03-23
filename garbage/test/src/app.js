import express from "express"
import mongoose from "mongoose"
import router from "./routers/router";

const app = express();
app.use(express.json());
app.use(router);

mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => console.log("MongoDB running....")).catch(() => console.log("Error connect..."));
export const viteNodeApp = app;