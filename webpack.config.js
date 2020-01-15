const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = { 
    entry: './index.js', 
    output: { 
        path: __dirname + '/dist', 
        publicPath: '', 
        filename: 'bundle.js' 
    }, 
    devServer: { 
        contentBase: './dist', 
    }, 
    module: { 
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: ['babel-loader'] 
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
            },
            {    
                test: /\.less$/, 
                use: [ 
                    'style-loader', 
                    'css-loader',
                    'less-loader'
                ] 
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                  }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            svgo : false 
                        }
                    }
                ],
            }      
        ] 
    }, 
    plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
    ]
};