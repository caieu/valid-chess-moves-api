import MovesFinder from '../common/MovesFinder'
import ValidMovesRequest from '../common/ValidMovesRequest'
import ValidMovesResponse from '../common/ValidMovesResponse'
import { AlgebraicToMatrix, ArrayMatrixPositionsToAlgebraic } from '../common/AlgebraicHelper'
import _ from 'underscore'

class Knight extends MovesFinder {
  public ValidMoves (request: ValidMovesRequest): ValidMovesResponse {
    const response: ValidMovesResponse = { positions: [] }
    super.validateRequest(request)
    let possibleMoves = [AlgebraicToMatrix(request.position)]
    for (let index = 0; index < 2; index++) {
      let totalPossibleMoves: number[][] = []
      possibleMoves.forEach(possibleMove => {
        totalPossibleMoves = totalPossibleMoves.concat(this.getPossibleMoves(possibleMove))
      })
      possibleMoves = totalPossibleMoves
    }
    response.positions = _.uniq(ArrayMatrixPositionsToAlgebraic(possibleMoves))
    return response
  }

  private getPossibleMoves (position: number[]): number[][] {
    const possibleMoves = [
      [position[0] - 1, position[1] - 2],
      [position[0] - 2, position[1] - 1],
      [position[0] + 1, position[1] - 2],
      [position[0] + 2, position[1] - 1],
      [position[0] - 2, position[1] + 1],
      [position[0] - 1, position[1] + 2],
      [position[0] + 1, position[1] + 2],
      [position[0] + 2, position[1] + 1]
    ]

    return possibleMoves.filter((move) => {
      const boardSize = 8
      return move[0] >= 0 && move[1] >= 0 && move[0] < boardSize && move[1] < boardSize
    })
  }
}

export default new Knight()
