const { buildEngine } = require('ember-engines/lib/engine-addon');

module.exports = buildEngine({
  name: require('./package').name,
  lazyLoading: {
    enabled: false,
  },

  setupPreprocessorRegistry(type, registry) {
    registry.add('htmlbars-ast-plugin', {
      name: 'do-nothing-template-compiler',
      ext: 'hbs',
      plugin: () => {
        return templateCompiler();
      },
      baseDir() {
        return __dirname;
      },
    });
  },
});

function templateCompiler() {
  return {
    name: 'do-nothing-template-compiler',
    visitor: {
      ElementNode() {},
    },
  };
}
