const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir)  //path.join(__dirname)设置绝对路径
}

module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, 'src/css/global.less')]
        }
    },
    devServer: {
        host: 'localhost',
        port: 8000,
        open: true, //配置自动启动浏览器  http://172.11.11.22:8888/rest/XX/ 
        hotOnly: true, // 热更新
    },
    chainWebpack: (config) => {
        config.resolve.alias // 添加别名
            .set('src', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('css', resolve('src/css'))

    }
}
