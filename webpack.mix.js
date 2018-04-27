const mix = require('laravel-mix');
const webpack = require('webpack');
const path = require('path');

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".ts"]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /(.+)?angular([\\/])core(.+)?/,
            path.join(__dirname, 'resources/assets/js')
        ),
    ]
});

mix.js('resources/assets/js/main.ts', 'public/build/js').sourceMaps().version();
mix.js('resources/assets/js/polyfills.ts', 'public/build/js').sourceMaps().version();
