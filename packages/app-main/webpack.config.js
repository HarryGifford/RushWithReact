//@ts-check
/** @type { import("path") } */
const path = require("path");

const isEnvDevelopment = process.env.NODE_ENV !== "production";
const isHttps = process.env.HTTPS === "true";

/** @type { import("webpack").Configuration } */
module.exports = {
    entry: {
        bundle: "./src/index.tsx"
    },
    devtool: isEnvDevelopment ? "eval-source-map" : "source-map",
    devServer: {
        open: true,
        contentBase: ["dist", "static"],
        publicPath: "dist",
        port: 3000,
        overlay: true,
        https: isHttps
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
        chunkFilename: "[chunkhash].js",
        path: path.resolve(__dirname, "dist"),
        hashDigestLength: 5
    }
};
