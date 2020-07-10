/* eslint-disable no-console */

const logger = {
  log: (name: string, ...args: Array<any>) => {
    if (__DEV__) {
      console.log(`%c START LOG - ${name}: `, 'background: green; color: #fff;')
      console.log(...args)
      console.log(`%c END LOG - ${name}`, 'background: green; color: #fff;')
    }
  },
  error: (name: string, ...args: Array<any>) => {
    if (__DEV__) {
      console.log(
        `%c START ERROR LOG - ${name}: `,
        'background: red; color: #fff;'
      )
      console.log(...args)
      console.log(`%c END ERROR LOG - ${name}`, 'background: red; color: #fff;')
    }
  },
}

export default logger
