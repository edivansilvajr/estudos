const express = require("express");
const app = express();
const path = require("node:path");
const router = require("./routes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor express iniciado em http://localhost:${PORT}/`);
});