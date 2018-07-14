export const logError = err => (process.env.NODE_ENV !== 'test') && console.error(err)

export default (ctx, inject) => {
  inject('logError', logError)
}
