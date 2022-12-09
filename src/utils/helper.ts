import parseEnv from '../../config/util'

class Helper {
  public env = {} as ImportMetaEnv

  constructor() {
    this.env = this.getEnvs()
  }

  private getEnvs(): ImportMetaEnv {
    let envs: any = []
    envs = parseEnv(import.meta.env)

    return envs
  }
}

const helper = new Helper()
const env = helper.env

export default helper
export { env }
