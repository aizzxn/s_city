import { Router } from "express";

const routes: Router = Router()

routes.get('/', (_, res) => {
    return res.send('Olá, dev!')
})

