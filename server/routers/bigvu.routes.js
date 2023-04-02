import express from "express";

import {
  getAllCourses,
  getCourseDataByID,
} from "../controllers/bigvu.controller.js";

const router = express.Router();

/*
 * Read
 */

router.route("/").get(getAllCourses);
router.route("/:id").get(getCourseDataByID);

export default router;
