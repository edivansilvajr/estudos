const express = require("express");
const app = express();
const path = require("node:path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
    const title = "Homepage";
    const message = "Mensagem dinâmica inserida pelo EJS";

    res.render("index", { title, message });
});

const PORT = 3000;

app.listen(PORT, () => console.log("Servidor iniciado!"));