import { Router } from "express";
import { ballVolume, coneVolume, cubeVolume, tubeVolume } from "../controller/bangunRuangController";
import { validateBall, validateCone, validateCube, validateTube } from "../middleware/validateGeometry";

const router = Router()

/** define addres for tube volume */
router.post(`/tube`, [validateTube], tubeVolume)
router.post(`/cone`, [validateCone], coneVolume)
router.post(`/cube`, [validateCube], cubeVolume)
router.post(`/ball`, [validateBall], ballVolume)

export default router