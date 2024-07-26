import { Sequelize, DataTypes, Model, InferAttributes, InferCreationAttributes, Optional } from 'sequelize'
import 'dotenv/config'
import { tipoDB } from '../../@types'

    
    
    

    const sequelize = new Sequelize('test','root','553699',{
        host: 'localhost',
        dialect: 'mysql'
    })

    interface UserAtributos{
        id:number
        nome:string
    }

    type UserCreationAtributos = Optional<UserAtributos,"id">;

    class Usuario extends Model<UserAtributos, UserCreationAtributos>{
        declare id: number;
        declare nome:string;
    }

    
        
    
    

    // export function TabelaUsuarios(){

    //     const usuarios = sequelize.define('usuarios',{
    //         id:{
    //             type: DataTypes.INTEGER,
    //             primaryKey: true,
    //             autoIncrement: true
    //         },
    //         nome:{
    //             type: DataTypes.STRING,
    //             allowNull: false,
    //         },
    //         email:{
    //             type: DataTypes.STRING,
    //             allowNull: false,
    //         },
    //         telefone:{
    //             type: DataTypes.STRING,
    //             allowNull: false,
    //         },
    //         senha:{
    //             type: DataTypes.STRING,
    //             allowNull: false,
    //         }
    //     })

    //     const funcionarios = sequelize.define('funcionarios',{
    //         id:{
    //             type: DataTypes.INTEGER,
    //             primaryKey: true,
    //             autoIncrement: true
    //         },
    //         nome:{
    //             type: DataTypes.STRING,
    //             allowNull: false,
    //         },
    //         cep:{
    //             type: DataTypes.INTEGER,
    //             allowNull: false,
    //         },
    //         telefone:{
    //             type: DataTypes.STRING,
    //             allowNull: false,
    //         },
    //         senha:{
    //             type: DataTypes.STRING,
    //             allowNull: false,
    //         }
    //     })
    
    //  usuarios.sync({force: true})
    // }
    