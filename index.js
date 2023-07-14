import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());

dotenv.config();

conectarDB();

app.use(cors());

app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacienteRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(
    process.env.MONGO_URL,
    process.env.JWT_SECRET,
    process.env.EMAIL_USER,
    process.env.EMAIL_HOST,
    process.env.EMAIL_PORT,
    process.env.EMAIL_PASS,
    process.env.FRONT_URL
  );
  console.log(`Ready server en ${PORT}`);
});
