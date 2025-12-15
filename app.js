import chalk from "chalk"
import { log } from "node:console"
import classeTeacher from "./modules/functions.js"
import classeTutor from "./modules/functions2.js"
import classeCompagno from "./modules/functions3.js"

console.log(chalk.red("Hello ") + chalk.bgGreen("Bool") + chalk.bgBlack("World"))
const data = new Date()
const nomeAutore = "David"
console.log(`Ciao ${nomeAutore}\n il tuo ultimo Refresh è avvenuto alle ${data}`);
classeTeacher(150, "Olga", "teacher")
classeTutor(150, "Loris", "tutor")
classeTutor(150, "Samuel", "tutor")
classeCompagno(150, "Matteo", "Bootstrap-Lover-Friend")
classeCompagno(150, "Gabriele", "Uomo-Domande")
classeCompagno(150, "Antimo", "Occhiale-Magico-user")
