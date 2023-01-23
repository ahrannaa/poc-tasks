import { Router } from "express";
import { Response, Request } from "express";
import { createTask, deleteTask, getTask, updateTask } from "../controllers/tasks-controllers.js";
import { taskValidation } from "../middlewares/tasks.middlewares.js";



const tasksRoutes = Router()

tasksRoutes.get("/tasks/:id", getTask)
tasksRoutes.post("/tasks", taskValidation, createTask )
tasksRoutes.put("/tasks/:id", updateTask)
tasksRoutes.delete("/tasks/:id", deleteTask)

export default tasksRoutes