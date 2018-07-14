const log = (msg, type = 'log') => {
  if (!(type in console)) type = 'log'
  if (process.env.NODE_ENV !== 'test') console[type](msg)
}

module.exports = {
  error: msg => log(msg, 'error'),
  log: msg => log(msg, 'log'),
  info: msg => log(msg, 'info'),
  warn: msg => log(msg, 'warn')
}
