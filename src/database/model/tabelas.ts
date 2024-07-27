import { Sequelize, DataTypes} from 'sequelize'
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

const usuarios = sequelize.define('usuarios',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: false,
    },  
},{ 
    timestamps: false
})
const categoria = sequelize.define('categoria',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    timestamps: false
})
const estabelecimento = sequelize.define('funcionarios',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    cep:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    usuario_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: usuarios,
            key: 'id'
        }
    },
    url_logo:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    url_planoDeFundo:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    descricao:{
        type: DataTypes.TEXT,
        allowNull: false,

    },
    categoria_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: categoria,
            key: 'id'
        }
    },
    
},{
    timestamps: false
})
const servicos = sequelize.define('servicos',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco:{
        type: DataTypes.DECIMAL(11,10),
        allowNull: false,
    },
    descricao:{
        type: DataTypes.TEXT,
        allowNull: false,
    }
    
},{
    timestamps: false
})
const funcionarios = sequelize.define('funcionarios',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: usuarios,
            key: 'id'
        }
    }
})
const agenda = sequelize.define('agenda',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    funcionario_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: funcionarios,
            key: 'id'
        }
    },
    cliente_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: usuarios,
            key: 'id'
        }
    },
    servico_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: servicos,
            key: 'id'
        }
    },
    metodo_de_pagamento:{
        type: DataTypes.STRING,
        allowNull: false
    },
    data:{
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    timestamps: false
})

export function criarTabelas(){
        
        //  faz os relacionamentos  1 pra 1 
        estabelecimento.belongsTo(usuarios,{foreignKey: 'id'})
        estabelecimento.belongsTo(categoria,{foreignKey:'id'})
        funcionarios.belongsTo(usuarios,{foreignKey: 'id'})
        agenda.belongsTo(funcionarios,{foreignKey: 'id'})
        agenda.belongsTo(usuarios,{foreignKey:'id'})
        agenda.belongsTo(servicos,{foreignKey: 'id'})
        
        // faz relacionamentos mts pra mts e cria a tabela
        funcionarios.belongsToMany(servicos, {through: 'funcionariosServicos', timestamps: false})
        servicos.belongsToMany(funcionarios, {through: 'funcionariosServicos', timestamps: false})

        //  cria as tabelas 
    sequelize.sync({ force: true }).then(() => {
        console.log('Tabelas sincronizadas')
    }).catch(error => console.log('Erro ao sincronizar tabelas: ', error))

}

export function CadastrarUsuario(){
    usuarios.create({

    })
}



