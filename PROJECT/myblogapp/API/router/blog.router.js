import express from 'express';

const router =express.Router();

//to link controller on router file
import * as blogController from '../controller/blog.controller.js';

router.post("/save",blogController.save);
router.get("/fetch",blogController.fetch);
router.patch("/update",blogController.update);
router.delete("/delete",blogController.deletUser);

export default router;