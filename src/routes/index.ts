import { Router } from 'express'
import MovesFinder from '../common/MovesFinder'
import ValidMovesResponse from '../common/ValidMovesResponse'
import Knight from '../services/knight'

const routes = Router()

routes.get('/knight', async (req, res) => {
  try {
    const validMovesFinder: MovesFinder = new Knight(req.query)
    const response: ValidMovesResponse = validMovesFinder.ValidMoves()
    res.send(response)
  } catch (e) {
    res.status(400).send({ error: e.message })
  }
})

export default routes
