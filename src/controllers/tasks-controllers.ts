import serviceFunctions from "../services/task-services.js";
import { Response, Request } from "express";
import { notFoundError } from "../error/not-found-error.js";

export async function getTask(req: Request, res: Response) {
  const { id } = req.params
 
    try {
      const task = await serviceFunctions.getTask(id) 
      console.log(task)
      return res.status(200).send(task.rows);

    } catch(error){
        return res.send(notFoundError());
    }
};

export async function createTask (req: Request, res: Response) {
  const {task, progress}= req.body
 
    try {
       await serviceFunctions.postTask( task, progress ) 
      return res.sendStatus(201);

    } catch(error){
      console.log(error)
        return res.send("passou aqui");
    }
};

export async function updateTask (req: Request, res: Response) {
  const { id } = req.params
  const { progress } = req.body
 
    try {
       await serviceFunctions.updateTask( id, progress) 
      return res.sendStatus(201);

    } catch(error){
      if(error.name === "NotFoundError"){
        res.sendStatus(404)
      }else {
        res.sendStatus(500)
      }
    }
};

export async function deleteTask (req: Request, res: Response) {
  const { id } = req.params
 
    try {
       await serviceFunctions.deleteTask( id) 
      return res.sendStatus(200);

    } catch(error){
      if(error.name === "NotFoundError"){
        res.sendStatus(404)
      }else {
        res.sendStatus(500)
      }
    }
};


