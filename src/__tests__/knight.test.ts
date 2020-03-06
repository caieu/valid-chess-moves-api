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
  it('must throw a error for non valid algebraic position', () => {
    const request: ValidMovesRequest = { position: 'M99' }
    try {
      Knight.ValidMoves(request)
    } catch (e) {
      expect(e.message).toBe('INVALID_POSITION')
    }
  })
  it('must throw a error for request without position', () => {
    try {
      Knight.ValidMoves({ position: '' })
    } catch (e) {
      expect(e.message).toBe('POSITION_NOT_FOUND')
    }
  })
})
