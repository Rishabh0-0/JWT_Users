const mongoose = require('mongoose');
const app = require('./app');

require('dotenv').config();

const DB = process.env.DATABASE_URL.replace(
  '<db_password>',
  process.env.API_KEY
);

mongoose
  .connect(DB)
  .then(console.log('Succesfully connected to mongoDB ..'))
  .catch((err) => console.error(err));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
