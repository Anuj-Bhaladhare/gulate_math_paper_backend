const mongoose = require("mongoose");

const student_m1_Schema = new mongoose.Schema({
    name: {
        type: String,
        // require: true,
    },
    email: {
        type: String,
        // trim: true
    },
    mobile: {
        type: Number,
        // require: true
    },
    feesh: {
        type: String,
        // require: true,
        enum: ["Paid", "Pending", "Not Paid"]
    },
    amount: {
        type: Number,
        // require: true
    },
    subject: {
        type: String,
        // require: true,
        enum:["Mathamatics 1", "Mathamatics 2", "Mathamatics 3"]
    },
    mark: {
        type: Number,
        // trim: true
    },
    year: {
        type: String,
        enum:["1st Year", "2nd Year", "3rd Year", "4th Year"]
    },
    PassinsStatus: {
        type: String,
        enum: ["Pass", "Fail", "Not Appear"],
    },
    progresh: {
        type: String,
        enum: ["Good", "Poor", "Average", "Bad", "Not Appear"]
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

module.exports = mongoose.model("Student_m1", student_m1_Schema);