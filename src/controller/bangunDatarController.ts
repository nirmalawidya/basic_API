import { Request, Response } from "express";

/** create a function to count
 * area of circle
 */
const circleArea = (req: Request, res: Response) => {
    try {
        // assume that data sent query URL
        const r: number = Number(req.query.r)
        // Number for convert to numeric value
        // number = tipe data
        const luas = Math.PI * r * r
        return res
            .status(200) // 200 = success
            .json({
                message: `Area of circle has counted`,
                luas: luas
            })
    } catch (error) {
        // 500 = internal server error
        return res
            .status(500)
            .json(error)
    }
}

const triangleArea = (req: Request, res: Response) => {
    try {
        const alas: number = Number(req.query.alas)
        const tinggi: number = Number(req.query.tinggi)
        const luas = 0.5 * alas * tinggi
        return res
            .status(200)
            .json({
                message: `Area of triangle has counted`,
                luas: luas
            })
    } catch (error) {
        return res
            .status(500)
            .json(error)
    }
}

const rectangleArea = (req: Request, res: Response) => {
    try {
        const width: number = Number(req.params.width)
        const height: number = Number(req.params.height)
        const luas = width * height
        return res
            .status(200)
            .json({
                message: `Area of rectangle has counted`,
                luas: luas
            })
    } catch (error) {
        return res
            .status(500)
            .json(error)
    }
}
export { triangleArea, circleArea, rectangleArea } // export = tempatnya di paling terakhir