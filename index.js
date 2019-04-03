const express = require('express')
const mongoose = require('mongoose');

const port = 3000
const app = express()
const db = mongoose.connection
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost/test'
mongoose.connect(mongoURL, { useNewUrlParser: true });

app.get('/', (req, res) => {
    res.send('💥 BOOM 💥')
})

app.listen(port, () => {
    db.on('error', console.error.bind(console, '💥 BOOM 💥'));
    db.once('open', () => {
        console.log('conexión exitosa')
        console.log(`Servidor corriendo en el puerto ${port} 😎`)
    })
})
