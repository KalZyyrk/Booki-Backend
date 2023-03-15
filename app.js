const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')
const port = 3000
const lodgingRouter = require('./routes/lodgingRoute')
const activitiesRouter = require('./routes/activitiesRoute')

app.use(cors())

app.use(express.json())

app.use('/api/lodging', lodgingRouter);
app.use('/api/activities', activitiesRouter);

mongoose
    .set('strictQuery', true)
    .connect('mongodb+srv://Ulysse:Chicore@cluster0.a4azepj.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        app.listen(port, () => {
            console.log(`App is running on port ${port}`);
        })
    })
    .catch(error => console.log("Connexion echouée", error))