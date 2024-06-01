const readline = require("node:readline"); // importação feita apenas para o vscode dar sugestões para process
const args = process.argv;

const namedArguments = {};

process.argv.slice(2).forEach((arg, index, array) => {
    if(arg.startsWith("--")) {
        const argName = arg.slice(2);
        const argValue = array[index + 1];
        namedArguments[argName] = argValue; 
    }
});

console.log(namedArguments);
console.log(args);

