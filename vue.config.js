const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir)  //path.join(__dirname)设置绝对路径
}

module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, 'css/global.less')]
        }
    }
}
