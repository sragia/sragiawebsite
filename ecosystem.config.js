module.exports = {
  apps: [
    {
      name: 'prod',
      script: 'serve -s build',
      watch: '.',
    },
  ],
};
