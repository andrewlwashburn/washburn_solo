import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { dbConnect } from './config/config.mongoose.js'
import userRoutes from './routes/user.routes.js'
import cookieParser from 'cookie-parser'


const app = express()
app.use(express.json(), cors({origin: 'http://localhost:5173', credentials: true}))
app.use(cookieParser(process.env.SECRET_KEY))
app.use( '/api', userRoutes )
dotenv.config()
const PORT = process.env.PORT
dbConnect()


app.listen( PORT, () => console.log(`Server is running on port: ${PORT}`))