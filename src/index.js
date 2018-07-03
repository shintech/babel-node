import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import { promisify } from 'util'

let readFile = promisify(fs.readFile)

readFile(path.join(__dirname, '../package.json'), 'utf8')
  .then(data => {
    console.log(data)
    console.log(chalk.red('Success...'))
  })
