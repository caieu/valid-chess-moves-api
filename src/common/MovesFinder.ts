import ValidMovesRequest from './ValidMovesRequest'
import ValidMovesResponse from './ValidMovesResponse'
import PositionValidator from './PositionValidator'

export default abstract class MovesFinder {
  abstract ValidMoves(request: ValidMovesRequest): ValidMovesResponse;
  validateRequest (request: ValidMovesRequest): void {
    if (!request.position) {
      throw new Error('POSITION_NOT_FOUND')
    }
    if (!PositionValidator(request.position)) {
      throw new Error('INVALID_POSITION')
    }
    if (!request.turns) {
      throw new Error('TURNS_NOT_FOUND')
    }
    if (request.turns < 1) {
      throw new Error('TURNS_MUST_BE_MORE_THAN_ZERO')
    }
  }
}
