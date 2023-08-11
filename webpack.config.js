const path = require('path');

module.exports = {
  entry: './script/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
