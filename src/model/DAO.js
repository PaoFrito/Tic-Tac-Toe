const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/TTTdb', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;