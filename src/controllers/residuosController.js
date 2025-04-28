import { Residuos } from "../models/residuosModel.js";
import { v4 as uuid } from "uuid";

class ResiduosController {
    getResiduos(req, res) {
        res.json(Residuos.db_residuos);
    }

    async cadastrarResiduo(req, res) {
        try {
            const { nome, tipo, quantidade, dataColeta, localColeta, origem } = req.body;
            
            const id = uuid();

            const addResiduo = new Residuos(
                id,
                nome,
                tipo,
                quantidade,
                dataColeta,
                localColeta,
                origem
            );

            await addResiduo.cadastrarResiduo(addResiduo);
            
            res.status(201).json({
                message: "Resíduo cadastrado com sucesso",
                data: addResiduo
            });
        } catch (error) {
            res.status(400).json({
                message: "Erro ao cadastrar resíduo",
                error: error.message
            });
        }
    }
}

export default new ResiduosController();