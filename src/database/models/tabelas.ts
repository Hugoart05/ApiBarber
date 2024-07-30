import { Sequelize, DataTypes } from 'sequelize'
import 'dotenv/config'

// Verifique se as variáveis de ambiente estão definidas
const database = process.env.DB_BASE || 'default_db';
const username = process.env.DB_USER || 'root';
const password = process.env.DB_PASSWORD || 'password';
const host = process.env.DB_HOST || 'localhost';

const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: 'mysql'
});

export const usuarios = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false
})
export const categorias = sequelize.define('categorias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false
})
const estabelecimento = sequelize.define('funcionarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cep: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: usuarios,
            key: 'id'
        }
    },
    url_logo: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    url_planoDeFundo: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false,

    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: categorias,
            key: 'id'
        }
    },

}, {
    timestamps: false
})
export const servicos = sequelize.define('servicos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco: {
        type: DataTypes.DECIMAL(11, 10),
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
    }

}, {
    timestamps: false
})
export const funcionarios = sequelize.define('funcionarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: usuarios,
            key: 'id'
        }
    }
},{
    timestamps: false
})
const agenda = sequelize.define('agenda', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    funcionario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: funcionarios,
            key: 'id'
        }
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: usuarios,
            key: 'id'
        }
    },
    servico_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: servicos,
            key: 'id'
        }
    },
    metodo_de_pagamento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false
})
export const funcionariosServicos = sequelize.define('funcionarios_servicos',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    funcionarios_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: funcionarios,
            key: 'id'
        }
    },
    servicos_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: servicos,
            key: 'id'
        }
    },
},{
    timestamps: false
})
export async function criarTabelas() {

    //  faz os relacionamentos  1 pra 1 
    estabelecimento.belongsTo(usuarios, { foreignKey: 'id' })
    estabelecimento.belongsTo(categorias, { foreignKey: 'id' })
    funcionarios.belongsTo(usuarios, { foreignKey: 'id' })
    agenda.belongsTo(funcionarios, { foreignKey: 'id' })
    agenda.belongsTo(usuarios, { foreignKey: 'id' })
    agenda.belongsTo(servicos, { foreignKey: 'id' })

    // faz relacionamentos mts pra mts e cria a tabela
    funcionarios.belongsToMany(servicos, { through: 'funcionarios_servicos', foreignKey: 'funcionarios_id' })
    servicos.belongsToMany(funcionarios, { through: 'funcionarios_servicos', foreignKey: 'servicos_id' })

    //  cria as tabelas 
    await sequelize.sync().then(() => {
        console.log('Tabelas sincronizadas')
    }).catch(error => console.log('Erro ao sincronizar tabelas: ', error))
}