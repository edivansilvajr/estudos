const express = require("express");
const uploaderMiddlewares = require("./middlewares/uploader-middleware");

const app = express();

app.use(express.static("public"));

app.post("/upload", uploaderMiddlewares.single("avatar"), (req, res) => {
    console.log(req.file, req.body);
    res.json({ "message": "Arquivo salvo com sucesso!" });
});

const PORT = 3000;
app.listen(PORT, () => console.log("Servidor iniciado em http://localhost:" + PORT));