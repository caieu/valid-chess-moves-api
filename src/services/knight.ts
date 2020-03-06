import MovesFinder from '../common/MovesFinder'
import ValidMovesResponse from '../common/ValidMovesResponse'
import { AlgebraicToMatrix, ArrayMatrixPositionsToAlgebraic } from '../common/AlgebraicHelper'
import _ from 'underscore'

class Knight extends MovesFinder {
  public ValidMoves (): ValidMovesResponse {
    const response: ValidMovesResponse = { positions: [] }
    let possiblePositions = [this.request.position]
    for (let turn = 0; turn < this.request.turns; turn++) {
      let totalPossiblePositions: string[] = []
      possiblePositions.forEach(possiblePosition => {
        totalPossiblePositions = _.uniq(totalPossiblePositions.concat(this.getpossiblePositions(possiblePosition)))
      })
      possiblePositions = totalPossiblePositions
    }
    response.positions = possiblePositions
    return response
  }

  private getpossiblePositions (algebraicPosition: string): string[] {
    const position = AlgebraicToMatrix(algebraicPosition)
    const possiblePositions = [
      [position[0] - 1, position[1] - 2],
      [position[0] - 2, position[1] - 1],
      [position[0] + 1, position[1] - 2],
      [position[0] + 2, position[1] - 1],
      [position[0] - 2, position[1] + 1],
      [position[0] - 1, position[1] + 2],
      [position[0] + 1, position[1] + 2],
      [position[0] + 2, position[1] + 1]
    ]

    const response = possiblePositions.filter((move) => {
      const boardSize = 8
      return move[0] >= 0 && move[1] >= 0 && move[0] < boardSize && move[1] < boardSize
    })
    return ArrayMatrixPositionsToAlgebraic(response)
  }
}

export default Knight
