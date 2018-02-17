module.exports = require('babel-jest').createTransformer({
  presets: ['env', 'react', 'stage-3'],
  plugins: [
    'transform-class-properties',
    'babel-plugin-dynamic-import-node',
  ],
});
