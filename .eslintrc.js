module.exports = {
    'extends': 'airbnb-base',
    'globals': {
      require: true,
      URL: true,
      Blob: true,
      document: true,
      window: true,
      '$': true,
      requestAnimationFrame: true,
      navigator: true,
      RdIntegration: true,
      FileReader: true,
      Conpass: true,
    },
    'rules': {
      'no-underscore-dangle': 0,
      'max-len': ['error', {
        code: 150
      }],
      'class-methods-use-this': 0,
      'import/prefer-default-export': 0,
      'global-require': 0,
      'prefer-const': ['warn', {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }],
      'comma-dangle': ['warn', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      }],
      'camelcase': 0,
      'arrow-body-style': ['warn', 'as-needed'],
      'object-shorthand': ['warn', 'always'],
      'no-multiple-empty-lines': ['error', {
        'max': 1,
        'maxEOF': 0,
      }],
      'no-param-reassign': ['warn', {
        'props': true,
        'ignorePropertyModificationsFor': ['$window', '$rootScope', 'blockUIConfig']
      }]
    }
};
