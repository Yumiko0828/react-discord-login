import { Router } from "express";
import { userCtrls } from "../controllers/main";
import isAuth from "../middlewares/isAuth";
const router = Router();

router.get("/me", [isAuth], userCtrls.me);

export default router;
