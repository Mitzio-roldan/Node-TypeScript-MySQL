"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller = {
    getUsuarios: (req, res) => {
        res.json({
            msg: 'GetUsuarios'
        });
    },
    getUsuario: (req, res) => {
        const { id } = req.params;
        res.json({
            msg: 'GetUsuario',
            id
        });
    },
    postUsuario: (req, res) => {
        const { body } = req;
        res.json({
            msg: 'PostUsuarios',
            body
        });
    },
    putUsuario: (req, res) => {
        const { id } = req.params;
        const { body } = req;
        res.json({
            msg: 'PutUsuarios',
            body
        });
    }
};
exports.default = controller;
//# sourceMappingURL=usuarios.js.map