import express from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController'

const routes = express.Router()

const classesController = new ClassesController()
const connectionsController = new ConnectionsController()

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação o atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: paginação, filtros, ordenação

routes.get('/classes', classesController.index)
routes.post('/classes', classesController.create)
routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes