module.exports = {
  apps: [
    {
      name: "casamento-front",
      script: "serve",
      instances: "2",
      autorestart: true,
      env: {
        PM2_SERVE_PATH: "build",
        PM2_SERVE_PORT: 5173,
        PM2_SERVE_SPA: "true"
      }
    }
  ]
};