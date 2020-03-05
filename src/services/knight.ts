import MovesFinder from '../common/MovesFinder'
import ValidMovesRequest from '../common/ValidMovesRequest'
import ValidMovesResponse from '../common/ValidMovesResponse'

class Knight extends MovesFinder {
  public ValidMoves (request: ValidMovesRequest): ValidMovesResponse {
    const response: ValidMovesResponse = { positions: [] }
    super.validatePosition(request.position)
    return response
  }
}

export default new Knight()
