"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDataAtual = GetDataAtual;
function GetDataAtual() {
    var date = Date.now();
    return new Date(date);
}
