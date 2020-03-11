module.exports = {
  apps : [{
    name   : "meat-api",
    script : "./dist/main.js",
    instances: 0,
    exec_mode: "cluster",
    watch: true,
    env: {
      SERVER_PORT: 5000,
      DB_URL: 'mongodb+srv://admin:admin123@cluster0-gke9r.mongodb.net/meatapi?retryWrites=true&w=majority',
      NODE_ENV: "development",
    },
    env_production: {
      SERVER_PORT: 5001,
      NODE_ENV: "production",
    }
  }]
}
