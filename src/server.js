import express from "express";
import notesRouter from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors";
dotenv.config();
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://fabulous-tapioca-363cb2.netlify.app/",
    ],
  }),
);

app.use(express.json());

app.use("/api/notes", notesRouter);

const PORT = process.env.PORT || 3001;

console.log(process.env.PORT);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor levantado en puerto http://localhost:${PORT}`);
  });
});
