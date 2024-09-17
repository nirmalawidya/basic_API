/** this file use to
 * validatr request data for geometry
 * such as tube, cube, ball, cone etc.
 */
import { NextFunction, Request, Response } from "express";
import Joi from "joi";

/** create a schema / rule to validate
 * request fot "TUBE"
 */
const tubeSchema = Joi.object({
    r: Joi.number().min(1).required(),
    t: Joi.number().min(1).required()
})

/** create function to validate request */
const validateTube = (
    req: Request, res: Response,
    next: NextFunction) => {

    /** check an error of validation */
    const validation = tubeSchema.validate(req.body)
    if (validation.error) {
        // 400: Bad request
        return res.status(400).json({
            message: validation
                .error
                .details
                .map(item => item.message).join()
        })
    }
    return next()
}

const coneSchema = Joi.object({
    r: Joi.number().min(1).required(),
    t: Joi.number().min(1).required()
})
const validateCone= (
    req: Request, res: Response,
    next: NextFunction) => {

    const validation = coneSchema.validate(req.body)
    if (validation.error) {
        return res.status(400).json({
            message: validation
                .error
                .details
                .map(item => item.message).join()
        })
    }
    return next()
}

const cubeSchema = Joi.object({
    r: Joi.number().min(1).required()
})
const validateCube= (
    req: Request, res: Response,
    next: NextFunction) => {

    const validation = cubeSchema.validate(req.body)
    if (validation.error) {
        return res.status(400).json({
            message: validation
                .error
                .details
                .map(item => item.message).join()
        })
    }
    return next()
}

const ballSchema = Joi.object({
    r: Joi.number().min(1).required()
})
const validateBall= (
    req: Request, res: Response,
    next: NextFunction) => {

    const validation = ballSchema.validate(req.body)
    if (validation.error) {
        return res.status(400).json({
            message: validation
                .error
                .details
                .map(item => item.message).join()
        })
    }
    return next()
}
export { validateTube, validateCone, validateCube, validateBall }











