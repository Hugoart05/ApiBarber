import { Sequelize } from "sequelize";

// Verifique se as variáveis de ambiente estão definidas

export class DataBase {
    private static instancia: Sequelize

    private static getConfig() {
        return {
            database: process.env.DB_BASE || 'buscafacil',
            username: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '123456',
            host: process.env.DB_HOST || 'localhost',
        };
    }

    private constructor() { }

    public static getInstanciaDoBanco(): Sequelize {
        if (!DataBase.instancia) {
            const { database, host, password, username } = this.getConfig();

            DataBase.instancia = new Sequelize(database, username, password, {
                host: host,
                dialect: 'mysql',
                logging: false
            })
        }

        return DataBase.instancia;
    }
}

export default DataBase