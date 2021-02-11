module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      rules: [
        {
          test: /\.ya?ml$/,
          type: 'json',
          use: 'yaml-loader'
        }
      ]
    });
    return config;
  }
}
