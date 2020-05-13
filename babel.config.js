module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ]
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    
// [
//   "transform-runtime",
//   {
//     "helpers": false,
//     "polyfill": false,
//     "regenerator": true,
//     "moduleName": "babel-runtime"
//   }
// ]
  ]
}
