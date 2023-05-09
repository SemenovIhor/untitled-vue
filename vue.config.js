const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})




module.exports = {
  publicPath: '/untitled-vue/',
  
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Home Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
    },
    
  }


