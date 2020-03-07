import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

if (!process.env.DB_CONNECTION) {
  console.log('DB_CONNECTION ENV VARIABLE NOT FOUND')
  process.exit(1)
}

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  () => {
    console.log('Connected to the Database.')
  }
)

export default mongoose
