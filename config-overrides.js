const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')
const rewireSass = require('./rewired/addSassLoader')
const path = require('path')

module.exports = function override (config, env) {
  console.log(config.resolve.modules)
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], config)

  config = rewireLess.withLoaderOptions({
    modifyVars: { '@primary-color': '#1DA57A' }
  })(config, env)

  config = rewireSass.withLoaderOptions({})(config, env)

  config.resolve.modules.push(path.join(__dirname, 'src'))

  return config
}
