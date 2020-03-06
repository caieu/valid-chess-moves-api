import PositionValidator from '../common/PositionValidator'

describe('PositionValidator', () => {
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  it('not valid positions must return false', () => {
    columns.forEach((element) => {
      for (let index = 0; index < columns.length; index++) {
        expect(PositionValidator(`${element.toLowerCase()}${index + 1}`)).toBe(false)
        expect(PositionValidator(`${element}${index + 1}${element}`)).toBe(false)
        expect(PositionValidator(`${index + 1}${element}`)).toBe(false)
      }
    })
  })
  it('valid positions must return true', () => {
    columns.forEach((element) => {
      for (let index = 0; index < columns.length; index++) {
        expect(PositionValidator(`${element}${index + 1}`)).toBe(true)
      }
    })
  })
})
