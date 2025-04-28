import { Residuos } from "../models/residuosModel.js";

class ResiduosController{
    getResiduos(req, res){
        res.json(Residuos.db_residuos)
    }

    cadastrarResiduo(req, res){
        const {
            nome,
            tipo,
            quantidade,
            dataColeta,
            localColeta,
            origem
        } = req.body;

        const addResiduo = new Residuos(
            nome,
            tipo,
            quantidade,
            dataColeta,
            localColeta,
            origem
        )

        addResiduo.cadastrarResiduo(addResiduo)
    }

}

export default new ResiduosController();