'use strict'

const fs = require('fs')
const moment = require('moment')
const arquivo = fs.readFileSync('./log.json', 'utf8')
const parser = JSON.parse(arquivo)

console.log('Lendo o arquivo...')

moment.locale('pt-br')
const chave = moment()
const valor = moment(chave).format('LLLL')

console.log('Gerando novo valor: ', valor)

parser.logs[chave] = valor

fs.unlinkSync('./log.json')

console.log('Apagando Arquivo Antigo.')

const stringToFile = JSON.stringify(parser)

fs.writeFileSync('./log.json', stringToFile, 'utf8')

console.log('Gerado novo arquivo de Log.')
console.log('(c)2017 - Estúdio Digital Bocca')
