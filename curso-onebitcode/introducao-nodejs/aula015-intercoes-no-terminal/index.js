/* process.stdout.write("Olá, mundo!\n")

process.stdin.on("data", (data) => {
    process.stdout.write(`Você digitou: ${data}`)
}) */

const readline = require("node:readline")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

/* rl.on("line", (input) => {
  rl.write(`Você digitou: "${input}"`)
}) */

/* rl.question("Qual é o seu nome?\n", (answer) => {
  rl.write(`Olá, ${answer}! \n `)
  rl.close()
}) */

rl.once("close", () => {
  rl.write("Saindo...");
  process.exit(0);
});

rl.on("SIGINT", () => {
  rl.question("Tem certeza que deseja encerrar a aplicação?", (answer) => {
    if (answer.trim().toLowerCase() === "s") {
      rl.write("Saindo...");
      process.exit(0);
    } else {
      rl.write("Você escolheu continuar.");
    }
  });
});