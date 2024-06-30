const express = require('express')
const gamesControler = require('./controllers/games-controler');
const app = express()

app.use(express.json())

app.post("/", (req, res) => {
    res.json({ "message": "Hello, world!" })
});

app.get("/games", gamesControler.index)
app.get("/games/:id", gamesControler.show)

app.post("/games", gamesControler.save)
app.post('/games/:id/genres', gamesControler.addGenre)

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}/`))