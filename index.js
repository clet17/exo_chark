import chalk from "chalk";
import http from 'http';
import fs from 'fs';
import axios from 'axios';

console.log(chalk.blue('Maxime'));
console.log(chalk.green('Coralie'));
console.log(chalk.red('Lucie'));
console.log(chalk.yellow('Galys'));

const PORT = 3000
const localhost = 'localhost'



const server = http.createServer((request, response) => {
    response.end("<h1>Hello world</h1>")
})

server.listen(PORT, localhost, () => {
    console.log(`Server is running on port ${PORT}`)
})

fs.writeFileSync('test.txt', 'Je test un fichier')

const fichier = fs.readFileSync('test.txt', 'utf8')
console.log(fichier)

axios.get('http://www.google.com/')
.then(response => {
    fs.writeFileSync('donnee_google.html', response.data)

    const google = fs.readFileSync('donnee_google.html', 'utf8')
    console.log(google)
})

