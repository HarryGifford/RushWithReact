//@ts-check
/** @type { import("path") } */
const path = require("path");

/** @type { import("webpack-plugin-serve") } */
const { WebpackPluginServe } = require("webpack-plugin-serve");

const isEnvDevelopment = process.env.NODE_ENV !== "production";
const isHttps = process.env.HTTPS === "true";

/** @type { import("webpack").Configuration } */
module.exports = {
    entry: {
        bundle: [
            "./src/index",
            isEnvDevelopment ? "webpack-plugin-serve/client" : undefined
        ].filter(x => x)
    },
    devtool: isEnvDevelopment ? "eval-source-map" : "source-map",
    devServer: {
        open: true,
        contentBase: ["static"],
        publicPath: "/",
        port: 3000,
        overlay: true,
        https: isHttps,
        watchContentBase: true
    },
    mode: isEnvDevelopment ? "development" : "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                include: /src/
            },
            {
                // Needed to load source maps for dependencies
                // including files in `app-component`.
                test: /\.jsx?$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx", ".json"]
    },
    output: {
        filename: "[name].js",
        chunkFilename: isEnvDevelopment ? "[id].js" : "[chunkhash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        hashDigestLength: 5
    },
    plugins: [
        isEnvDevelopment ? new WebpackPluginServe({
            host: "localhost",
            open: true,
            port: 3000,
            static: [
                path.resolve(__dirname, "static"),
                path.resolve(__dirname, "dist")
            ]
        }) : undefined
    ].filter(x => x),
    watch: isEnvDevelopment
};
