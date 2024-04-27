const Student_m2 = require("../modals/student_m2");

exports.addStudent_M2 = async (req, res) => {
    try{
        const { name, email, mobile, feesh, amount, subject, mark, year, PassinsStatus, progresh } = req.body;

        if(!name || !email || !mobile || !feesh || !amount || !subject || !mark || !year || !PassinsStatus || !progresh){
            return res.status(400).json({
                success: false,
                massage: "All fields are required"
            })
        }

        const existingUser = await Student_m2.findOne({email});
        if(existingUser){
            return res.status(409).json({
                success: false,
                massage: "User Already Exist"
            })
        }

        const student = await Student_m2.create({
            name, 
            email,
            mobile,
            feesh,
            amount,
            subject,
            mark,
            year,
            PassinsStatus,
            progresh
        })

        return res.status(200).json({
            success: true,
            massage: "user created successfully",
            data: student
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            massage: "Student Not Added",
            error: err?.message
        })
    }
}

exports.getAllStudent_M2 = async (req, res) => {
    try{
        const students = await Student_m2.find();
        return res.status(200).json({
            success: true,
            massage: "Students get successfully",
            data: students
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            massage: "Student's Not Find"
        })
    }       
}

exports.getStudent_M2 = async (req, res) => {
    try{
        const { _id } = req.params;
        if(!_id){
            return res.status(400).json({
                success: false,
                massage: "All fields are required"
            })
        }

        const student = await Student_m2.findById(_id);

        return res.status(200).json({
            success: true,
            massage: "Student get successfully",
            data: student
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            massage: "Student Not Find"
        })
    }       
}

exports.updateStudent_M2 = async (req, res) => {
    try {
        const { _id } = req.params;
        const { name, email, mobile, feesh, amount, subject, mark, year, PassinsStatus, progresh } = req.body;

        if(!_id){
            return res.status(400).json({
                success: false,
                massage: "All fields are required"
            })
        }
        
        if (!name || !email || !mobile || !feesh || !amount || !subject || !mark || !year || !PassinsStatus || !progresh) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Find the existing user by email
        let existingUser = await Student_m2.findOne({ _id });

        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Update the user fields
        existingUser.name = name;
        existingUser.mobile = mobile;
        existingUser.feesh = feesh;
        existingUser.amount = amount;
        existingUser.subject = subject;
        existingUser.mark = mark;
        existingUser.year = year;
        existingUser.PassinsStatus = PassinsStatus;
        existingUser.progresh = progresh;

        // Save the updated user
        await existingUser.save();

        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: existingUser // Optional: Return the updated user data
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

exports.deleteStudent_M2 = async (req, res) => {
    try {
        const { _id } = req.params;

        if (!_id) {
            return res.status(400).json({
                success: false,
                message: "Email is required"
            });
        }

        // Find and delete the user by email
        const deletedUser = await Student_m2.findOneAndDelete({ _id });

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: deletedUser // Optional: Return the deleted user data
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};



// ================ Backlog Student Controller =================
exports.getAllBacklogStudent_M2 = async (req, res) => {
    try {
        // Find students where PassinsStatus is 'Fail'
        const back_student = await Student_m2.find({ PassinsStatus: 'Fail' });

        return res.status(200).json({
            success: true,
            message: "Backlog students fetched successfully",
            data: back_student
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

exports.getBacklogStudent_M2 = async (req, res) => {
    try{
        const { _id } = req.params;
        if(!_id){
            return res.status(400).json({
                success: false,
                massage: "All fields are required"
            })
        }

        const student = await Student_m2.findById(_id);
        if(student){
            return res.status(200).json({
                success: true,
                massage: "Student get successfully",
                data: student
            })
        } else {
            return res.status(400).json({
                success: false,
                massage: "Student Not Find"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            massage: "Student's Not Find"
        })
    }
}

exports.updateBacklogStudent_M2 = async (req, res) => {
    try {
        const { _id } = req.params;
        const { name, email, mobile, feesh, amount, subject, mark, year, PassinsStatus, progresh } = req.body;

        if(!_id){
            return res.status(400).json({
                success: false,
                massage: "All fields are required"
            })
        }

        if (!name || !email || !mobile || !feesh || !amount || !subject || !mark || !year || !PassinsStatus || !progresh) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Find the existing user by email
        let existingUser = await Student_m2.findOne({ _id });

        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Update the user fields
        existingUser.name = name;
        existingUser.mobile = mobile;
        existingUser.feesh = feesh;
        existingUser.amount = amount;
        existingUser.subject = subject;
        existingUser.mark = mark;
        existingUser.year = year;
        existingUser.PassinsStatus = PassinsStatus;
        existingUser.progresh = progresh;

        // Save the updated user
        await existingUser.save();

        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: existingUser // Optional: Return the updated user data
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

exports.deleteBacklogStudent_M2 = async (req, res) => {
    try {
        const { _id } = req.params;

        if (!_id) {
            return res.status(400).json({
                success: false,
                message: "Email is required"
            });
        }

        // Find and delete the user by email
        const deletedUser = await Student_m2.findOneAndDelete({ _id });

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: deletedUser // Optional: Return the deleted user data
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}