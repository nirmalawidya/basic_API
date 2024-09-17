import { Request, Response } from "express";

const tubeVolume = (req: Request, res: Response) => {
    try {
        const r = Number(req.body.r)
        const t = Number(req.body.t)
        const volume = Math.PI * r * r * t
        return res
            .status(200)
            .json({
                message: `Volume of tube has counted`,
                volume: volume
            })
    } catch (error) {
        return res
            .status(500)
            .json(error)
    }
}

const coneVolume = (req: Request, res: Response) => {
    try {
        const r = Number(req.body.r)
        const t = Number(req.body.t)
        const volume = 1 / 3 * Math.PI * r * r * t
        return res
            .status(200)
            .json({
                message: `Volume of cone has counted`,
                volume: volume
            })
    } catch (error) {
        return res
            .status(500)
            .json(error)
    }
}

const cubeVolume = (req: Request, res: Response) => {
    try {
        const r = Number(req.body.r)
        const volume = r * r * r
        return res
            .status(200)
            .json({
                message: `Volume of cube has counted`,
                volume: volume
            })
    } catch (error) {
        return res
            .status(500)
            .json(error)
    }
} 

const ballVolume = (req: Request, res: Response) => {
    try {
        const r = Number(req.body.r)
        const volume = 4 / 3 * Math.PI * r * r * r
        return res
            .status(200)
            .json({
                message: `Volume of ball has counted`,
                volume: volume
            })
    } catch (error) {
        return res
            .status(500)
            .json(error)
    }
}
export { tubeVolume, coneVolume, cubeVolume, ballVolume }