const mongoose = require("mongoose");

const student_m2_Schema = new mongoose.Schema({
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
    feesh: {
        type: String,
        require: true,
        enum: ["Paid", "Pending", "Unpaid"]
    },
    amount: {
        type: Number,
        require: true
    },
    subject: {
        type: String,
        require: true,
        enum:["Mathmatics 1", "Mathmatics 2", "Mathmatics 3"]
    },
    mark: {
        type: Number,
        trim: true
    },
    year: {
        type: String,
        enum:["1st Year", "2nd Year", "3rd Year"]
    },
    PassinsStatus: {
        type: String,
        enum: ["Pass", "Fail"],
    },
    progresh: {
        type: String,
        enum: ["Good", "Poore", "Bad"]
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

module.exports = mongoose.model("Student_m2", student_m2_Schema);