import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
const port = process.env.PORT || 5000;
// import custom middleware
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
// import routes
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/db.js';

// connect to the database
connectDB()
// initiate app 
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

app.use('/api/users', userRoutes)
app.get('/', (req, res) => res.send('Server Is Ready'))


app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server Started On Port: ${port}`))