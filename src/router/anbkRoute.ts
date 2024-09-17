import { Router } from "express";
import { countAverage } from "../controller/anbkController";
import { validateANBK } from "../middleware/validateANBK";
const router = Router()
router.post(`/average`,[validateANBK], countAverage)
export default router