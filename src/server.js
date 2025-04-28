import express from "express";
import residuoRouter from "./routes/residuos.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/residuos", residuoRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});