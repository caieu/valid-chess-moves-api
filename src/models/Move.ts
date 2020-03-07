import { Schema, Document } from 'mongoose'
import mongoose from '../database'

export interface Move extends Document {
    turns: number,
    position: string,
    positions: string[]
}

const MoveSchema:Schema = new Schema({
  piece: { type: String, required: true },
  turns: { type: Number, required: true },
  position: { type: String, required: true },
  positions: { type: Array, required: true }
})

export default mongoose.model<Move>('Move', MoveSchema)
