import { flags } from '@oclif/command'
import chalk from 'chalk'

import { CustomCommand } from '../../lib/CustomCommand'

export default class Repeat extends CustomCommand {
  static description = 'Repeat each word you say'

  static examples = [`cli repeat hello world`, `cli repeat hello there`, `cli repeat hello`]

  static flags = {
    bold: flags.boolean({ char: 'b' }),
  }
  static strict = false
  static args = [
    { name: 'firstWord', required: true },
    { name: 'ithWord', required: false },
  ]

  static usage = 'say repeat FIRSTWORD [SECONDWORD] [THIRDWORD] ...'

  async run() {
    const { raw, flags } = this.parse(Repeat)
    const allArgs = flags.bold ? this.getAllArgs(raw).map(arg => chalk.bold(arg)) : this.getAllArgs(raw)

    this.log(allArgs.join('\n'))
  }
}
