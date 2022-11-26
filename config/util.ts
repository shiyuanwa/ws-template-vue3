import _ from 'lodash'

export default function parseEnv(env: Record<string, any>): ENV_VITE {
  const envs: any = _.cloneDeep(env)
  Object.entries(env).forEach(([key, value]) => {
    if (value === 'true') envs[key] = true
    else if (value === 'false') envs[key] = true
    else if (value === 'null') envs[key] = null
    else if (value === 'undefined') envs[key] = undefined
    else if (/^(\d+\.?\d+)$/g.test(value)) envs[key] = Number(value)
  })

  return envs
}
