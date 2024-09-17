import { Request, Response } from "express";
type Person = {
    name: string,
    dob: string
}
const ageComparation = (req: Request, res: Response) => {
    try {
        const firstPerson: Person = req.body.firstPerson
        const secondPerson: Person = req.body.secondPerson

        const firstDob: Date = new Date(firstPerson.dob)
        const secondDob: Date = new Date(secondPerson.dob)
        let message = ``
        // jika orang pertama lebih muda daripada orang kedua
        if (firstDob.getTime() > secondDob.getTime()) {
            message = `${secondPerson.name} older than ${firstPerson.name}`
        }
        else if (firstDob.getTime() < secondDob.getTime()) {
            message = `${firstPerson.name} older than ${secondPerson.name}`
        }
        else {
            message = `${firstPerson.name} as old as ${secondPerson.name}`
        }
        return res
            .status(200)
            .json({ message })
    } catch (error) {
        return res
            .status(500)
            .json({ message: error })
    }
}

export { ageComparation }
