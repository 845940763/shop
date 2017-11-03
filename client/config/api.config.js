const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
    baseUrl: isPro ? 'http:/cyx.saigsf.com/api/' : 'api/'
}
