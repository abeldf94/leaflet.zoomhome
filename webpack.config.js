const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/js/leaflet.zoomhome.js',
    output: {
        filename: 'leaflet.zoomhome.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        "leaflet": "Leaflet",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};