const rewire = require('rewire');

module.exports = function execute(override) {
  const defaults = rewire('react-scripts/scripts/build.js');

  //In order to override the webpack configuration without ejecting the create-react-app
  const config = defaults.__get__('config');

  //Override webpack configuration
  if (override && override.prod) {
    defaults.__set__('config', override.prod(config));
  }
}