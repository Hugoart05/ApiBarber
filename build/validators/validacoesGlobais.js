"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCampos = validarCampos;
exports.validarCaracteresEmail = validarCaracteresEmail;
function validarCampos(dados) {
    for (var _i = 0, _a = Object.entries(dados); _i < _a.length; _i++) {
        var _b = _a[_i], chave = _b[0], valor = _b[1];
        if (valor === '' || valor === null || valor === undefined) {
            return { status: false, mensagem: "O campo ".concat(chave, " esta invalido podendo estar vazio, nulo ou indefinido") };
        }
    }
    return { status: true, mensagem: 'campos com dados' };
}
function validarCaracteresEmail(email) {
    // Expressão regular para validar o e-mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@\.]+$/;
    if (!emailRegex.test(email)) {
        return {
            status: false,
            mensagem: 'E-mail inválido'
        };
    }
    return {
        status: true,
        mensagem: 'E-mail válido'
    };
}
