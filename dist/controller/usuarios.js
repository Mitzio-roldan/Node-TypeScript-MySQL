"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = __importDefault(require("../models/usuario"));
const controller = {
    getUsuarios: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const usuarios = yield usuario_1.default.findAll();
        res.json({
            usuarios
        });
    }),
    getUsuario: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const usuario = yield usuario_1.default.findByPk(id);
        if (usuario) {
            res.json({
                usuario
            });
        }
        else {
            res.status(400).json({
                msg: 'Usuario no existe'
            });
        }
    }),
    postUsuario: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { body } = req;
        try {
            console.log(body);
            const usuario = new usuario_1.default(body);
            yield usuario.save();
            res.json(usuario);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'Hable con el admin'
            });
        }
    }),
    putUsuario: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const { body } = req;
        try {
            const usuario = yield usuario_1.default.findByPk(id);
            if (!usuario) {
                return res.status(400).json({
                    msg: 'No existe usuario con id: ' + id
                });
            }
            yield usuario.update(body);
            res.json(usuario);
        }
        catch (error) {
            res.json({
                msg: 'Hable con el admin',
            });
        }
    }),
    deleteUsuario: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'Usuario no existe'
            });
        }
        yield usuario.update({ estado: false });
        res.json({
            usuario
        });
        // await usuario.destroy()
    })
};
exports.default = controller;
//# sourceMappingURL=usuarios.js.map