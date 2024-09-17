import { Request, Response } from "express"; // pertama

type Nilai = { // keempat membuat type data
    nama: string
    nilaiLiterasi: number
    nilaiNumerasi: number
    nilaiRerata?: number // "?" adalah opsional(blh diisi/tdk)
}
const countAverage = (req: Request, res: Response) => { // kedua membuat fungsi
    try { // ketiga membuat try catch

        /** membaca request data */
        const nilai: Nilai[] = req.body.nilai
        for (let index = 0; index < nilai.length; index++) {
            nilai[index].nilaiRerata = (nilai[index].nilaiLiterasi + nilai[index].nilaiNumerasi) / 2
        }

        /** mapping array for select only
         * "nama" and "nilaiRerata"
         */
        const result = nilai
            .map(item => {
                let { nama, nilaiRerata } = item
                return { nama, nilaiRerata }
            })

        return res
            .status(200)
            .json(result)
    } catch (error) {
        return res
            .status(500)
            .json({ message: error })
    }
}

export { countAverage }