import ValidMovesRequest from './ValidMovesRequest'
import ValidMovesResponse from './ValidMovesResponse'
import PositionValidator from './PositionValidator'

export default abstract class MovesFinder {
    abstract ValidMoves(request: ValidMovesRequest): ValidMovesResponse;
    validatePosition (position: string): void {
      if (!position) {
        throw new Error('POSITION_NOT_FOUND')
      }
      if (!PositionValidator(position)) {
        throw new Error('INVALID_POSITION')
      }
    }
}
