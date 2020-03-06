import ValidMovesRequest from './ValidMovesRequest'
import ValidMovesResponse from './ValidMovesResponse'
import PositionValidator from './PositionValidator'

export default abstract class MovesFinder {
  protected request:ValidMovesRequest

  abstract ValidMoves(): ValidMovesResponse;

  constructor (request: ValidMovesRequest) {
    this.request = request
    this.validateRequest()
  }

  protected validateRequest (): void {
    if (!this.request.turns) {
      throw new Error('TURNS_NOT_FOUND')
    }
    if (this.request.turns < 1) {
      throw new Error('TURNS_MUST_BE_GREATER_THEN_ZERO')
    }
    if (!this.request.position) {
      throw new Error('POSITION_NOT_FOUND')
    }
    if (!PositionValidator(this.request.position)) {
      throw new Error('INVALID_POSITION')
    }
  }
}
