const rewire = require('rewire');

module.exports = function execute(override) {

  const defaults = rewire('react-scripts/scripts/start.js');
  const webpackConfig = require('react-scripts/config/webpack.config');

  //In order to override the webpack configuration without ejecting the create-react-app
  defaults.__set__('configFactory', (webpackEnv) => {
    let config = webpackConfig(webpackEnv);

    //Override webpack configuration
    if (override && override.dev) {
      config = override.dev(config);
    }

    return config;
  });
}