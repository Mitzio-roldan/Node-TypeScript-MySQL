import { Router } from 'express';
import userController from '../controller/usuarios';

const router = Router();

router.get('/', userController.getUsuarios)

router.get('/:id', userController.getUsuario)

router.post('/', userController.postUsuario)

router.put('/:id', userController.putUsuario)

export default router