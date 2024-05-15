/* import { createFile, deleteFile, showFile, updateFile } from "./functions.mjs"

createFile("Conteúdo inicial do arquivo, Criado com o módulo fs do Node.js")
showFile()
console.log("--------------")
updateFile("Conteúdo modificado...")
showFile()
console.log("--------------")
deleteFile() */

// Forma assíncrona com promisses
import { createFile, deleteFile, showFile, updateFile } from "./functions.mjs"

async function start() {
    await createFile("Conteúdo inicial do arquivo\nCriado com o módulo fs do Node.js")
    await showFile()
    console.log("--------------")
    await updateFile("Conteúdo modificado...")
    await showFile()
    console.log("--------------")
    await deleteFile()
}

start()