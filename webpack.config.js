const path=require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin  = require('html-webpack-plugin')
const isDev = process.env.NODE_EW === 'development'

//const ExtractPlugin=require('extract-text-webpack-plugin')

const webpack=require('webpack')


const config={
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname,'dist')
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new HTMLPlugin(),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_EW: isDev? '"development"':'"production"'
            }  
        })
    ],
    module: {
        //引入各种资源的加载规则
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
              
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },{
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name].[ext]'
                        }
                    }
                ]
            },

        ]
    }
    
}

if(isDev){
    config.module.rules.push({
        
            test: /\.styl/,
            use: [
                //lorder，类似java的classloader双亲委派机制
                'style-loader',
                'css-loader',{
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                    }
                },
                'stylus-loader'
            ]
        
    })
    //用于调试的时候可以看见
    config.devtool = '#cheap-module-eval-source-map'
    //如果是开发环境则加入以下参数
    config.devServer={
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            errors: true
        },
        //服务启动后自动打开浏览器
        open: true,
        //代码改变自动热部署
        hot: true
    }
    config.plugins.push(
        //代码改动自动热部署和自动刷新页面插件
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}else{
    
    config.output.filename='[name].[chunkhash:8].js'
    config.module.rules.push(
        {
            // test: /\.styl/,
            // use: ExtractPlugin.extract({
            //     fallback:  'style-loader',
            //     use:[
                    
            //             'css-loader',{
            //                 loader: 'postcss-loader',
            //                 options: {
            //                     sourceMap: true,
            //                 }
            //             },
            //             'stylus-loader'
                    
            //     ]
            // })


            test: /\.styl/,
            use: [
                //lorder，类似java的classloader双亲委派机制
                'style-loader',
                'css-loader',{
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                    }
                },
                'stylus-loader'
            ]
            
        } 
    )
    config.plugins.push(
        //new ExtractPlugin('style.[contentHash:8]'),
        
    )
}

//这里设置了整个打包的配置，前面已经定义到了config
module.exports  = config