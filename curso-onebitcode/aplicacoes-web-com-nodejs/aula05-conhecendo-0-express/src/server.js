const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Servidor Express funcionando\nVocê está na página inicial");
});

app.get("/artigos", (req, res) => {
    res.send("Você está na página de artigos.");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor Express iniciado em http://localhost:${PORT}/`);
});