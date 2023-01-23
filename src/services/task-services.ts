import connection from "../database/db.js";
import { notFoundError } from "../error/not-found-error.js"


async function getTask (id: string) {
    const task = await connection.query(`SELECT * FROM tasks WHERE id=$1`,[id] )
    console.log(task)
    
    if (!task) {
        throw notFoundError();
      }
      return task;
}

async function postTask (task: string, progress: string) {
 
  await connection.query(`INSERT INTO tasks (task, progress) VALUES ($1, $2)`, [task, progress] )
}

async function updateTask (id: string, progress: string) {
  const task = await connection.query(`SELECT * FROM tasks WHERE id=$1`,[id])
  
  if(task.rows.length === 0){
    throw notFoundError()
  }
   
  await connection.query(`UPDATE tasks SET progress = $1 WHERE id=$2`,[ progress, id])
  
}

async function deleteTask (id: string) {
  const task = await connection.query(`SELECT * FROM tasks WHERE id=$1`,[id])
  
  if(task.rows.length === 0){
    throw notFoundError()
  }
   
  await connection.query(`DELETE FROM tasks WHERE id=$1`,[id])
}

const serviceFunctions = {
    getTask,
    postTask,
    updateTask,
    deleteTask
  };
  
  export default serviceFunctions;
  