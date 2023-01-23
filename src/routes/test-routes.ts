import { Router } from "express"
import { Request, Response } from "express"

const testRoutes = Router ()

testRoutes.get("/health", (req: Request, res: Response) => {
    res.send("Ok")
})

export default testRoutes