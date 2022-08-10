"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = __importDefault(require("../controller/usuarios"));
const router = (0, express_1.Router)();
router.get('/', usuarios_1.default.getUsuarios);
router.get('/:id', usuarios_1.default.getUsuario);
router.post('/', usuarios_1.default.postUsuario);
router.put('/:id', usuarios_1.default.putUsuario);
exports.default = router;
//# sourceMappingURL=usuarios.js.map