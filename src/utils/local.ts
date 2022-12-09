interface loactOpions {
  time: number
  [key: string]: any
}

const loacl = {
  set(key: string, optinon: loactOpions): void {
    if (optinon.time) {
      optinon.time = +new Date() + optinon.time * 1000
    }
    localStorage.setItem(key, JSON.stringify(optinon))
  },
  get(key: string): loactOpions | null {
    let option = localStorage.getItem(key)
    if (option) {
      const data = JSON.parse(option)
      const time = data?.time
      if (time < +new Date()) {
        localStorage.removeItem(key)

        return null
      }

      return data
    }

    return null
  },
}

export default loacl
