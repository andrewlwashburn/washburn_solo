import { connect } from 'mongoose'
import dotenv from 'dotenv'


dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI

export const dbConnect = () => {
    try{
        connect(MONGODB_URI, { dbName: 'pizzaApp' })
        console.log('Connected to MongoDB')
    }
    catch(error){
        console.log(`DB Connection failed: Error --> ${error}`)
    }
}