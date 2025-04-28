import express from 'express';
import ResiduosController from "../controllers/residuosController.js";

const residuosRouter = express.Router();

residuosRouter.get('/', ResiduosController.getResiduos);
residuosRouter.post('/cadastrar', ResiduosController.cadastrarResiduo);

export default residuosRouter;