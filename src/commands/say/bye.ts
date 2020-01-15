import { CustomCommand } from '../../lib/CustomCommand'

export default class Bye extends CustomCommand {
  static description = 'Say bye'

  static examples = [`cli say bye`]

  static flags = {}
  static args = []

  async run() {
    this.log(`bye from ${__dirname}`)
  }
}
