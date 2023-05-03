const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})




  // module.exports = {
  //   pages: {
  //     index: {
  //       entry: 'src/index/main.js',
  //       template: 'public/index.html',
  //       filename: 'index.html',
  //       title: 'HomePage',
  //       chunks: ['chunk-vendors', 'chunk-common', 'index']
  //       },
  //     about: {
  //       entry: 'src/index/main.js',
  //       template: 'public/index.html',
  //       filename: 'index.html',
  //       title: 'ApartmentPage',
  //       chunks: ['chunk-vendors', 'chunk-common', 'index']
  //       }
  //     }
  //   }

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/untitled-vue/'
//     : '/'
// }

