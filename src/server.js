import express from "express";
import residuo from "./routes/residuos.routes.js";


const app = express();
const PORT = 3000;

app.use(express.json()); // PARSE DO JSON


app.use("/", residuo);
app.use("/residuos", residuo);
app.use("/residuos/cadastrar", residuo);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});