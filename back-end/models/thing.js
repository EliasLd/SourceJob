const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    jobName: { type: String, required: true },
    jobType: { type: String, required: true },
    jobDuration: {type: String, required: true},
    Company: {type: String, required: true},
    userId: {type: String, required: true},
    link: {type: String, required: false},
});

module.exports = mongoose.model('Thing', thingSchema);