import { flags } from '@oclif/command'

import { CustomCommand } from '../../lib/CustomCommand'

export default class Hello extends CustomCommand {
  static description = 'Say hello'

  static examples = [
    `cli say hello`,
    `cli say hello --name="tiago"`,
    `cli say hello -n tiago`,
    `cli say hello --force --file asdf.txt`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args, flags } = this.parse(Hello)

    const name = flags.name || 'world'
    this.log(`hello ${name} from  ${__dirname}`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
