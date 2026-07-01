import { input } from "./utils/input.utils.js";

async function main() {
  const name = await input("What is your name? ");
  const age = Number(await input("What is your age? "));
  return `Hello, ${name}! You are ${age} years old.`;
}

console.log(await main());
