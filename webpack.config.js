const StatsReportPlugin = require("webpack-stats-report").StatsReportPlugin;

module.exports = {
    mode: "production",
    cache: true,
    target: ["web", "es5"],
    devtool: "source-map",
    output: {
        filename: "ie-polyfill.js",
        umdNamedDefine: true,
        library: "ie-polyfill",
        libraryTarget: "umd"
    },
    plugins: [new StatsReportPlugin({
        title: "Stats Report - ie-polyfill",
        output: ".temp/stats-report.html",
        outputStatsJson: true,
        generateMinifiedAndGzipSize: true
    })],
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                    babelrc: false
                }
            }
        }]
    }
};