'use strict'

const fs = require('fs')
const moment = require('moment')
const chalk = require('chalk')
const jsonFormat = require('json-format')
const arquivo = fs.readFileSync('./log.json', 'utf8')
const parser = JSON.parse(arquivo)

console.log(chalk.yellow('Lendo o arquivo...'))

moment.locale('pt-br')
const chave = moment()
const valor = moment(chave).format('LLLL')

console.log(chalk.bold('Gerando novo valor: '), valor)

parser.logs[chave] = valor

fs.unlinkSync('./log.json')

console.log(chalk.red('Apagando Arquivo Antigo.'))

const stringToFile = jsonFormat(parser, { type: 'space', size: 2 })

fs.writeFileSync('./log.json', stringToFile, 'utf8')

console.log(chalk.green('Gerado novo arquivo de Log.'))
console.log(chalk.blue('(c)2018 - Estúdio Digital Bocca'))
