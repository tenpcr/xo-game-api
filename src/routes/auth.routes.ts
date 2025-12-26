import express, { Router } from "express";
import * as authControllers from "../controllers/auth.controllers";
const router: Router = express.Router();

router.post("/sync", authControllers.sync);

export default router;
