import express, {Application} from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import nftRoutes from "./routes";
import connectDatabase from "./config/db";

dotenv.config();
connectDatabase();

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/", nftRoutes);

export default app;

