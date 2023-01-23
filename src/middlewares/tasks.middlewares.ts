import { taskValidationSchema } from "../schemas/task.schemas.js";
import { Response, Request, NextFunction } from "express";

export async function taskValidation (req: Request, res: Response, next: NextFunction) {
    const { task, progress  } = req.body

    const validation = taskValidationSchema.validate({ task, progress }, { abortEarly: false })

    if (validation.error) {
        const erros = validation.error.details.map((detail) => detail.message)
        res.status(400).send(erros)
        return
    }
   
    next()
}