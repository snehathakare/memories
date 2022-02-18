import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js';

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json({ extended: true }))

app.use(cors)

app.use('/posts', postRoutes);

// Replace the following with your Atlas connection string                                                                                                                                        
const CONNECTION_URL = "mongodb+srv://snhthakare:sneha%40123@cluster0.ui0ub.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running successfully on port ${PORT}`)))
    .catch((err) => { console.log(err) })


