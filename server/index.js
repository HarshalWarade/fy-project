const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config({ path: 'config.env' })
const app = express()
const port = process.env.PORT || 7000
const authRouter = require('./router/auth.route')
const corsOption = {
    origin: 'http://localhost:5173',
    methods: "GET, PUT, POST, DELETE, PATCH, HEAD",
    credentials: true
}

app.use(cors(corsOption))

app.use(express.json())

app.use("/api/auth", authRouter)
app.get('/', async (req, res) => {
    return res.status(200).json({msg: "this is an okay msg!", cond: "This is some condition"})
})
app.listen(port, (err) => {
    if(err) { console.log(`error occured at port init!`) }
    else { console.log(`server is running on port: http://localhost:${port}`) }
})