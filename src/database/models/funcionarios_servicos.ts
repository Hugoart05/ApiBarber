import { Op } from "sequelize"
import { funcionarios, funcionariosServicos, servicos } from "./tabelas"

export async function adicionarFuncionarios_servicos(id: number, nome:string) {
    const funcionario = await funcionarios.findByPk(id)
    const servico = await servicos.findOne({ where: { nome: { [Op.like]: `%${nome}%` } } })

    if(funcionario != null && servico != null){
        // console.log(servico.dataValues.id)
        // console.log(funcionario.dataValues.usuario_id)
        funcionariosServicos.create({
            funcionario_id: funcionario.dataValues.usuario_id,
            servico_id: servico.dataValues.id
        })
    }else{
        console.log('nao encontrado')
    }
}