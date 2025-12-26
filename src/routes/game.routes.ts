import express, { Router } from "express";
import * as gameControllers from "../controllers/game.controllers";
import { checkAccessToken } from "../middlewares/accessToken";

const router: Router = express.Router();

router.get("/ranks", gameControllers.ranks);
router.put("/point/add", checkAccessToken, gameControllers.addUserPoint);
router.put("/point/remove", checkAccessToken, gameControllers.deductUserPoint);
router.get("/point/:id", gameControllers.getUserPointById);

export default router;
