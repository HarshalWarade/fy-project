import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './utils/db.connection.js'

import userRoute from './routes/user.routes.js'
import companyRoute from './routes/company.routes.js'
import jobRoute from './routes/jobs.routes.js'
import applicationRoute from './routes/application.routes.js'

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

app.use("/api/v1/user", userRoute)
app.use("/api/v1/company", companyRoute)
app.use("/api/v1/job", jobRoute)
app.use("/api/v1/application", applicationRoute)


app.get('/', async (req, res) => {
    return res.status(200).json({msg: "everythings alright!"})
})

app.listen(port, (err) => {
    connectDB()
    if(err) {
        console.log(`There's adarn error in setup: ${err}`)
    } else {
        console.log(`Server running on http://localhost:${port}`)
    }
})