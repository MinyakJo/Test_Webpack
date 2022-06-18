
const HtmlWebpackPlugin = require("html-webpack-plugin")

const config = {
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".scss", ".css", ".json", "jpg", "jpeg", "png", "gif"]
    },
    entry: {
        app: ["./src/index"]
    },
    output: {
        filename: "bundle.js",
        path: __dirname + "/public",
        publicPath: "public/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                loader: "babel-loader"
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|jpeg|gif|jpg)$/,
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html"
        })
    ],
    devServer: {
        static: {
            directory: __dirname + "/public"
        },
        port: 3000
    }
}

module.exports = config