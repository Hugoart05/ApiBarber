"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = void 0;
var sequelize_1 = require("sequelize");
// Verifique se as variáveis de ambiente estão definidas
var DataBase = /** @class */ (function () {
    function DataBase() {
    }
    DataBase.getConfig = function () {
        return {
            database: process.env.DB_BASE || 'buscafacil',
            username: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '123456',
            host: process.env.DB_HOST || 'localhost',
        };
    };
    DataBase.getInstanciaDoBanco = function () {
        if (!DataBase.instancia) {
            var _a = this.getConfig(), database = _a.database, host = _a.host, password = _a.password, username = _a.username;
            DataBase.instancia = new sequelize_1.Sequelize(database, username, password, {
                host: host,
                dialect: 'mysql',
                logging: false
            });
        }
        return DataBase.instancia;
    };
    return DataBase;
}());
exports.DataBase = DataBase;
exports.default = DataBase;
