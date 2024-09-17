import { NextFunction, Request, Response } from "express";
import Joi from "joi";
const Nilai = Joi.object({
    nama: Joi.string().required(),
    nilaiLiterasi: Joi.number().min(0).max(100).required(),
    nilaiNumerasi: Joi.number().min(0).max(100).required()
})
const schema = Joi.object({
    nilai: Joi.array()
        .items(Nilai) // define type of object
        .min(1) // array must be filled
        .required()
})

const validateANBK = (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body)
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

export { validateANBK }
