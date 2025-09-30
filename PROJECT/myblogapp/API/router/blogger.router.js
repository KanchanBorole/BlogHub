import express from 'express';

const router =express.Router();

//to link controller on router file
import * as bloggerController from '../controller/blogger.controller.js';

router.post("/save",bloggerController.save);
router.get("/fetch",bloggerController.fetch);
router.patch("/update",bloggerController.update);
router.delete("/delete",bloggerController.deletUser);
router.post("/login",bloggerController.login);

export default router;