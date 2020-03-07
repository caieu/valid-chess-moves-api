import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
import MoveModel, { Move } from '../models/Move'

describe('Move model', () => {
  beforeAll(async () => {
    dotenv.config()
    const TEST_DB_CONNECTION: string = process.env.TEST_DB_CONNECTION ? process.env.TEST_DB_CONNECTION : ''
    it('should have a env variable DB_CONNECTION', () => {
      expect(process.env.DB_CONNECTION).toBeDefined()
      expect(TEST_DB_CONNECTION).toBeDefined()
    })
    await mongoose.connect(TEST_DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  })

  it('Should throw validation errors', async () => {
    const move = await new MoveModel()
    expect(move.validate).toThrow()
  })

  it('Should save a Move', async () => {
    const move: Move = await new MoveModel({
      piece: 'knight',
      turns: 1,
      position: 'A',
      positions: ['B3', 'C2']
    })
    const spy = jest.spyOn(move, 'save')
    await move.save()
    expect(spy).toHaveBeenCalled()
    expect(move).toMatchObject({
      turns: expect.any(Number),
      position: expect.any(String),
      positions: expect.any(Array)
    })

    expect(move.positions.length).toBe(2)
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })
})
