const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const helpers = require('./webpack-config/helpers');

module.exports = function (env, argv) {
    const entry = {
        polyfills: './resources/assets/js/polyfills.ts',
        main: './resources/assets/js/main.ts'
    };

    return {
        devtool: 'inline-source-map',

        entry: entry,

        output: {
            path: helpers.root('public/build'),
            publicPath: 'build/',
            filename: '[name].js',
            sourceMapFilename: '[name].map',
        },

        resolve: {
            extensions: ['.ts', '.js'],
            alias: {
                assets: helpers.root('resources/assets')
            }
        },

        module: {
            rules: [
                {
                    test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                    use: ['@ngtools/webpack']
                },

                /**
                 * To string and css loader support for *.css files (from Angular components)
                 * Returns file content as string
                 */
                {
                    test: /\.css$/,
                    use: ['to-string-loader', 'css-loader'],
                    exclude: [helpers.root('src', 'styles')]
                },

                /**
                 * Raw loader support for *.html
                 * Returns file content as string
                 */
                {
                    test: /\.html$/,
                    use: 'raw-loader'
                },

                /**
                 * File loader for supporting images, for example, in CSS files.
                 */
                {
                    test: /\.(jpg|png|gif)$/,
                    use: 'file-loader'
                },
            ]
        },

        plugins: [
            new AngularCompilerPlugin({
                tsConfigPath: 'tsconfig.json',
                mainPath: entry.main,
                sourceMap: true
            }),

            /**
             * Copies project static assets.
             */
            new CopyWebpackPlugin(
                [
                    {from: 'resources/assets/styles/semantic/dist'}
                ],
                {}
            ),
        ]
    };
};
