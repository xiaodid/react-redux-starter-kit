const { injectBabelPlugin, paths } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')
const rewireSass = require('./rewired/addSassLoader')
const path = require('path')
const webpack = require('webpack')

const vendors = [
  'react',
  'redux',
  'react-redux',
  'react-router-dom',
  'history']

module.exports = function override (config, env) {
  // set up antd
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], config)
  config = rewireLess.withLoaderOptions({
    modifyVars: { '@primary-color': '#1DA57A' }
  })(config, env)

  // add scss loader
  config = rewireSass.withLoaderOptions({})(config, env)

  config.resolve.modules.push(path.join(__dirname, 'src'))

  if (process.env.NODE_ENV !== 'development') {
    // set up common chunk
    // modify entry
    if (Array.isArray(config.entry)) {
      config.entry = {
        main: config.entry,
        vendor: vendors
      }
    } else {
      config.entry.vendor = vendors
    }

    // add common chunk
    config.plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor']
      })
    )
  }

  return config
}
