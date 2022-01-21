process.env.NODE_ENV='production';
const webpack = require('webpack');

const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webPackConfigProd = require('react-scripts/config/webpack.config')('production');

webPackConfigProd.plugins.push(new BundleAnalyzer())

webpack(webPackConfigProd,(err, stat)=>{
    if(err || stat.hasErrors()){
        console.error(err)
    }
});