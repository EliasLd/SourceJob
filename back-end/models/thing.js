const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    title: { type: String, required: true },
    Type: { type: String, required: true },
    Duration: {type: String, required: true},
    Company: {type: String, required: true},
    userID: {type: String, required: true},
});

module.exports = mongoose.model('Thing', thingSchema);