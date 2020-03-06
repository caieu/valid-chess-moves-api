import Knight from '../services/knight'
import ValidMovesRequest from '../common/ValidMovesRequest'

describe('Knight Service', () => {
  it('has ValidMoves function', () => {
    expect(Knight.ValidMoves).toBeDefined()
  })
  it('must return a ValidMovesRequestObject', () => {
    const request: ValidMovesRequest = { position: 'A5' }
    const response = Knight.ValidMoves(request)
    expect(response).toHaveProperty('positions')
    expect(Array.isArray(response.positions)).toBe(true)
  })
  test('must throw a error for non valid algebraic position', () => {
    const request: ValidMovesRequest = { position: 'M9' }
    try {
      Knight.ValidMoves(request)
    } catch (e) {
      expect(e.message).toBe('INVALID_POSITION')
    }
  })
})
