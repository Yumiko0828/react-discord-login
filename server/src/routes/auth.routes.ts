import { Router } from "express";
import passport from "passport";
import { authCtrls } from "../controllers/main";
const router = Router();

router.get("/", passport.authenticate("discord"));

router.get(
  "/callback",
  passport.authenticate("discord", { failureRedirect: "/auth" }),
  authCtrls.Callback
);

router.get("/verify", authCtrls.Verify);

export default router;
