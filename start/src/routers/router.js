import express from "express"
import { getAll, Update } from "../controllers/control";

const router = express.Router();

router.get("/", getAll);
router.post("/a", Update);

export default router