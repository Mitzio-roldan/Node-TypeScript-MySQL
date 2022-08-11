import { Request } from "express"
import { Response } from "express"
import Usuario from "../models/usuario"
const controller = {

    getUsuarios: async(req: Request, res: Response) =>{
        const usuarios = await Usuario.findAll()
        res.json({
            usuarios
        })
    },

    getUsuario: async (req: Request, res: Response) =>{
        const {id} = req.params
        const usuario = await Usuario.findByPk(id)
        if (usuario) {
            res.json({
                usuario
            })
        }
        else{
            res.status(400).json({
                msg: 'Usuario no existe'
            })
        }
    },

    postUsuario: async(req: Request, res: Response) =>{
        const {body} = req
    try {
        console.log(body);
        
        const usuario = new Usuario(body)
        await usuario.save()

        res.json(usuario)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        })
        
    }

    },

    putUsuario: async(req: Request, res: Response) =>{
        const {id} = req.params
        const {body} = req

        try {
            
            const usuario = await Usuario.findByPk(id)
            if (!usuario) {
                return res.status(400).json({
                    msg: 'No existe usuario con id: ' + id
                })
            }
            await usuario.update(body)
            res.json(usuario)

        } catch (error) {

            res.json({
                msg: 'Hable con el admin',
            })
        }



    },

    deleteUsuario: async(req: Request, res: Response) =>{
        const {id} = req.params
        const usuario = await Usuario.findByPk(id)
        if (!usuario) {
            return res.status(404).json({
                msg: 'Usuario no existe'
            })
        }
        
        await usuario.update({estado: false})
        res.json({
            usuario
        })
        // await usuario.destroy()

    }
}
export default controller