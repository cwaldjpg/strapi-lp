module.exports = {
  apps: [
    {
      name: 'shaire-lp-nextjs',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'dev',
      },
    },
  ],
  deploy: {
    development: {
      user: 'ec2-user',
      host: '18.178.160.41',
      key: '~/.ssh/config',
      ref: 'origin/develop',
      repo: 'git@bitbucket.org:hidesignsJP/shaire-lp-nextjs.git',
      path: '/home/ec2-user/shaire-lp-nextjs',
      'pre-setup': 'rm -rf ~/shaire-lp-nextjs/source',
      'post-setup': 'cp ~/shaire-lp-nextjs/source/.env.dev ~/shaire-lp-nextjs/source/.env',
      'post-deploy': 'npm i && npm run build && pm2 startOrRestart ecosystem.config.js',
    },
  },
};
