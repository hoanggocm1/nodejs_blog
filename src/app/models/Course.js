const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    image: { type: String, default: '' },
    slug: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
