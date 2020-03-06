import Knight from '../services/knight'
import ValidMovesRequest from '../common/ValidMovesRequest'

describe('Knight Service', () => {
  const defaultRequest: ValidMovesRequest = { turns: 2, position: 'A5' }
  const defaultKnight: Knight = new Knight(defaultRequest)
  it('has ValidMoves function', () => {
    expect(defaultKnight.ValidMoves).toBeDefined()
  })
  it('must return a ValidMovesRequestObject', () => {
    const response = defaultKnight.ValidMoves()
    expect(response).toHaveProperty('positions')
    expect(Array.isArray(response.positions)).toBe(true)
  })
  it('must throw a error for non valid algebraic position', () => {
    const request: ValidMovesRequest = { turns: 2, position: 'M99' }
    try {
      const knight: Knight = new Knight(request)
      knight.ValidMoves()
    } catch (e) {
      expect(e.message).toBe('INVALID_POSITION')
    }
  })
  it('must throw a error for request without position', () => {
    const request: ValidMovesRequest = { turns: 2, position: '' }
    try {
      const knight: Knight = new Knight(request)
      knight.ValidMoves()
    } catch (e) {
      expect(e.message).toBe('POSITION_NOT_FOUND')
    }
  })
  it('must return the correct possible positions', () => {
    const request: ValidMovesRequest = { turns: 2, position: 'A1' }
    const possibleMoves = ['A1', 'C1', 'D2', 'A5', 'C5', 'D4', 'E1', 'A3', 'B4', 'E3']
    const knight: Knight = new Knight(request)
    const response = knight.ValidMoves()
    expect(response).toHaveProperty('positions')
    expect(response.positions.length).toBe(10)
    possibleMoves.forEach(possibleMove => expect(response.positions.indexOf(possibleMove)).toBeGreaterThanOrEqual(0))
  })
})
