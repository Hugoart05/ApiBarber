"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
var DataBase_1 = __importDefault(require("./DataBase"));
exports.sequelize = DataBase_1.default.getInstanciaDoBanco();
