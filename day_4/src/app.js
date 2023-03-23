import express from "express";
// import cors from "cors";
import router from "./routers/router";

const app = express();
app.use(express.json());
// app.use(cors());

app.use(router);

// app.listen(8080, () => {
//     console.log("Server running ===========================================================================>>>>>>>>>>");
// });

export const viteNodeApp = app;