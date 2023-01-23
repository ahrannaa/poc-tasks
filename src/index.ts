import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import testRoutes from "./routes/test-routes.js";
import tasksRoutes from "./routes/tasks-routes.js";
dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.use(testRoutes);
app.use(tasksRoutes);

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server running in port ${port}`))