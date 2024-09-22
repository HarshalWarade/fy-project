import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './utils/db.connection.js'

dotenv.config({path: 'config.env'})

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
const corsOption = {
    origin: 'http://localhost:5173',
    credentials: true
}

app.use(cors(corsOption))

app.get('/', async (req, res) => {
    return res.status(200).json({msg: "everythings alright!"})
})

app.listen(port, (err) => {
    connectDB()
    if(err) {
        console.log(`There's an error in setup: ${err}`)
    } else {
        console.log(`Server running on http://localhost:${port}`)
    }
})