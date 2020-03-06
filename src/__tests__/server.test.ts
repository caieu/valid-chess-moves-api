import supertest from 'supertest'
import app from '../app'
import { Server } from 'http'

describe('Server', () => {
  let server: Server
  let request: supertest.SuperTest<supertest.Test>
  beforeAll(() => {
    it('should have a env variable PORT', () => {
      expect(process.env.PORT).toBeDefined()
    })
    server = app.listen(process.env.PORT)
    request = supertest(server)
  })
  it('should return a status code 200', () => {
    request.get('validMoves/knight').send('turns=2&position=A1').expect(200)
  })
  it('should return a status code 400', () => {
    request.get('validMoves/knight').send('turns=2&position=A9').expect(400)
    request.get('validMoves/knight').send('turns=0&position=A2').expect(400)
    request.get('validMoves/knight').send('turns=2').expect(400)
    request.get('validMoves/knight').send('position=A2').expect(400)
  })
  it('should return a ValideMovesResponse object', () => {
    request.get('validMoves/knight').send('turns=2&position=A1').expect({ positions: ['A1', 'C1', 'D2', 'A5', 'C5', 'D4', 'E1', 'A3', 'B4', 'E3'] })
  })
  afterAll(async () => {
    server.close()
  })
})
