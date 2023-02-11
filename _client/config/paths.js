const path = require('path');

const projectRoot = path.join(__dirname, '../../');
const clientRoot = path.join(projectRoot, '_client');

module.exports = {
  projectRoot,
  docs: projectRoot,
  build: path.join(projectRoot, 'build'),
  site: path.join(projectRoot, '_site'),
  siteData: path.join(projectRoot, '_data'),

  components: path.join(clientRoot, 'src/components'),
  scss: path.join(clientRoot, 'src/scss'),
  js: path.join(clientRoot, 'src/js'),
  entries: path.join(clientRoot, 'entries'),

  jekyllSass: path.join(projectRoot, '_scss'),
  config: __dirname,
  // plugin: path.join(__dirname, '../../../'),
};
