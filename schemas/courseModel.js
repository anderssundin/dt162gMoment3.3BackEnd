const mongoose = require('mongoose');

// Schema
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code : {
        type: String,
        required: true
    },
    syllabus: {
        type: String,
        required: true
    },
    progression: {
        type: String
    },
    term: {
        type: String
    }
    

});

//model
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;