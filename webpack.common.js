const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.html$/,
            use: ["html-loader"],
        },
        {
            test: /\.(png|jpg|svg|jpeg|ico)$/,
            use: [{
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "images"
                }
            }]
        }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
}