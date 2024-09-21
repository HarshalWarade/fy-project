import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
const port = 7000

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
    if(err) {
        console.log(`There's an error in setup: ${err}`)
    } else {
        console.log(`Server running on http://localhost:${port}`)
    }
})