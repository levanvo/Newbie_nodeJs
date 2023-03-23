import express from "express";
import { addPr, getAll, removePr, updatePr } from "../controllers/control";
const router = express.Router();

// We should use method (use) for allthings .except get() !!

router.get("/", getAll);
// router.get("/update", updatePr);
router.post("/add", addPr);
router.delete("/remove/:id", removePr);
router.put("/update/:id", updatePr);


export default router;