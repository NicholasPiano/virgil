
module.exports = {
  apps: [
    {
      name: 'virgil',
      script: 'serve',
      args: '-s /home/ubuntu/virgil/build',
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
