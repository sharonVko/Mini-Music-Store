import express from "express";
import "./db/server.js";
import recordsRouter from "./routes/recordsRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());
//Routes

app.use("/records", recordsRouter);
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
