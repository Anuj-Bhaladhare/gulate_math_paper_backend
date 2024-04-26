const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true    
    },
    mobile: {
        type: Number,
        require: true, 
    },
    engineering_year: {
        type: String,
        require: true,
        enum: ["1st Year", "2nd Year", "3rd Year", "4th Year"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("Student", studentSchema);