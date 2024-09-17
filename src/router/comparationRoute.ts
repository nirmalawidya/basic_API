import { Router } from "express";
import { ageComparation } from "../controller/compareController";
import { validateAge } from "../middleware/validateComparation";

const router = Router()
router.post(`/age`,[validateAge], ageComparation)

export default router