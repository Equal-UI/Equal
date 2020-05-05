// const ClosurePlugin = require('closure-webpack-plugin')

module.exports = {
  devServer: {
    disableHostCheck: true
  },
  // configureWebpack: {
  //   // devtool: 'source-map',
  //   plugins: [
  //     new ClosurePlugin(
  //       { mode: 'STANDARD' },
  //       {
  //         compilation_level: 'WHITESPACE_ONLY'
  //       }
  //     )
  //   ]
  // }

  // chainWebpack: config => {
  //   config.optimization.minimizer('terser').tap(args => {
  //     const { terserOptions } = args[0]
  //     terserOptions.keep_classnames = true
  //     terserOptions.keep_fnames = true
  //     return args
  //   })
  // }
}
