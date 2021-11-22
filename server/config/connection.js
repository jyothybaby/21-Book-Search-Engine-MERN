const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/booksdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// mongoose.connection.on('error', (err)=>{
//   console.error(err);
//   }
//   )

module.exports = mongoose.connection;
