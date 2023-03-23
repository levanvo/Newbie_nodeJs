import express from "express";
import mongoose from "mongoose";
import router from "./routers/router";
// import cors from "cors";

const app = express();
app.use(express.json());
// app.use(cors());
app.use(router);

// mongoose.connect("mongodb://localhost:27017/vole");
mongoose.connect("mongodb://127.0.0.1:27017/vole")
    .then(() => {console.log('Database connection successful')})
    .catch(err => {
        console.error('Database connection error ==== '+err)
    });
  
export const viteNodeApp = app;