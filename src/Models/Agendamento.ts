import { DataTypes, Model, Optional } from "sequelize"
import { DataType } from "sequelize-typescript"
import { sequelize } from "../db/Instancia"
interface IAgendamento {
    id: number
    funcionarioId: number
    clienteId: number
    pagamento: string
    dataHora: string
}

export interface AgendamentoCreationAttributes extends Optional<IAgendamento, 'id'> { }

export class Agendamento extends Model<IAgendamento, AgendamentoCreationAttributes> implements IAgendamento {
    public id!: number
    public funcionarioId!: number
    public clienteId!: number
    public pagamento!: string
    public dataHora!: string
}

Agendamento.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    funcionarioId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    clienteId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dataHora: {
        type: DataTypes.DATE,
        allowNull: false
    },
    pagamento: {
        type: DataTypes.STRING,
        allowNull: false
    },


},
    {
        sequelize,
        tableName: "agendamentos",
        timestamps: false
    }
)