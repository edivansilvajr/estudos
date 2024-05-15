// Forma assíncrona
/* import fs from "node:fs";

export function createFile(text) {
    fs.writeFile("meuarquivo.txt", text, "utf-8", (error) => {
        if (error) {
            console.log("Erro ao escrever o arquivo: ", error.message);
            return;
        } else {
            console.log("Arquivo criado com sucesso!");
        }
    });
}

export function showFile() {
    fs.readFile("meuarquivo.txt", (error, text) => {
        if (error) {
            console.log("Erro ao ler o arquivo: ", error.message);
        } else {
            console.log(text);
        }
    });
}

export function updateFile(newText) {
    fs.writeFile("meuarquivo.txt", newText, "utf-8", (error) => {
        if (error) {
            console.log("Erro ao modificar o arquivo: ", error.message);
            return;
        } else {
            console.log("Arquivo atualizado com sucesso!");
        }
    });
}

export function deleteFile() {
    fs.unlink("./meuarquivo.txt", (error) => {
        if(error) {
            console.log("Erro ao excluir o arquivo: ", error.message);
        } else {
            console.log("Arquivo excluído com sucesso!");
        }
    });
} */

// Forma síncrona
/* import fs from 'node:fs'

export function createFile(text) {
  fs.writeFileSync('meuarquivo.txt', text, "utf-8");
}

export function updateFile(text) {
  fs.writeFileSync('meuarquivo.txt', text, "utf-8");
}

export function showFile() {
  try {
    const content = fs.readFileSync('meuarquivo.txt', 'utf-8')
    console.log(content)
  } catch (error) {
    console.error('Erro ao ler o arquivo: ', error.message)
  }
}

export function deleteFile() {
  try {
    fs.unlinkSync('meuarquivo.txt')
    console.log('Arquivo excluído com sucesso!')
  } catch (error) {
    console.error('Erro ao excluir o arquivo: ', error.message)
  }
} */

// Forma assíncrona, utilizando promisses
import fs from "node:fs"

export function createFile(text) {
    return new Promise((resolve, reject) => {
        fs.writeFile("meuarquivo.txt", text, (error) => {
            if (error) {
                reject("Erro ao escrever arquivo: ", error.message)
            } else {
                resolve()
            }
        })
    })
}

export function showFile() {
    return new Promise((resolve, reject) => {
        fs.readFile("meuarquivo.txt", "utf-8", (error, text) => {
            if (error) {
                reject("Erro ao ler arquivo: ", error.message)
            } else {
                console.log(text)
                resolve()
            }
        })
    })
}

export function updateFile(newText) {
    return new Promise((resolve, reject) => {
        fs.writeFile("meuarquivo.txt", newText, (error) => {
            if (error) {
                reject("Erro ao modificar arquivo: ", error.message)
            } else {
                resolve()
            }
        })
    })
}

export function deleteFile() {
    return new Promise((resolve, reject) => {
        fs.unlink("meuarquivo.txt", (error) => {
            if (error) {
                console.log("Erro ao excluir o arquivo: ", error.message)
                resolve()
            } else {
                console.log("Arquivo excluído com sucesso!")
                resolve()
            }
        })
    })
}