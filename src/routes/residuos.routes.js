import express from 'express';
// import { Router} from "express";
import ResiduosController from "../controllers/residuosController.js";

const residuo = express.Router();

residuo.get('/', ResiduosController.getResiduos);
residuo.post('/cadastrar', ResiduosController.cadastrarResiduo);

export default residuo;