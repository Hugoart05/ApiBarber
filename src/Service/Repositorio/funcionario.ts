import { tipoValidacao } from "../../@types"
import { funcionarios } from "../../Models/Funcionario"
import { usuarios } from "../../Models/Usuarios"

export async function adicionarFuncionario(id:number):Promise<tipoValidacao> {
    const usuario = await usuarios.findByPk(id)
    if(usuario === null){
        return {status: false, mensagem:' usuario não encontrado'}
    }
    const result = await funcionarios.findByPk(id)
    if(result === null){
        await funcionarios.create({
            usuario_id: id
        })
        return {status: true, mensagem:' funcionario cadastrado com sucesso'}
    }else{
        
        return {status: false, mensagem: 'este funcionario ja existe'}
    }
}
export async function pesquisarFuncionario(id:number):Promise<unknown[] | undefined> {
    const result =  await funcionarios.sequelize?.query(`
        SELECT * FROM funcionarios as f 
        inner join usuarios as u on u.id = f.usuario_id
        where  f.id = ${id};
        `
    )
    return result?.[0]  
}
export async function pesquisarFuncionarios():Promise<unknown[] | undefined> {
    const result =  await funcionarios.sequelize?.query(`
        SELECT * FROM funcionarios as f 
        inner join usuarios as u on u.id = f.usuario_id
        where u.id = f.usuario_id;`
    )
    return result?.[0]
}
export async function deletarFuncionario(id: number):Promise<tipoValidacao> {
    const valida = await funcionarios.findOne({ where: { id: id } })
    if (valida === null) {
        return {status:false, mensagem:'funcionario nao encontrada'}
    } else {
        try {
            await funcionarios.destroy({ where: { id: id } })
            return {status:true, mensagem:'Funcionario deletado'}
        } catch (error) {
            return {status:false, mensagem:`erro ao deletar funcionario: ${error}`}
        }
    }
}