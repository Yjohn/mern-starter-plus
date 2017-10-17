const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    name: String
});

const Article = mongoose.model('User', schema);

module.exports = Article;