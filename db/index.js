

const sequelize = require('../config/connection');

const startDb = async () => {
  await sequelize.sync({ force: true });

  process.exit(0);
};

startDb();