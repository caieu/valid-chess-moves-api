export const MatrixToAlgebraic = (position: number[]):string => {
  return `${String.fromCharCode(97 + position[0]).toUpperCase()}${position[1] + 1}`
}

export const ArrayMatrixPositionsToAlgebraic = (positions: number[][]):string[] => {
  return positions.map(position => MatrixToAlgebraic(position))
}

export const AlgebraicToMatrix = (position: string): number[] => {
  const response: number[] = []
  const characters = position.split('')
  response.push(characters[0].toLowerCase().charCodeAt(0) - 97)
  response.push(parseInt(characters[1]) - 1)
  return response
}
