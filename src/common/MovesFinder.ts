import ValidMovesRequest from './ValidMovesRequest'
import ValidMovesResponse from './ValidMovesResponse'
import PositionValidator from './PositionValidator'

export default abstract class MovesFinder {
  abstract ValidMoves(request: ValidMovesRequest): ValidMovesResponse;
  protected validateRequest (request: ValidMovesRequest): void {
    if (!request.position) {
      throw new Error('POSITION_NOT_FOUND')
    }
    if (!PositionValidator(request.position)) {
      throw new Error('INVALID_POSITION')
    }
  }
}
