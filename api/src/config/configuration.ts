export default () => ({
  port: parseInt(process.env.PORT) || 3000,
  database: {
    uri: process.env.MONGODB_URI || 'mongodb://wolf:wolfpassword@localhost:27017/wolf'
  },
});
