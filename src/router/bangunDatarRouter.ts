import { Router } from "express"; // import = tempatnya selalu di atas
import {circleArea, rectangleArea, triangleArea } from "../controller/bangunDatarController";
import { validateCircle, validateRectangle, validateTriangle } from "../middleware/validateShape";

const router = Router()
// define address for luas lingkaran
router.get(`/circle`,[validateCircle] ,circleArea)
// define address for area of triangle
router.get(`/triangle`,[validateTriangle], triangleArea)
router.get(`/rectangle`, [validateRectangle], rectangleArea)
export default router 