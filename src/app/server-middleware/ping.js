const ping = JSON.stringify({ beep: 'boop' })

module.exports = (req, res) => res.end(ping)
