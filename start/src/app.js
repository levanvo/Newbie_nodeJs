import express from "express"
import mongoose from "mongoose"
import router from "./routers/router";

const app = express();
app.use(express.json());

app.use(router);

mongoose.connect("mongodb://127.0.0.1:27017/").then(() => console.log("Connecting...")).catch(() => console.log("Falling..."));
export const viteNodeApp = app;