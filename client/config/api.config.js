const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
    baseUrl: isPro ? 'http:/hello.yixiaosir.top/api/' : 'api/'
}