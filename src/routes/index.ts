import { Router } from 'express'
import MovesFinder from '../common/MovesFinder'
import ValidMovesResponse from '../common/ValidMovesResponse'

const routes = Router()

routes.get('/validMoves/:piece', async (req, res) => {
  const piece: string = req.params.piece
  if (!piece) {
    res.status(404).send({ error: 'You must inform the piece' })
  }
  try {
    const validMovesFinder: MovesFinder = (await import(`../services/${piece}`)).default
    const response: ValidMovesResponse = validMovesFinder.ValidMoves(req.query)
    res.send(response)
  } catch (e) {
    res.status(400).send({ error: e.message })
  }
})

export default routes
