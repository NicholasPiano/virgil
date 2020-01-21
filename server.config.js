
module.exports = {
  apps: [
    {
      name: 'virgil',
      script: './node_modules/react-scripts/scripts/start.js',
      instances: 0,
      exec_mode: 'cluster',
      watch: true,
      log_file: './combined.log',
      env: {
        NODE_ENV: 'production',
        PORT: '5555'
      }
    }
  ]
};
