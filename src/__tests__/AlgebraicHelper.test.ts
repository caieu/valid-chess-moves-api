import { MatrixToAlgebraic, ArrayMatrixPositionsToAlgebraic, AlgebraicToMatrix } from '../common/AlgebraicHelper'

describe('AlgebraicHelper', () => {
  const matrixPositions: number[][] = []
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      matrixPositions.push([x, y])
    }
  }
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  const algebraicPositions: string[] = []
  columns.forEach((column) => {
    for (let index = 0; index < columns.length; index++) {
      algebraicPositions.push(`${column}${index + 1}`)
    }
  })
  describe('MatrixToAlgebraic', () => {
    it('must convert from a matrix position to algebraic position', () => {
      for (let index = 0; index < matrixPositions.length; index++) {
        expect(MatrixToAlgebraic(matrixPositions[index])).toBe(algebraicPositions[index])
      }
    })
  })
  describe('ArrayMatrixPositionsToAlgebraic', () => {
    it('must return a list with all algebraic positions possibles in a 8x8 board chess', () => {
      expect(ArrayMatrixPositionsToAlgebraic(matrixPositions)).toStrictEqual(algebraicPositions)
    })
  })
  describe('AlgebraicToMatrix', () => {
    it('must convert from algebraic position to matrix position', () => {
      for (let index = 0; index < algebraicPositions.length; index++) {
        expect(AlgebraicToMatrix(algebraicPositions[index])).toStrictEqual(matrixPositions[index])
      }
    })
  })
})
