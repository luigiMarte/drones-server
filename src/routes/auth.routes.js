import { Router } from "express";
const router = Router();

import * as userController from "../controllers/auth.controller.js";

router.post("/sign_up", userController.signUp);
router.post("/sign_in", userController.signIn);

import { verifyToken } from "../middlewares/index.js";

// router.post('/', verifyToken, userController.createUser);

router.get("/", userController.getUsers);

router.get("/:userId", userController.getUserById);

router.put("/:userId", verifyToken, userController.updateUserById);

router.post("/favorites/:userId", verifyToken, userController.updateFavorites);
router.put("/favorites/remove/:userId", userController.removeFavorite);

// get pilots
router.get("/pilots", userController.getPilots);
router.get("/city/:city", userController.getPilotsByCity);

// delete user
router.delete("/:userId", verifyToken, userController.deleteUser);

export default router;
