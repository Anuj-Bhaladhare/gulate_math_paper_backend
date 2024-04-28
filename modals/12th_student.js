const mongoose = require("mongoose");

const student_12th_m1_Schema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        trim: true
    },
    mobile: {
        type: Number,
        require: true
    },
    mark: {
        type: Number,
        trim: true
    },
    PassingStatus: {
        type: String,
        enum: ["Pass", "Fail"],
    },
    collegeName: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Student_12th", student_12th_m1_Schema);