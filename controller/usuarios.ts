import { Request } from "express"
import { Response } from "express"
const controller = {

    getUsuarios: (req: Request, res: Response) =>{
        res.json({
            msg: 'GetUsuarios'
        })
    },

    getUsuario: (req: Request, res: Response) =>{
        const {id} = req.params
        res.json({
            msg: 'GetUsuario',
            id
        })
    },

    postUsuario: (req: Request, res: Response) =>{
        const {body} = req
        res.json({
            msg: 'PostUsuarios',
            body
        })
    },

    putUsuario: (req: Request, res: Response) =>{
        const {id} = req.params
        const {body} = req

        res.json({
            msg: 'PutUsuarios',
            body
        })
    }
}
export default controller