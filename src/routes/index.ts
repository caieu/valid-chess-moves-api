import { Router } from 'express'
import MovesFinder from '../common/MovesFinder'
import ValidMovesResponse from '../common/ValidMovesResponse'
import Knight from '../services/Knight'
import Move from '../models/Move'

const routes = Router()

routes.get('/knight', async (req, res) => {
  try {
    const validMovesFinder: MovesFinder = new Knight(req.query)
    const move = await Move.findOne(req.query)
    let response: ValidMovesResponse = { positions: [] }
    if (move) {
      response.positions = move.positions
    } else {
      response = validMovesFinder.ValidMoves()
      await Move.create({
        piece: 'knight',
        turns: req.query.turns,
        position: req.query.position,
        positions: response.positions
      })
    }
    res.send(response)
  } catch (e) {
    res.status(400).send({ error: e.message })
  }
})

export default routes
