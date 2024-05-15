const fs = require("node:fs");

const filename = "./arquivo.xt"

const exists = fs.existsSync(filename);

if (exists) {
    fs.readFile("./arquivo.txt", "utf-8", (error, data) => {
        if (error) {
            console.log("Erro ao ler o arquivo: ", error.message);
        }
        console.log(data);
    });
} else {
    console.log("O arquivo não existe!");
}



// Forma síncrona
/* try {
    const data = fs.readFileSync("./arquivo.txt", "utf-8");
    console.log(data);
} catch (error) {
    console.log("Erro ao ler o arquivo: ", erro.message);
} */