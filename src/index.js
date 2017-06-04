var map = require('broccoli-stew').map;

/**
 * Utility that makes a given browser library complaint in FastBoot environment.
 */
module.exports = function(tree) {
  return map(tree, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);
}
