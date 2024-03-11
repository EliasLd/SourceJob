const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    jobName: { type: String, required: true },
    jobType: { type: String, required: true },
    jobDuration: {type: String, required: true},
    Company: {type: String, required: true},
});

module.exports = mongoose.model('Thing', thingSchema);