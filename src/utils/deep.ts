class Deep {
  loop(target: any[], callback: Function, leave?: string) {
    for (let i = 0; i < target.length; i++) {
      let atLoop = target[i]
      let leaves = leave ? `${leave}-${i + 1}` : `${i + 1}`
      let ifLoop = callback(atLoop, leaves)
      if (ifLoop) this.loop(ifLoop, callback, leaves)
    }
    return target
  }
}

export default new Deep()
