import express from "express";
import { add } from "../controller/control";

const router = express.Router();

router.post("/", add);

export default router;