module.exports = {
  database: {
    url: process.env.DATABASE_URL,
    database: process.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  },
};
