import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

//initialise express
const app = express()

//connect to DataBase
await connectDB()

//middlewares
app.use(cors())

//routes
app.get('/', (req,res)=> res.send("API WORKING"))
app.post('/clerk', express.raw({ type: 'application/json' }), clerkWebhooks)


//Port
const PORT = process.env.PORT || 5001

app.listen(PORT, ()=>{
    console.log(`SERVER LAUFT AM PORT ${PORT}`)
})