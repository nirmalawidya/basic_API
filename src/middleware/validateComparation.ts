import { NextFunction, Request, Response } from "express";
import Joi from "joi";

/** add schema for Person */
const personSchema = Joi.object({
    name: Joi.string().required(),
    dob: Joi.date().required().max(new Date())
})

/** create schema for age comparation */
const ageSchema = Joi.object({
    firstPerson: personSchema.required(),
    secondPerson: personSchema.required()
})

const validateAge = (
    req: Request, res: Response,
    next: NextFunction) => {

    /** check an error of validation */
    const validation = ageSchema.validate(req.body)
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

export { validateAge }