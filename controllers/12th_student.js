const Student_12th = require("../modals/12th_student");

exports.getAllStudent_12th = async (req, res) => {
    try{
        const students = await Student_12th.find();
        if(students){
            return res.status(200).json({
                success: true,
                massage: "Students get successfully",
                data: students
            })
        } else {
            return res.status(400).json({
                success: false,
                massage: "Students not found"
            })
        }

    } catch (err) {
        return res.status(500).json({
            success: false,
            massage: "Something went wrong",
            error: err?.message
        })
    }
}

exports.getByIdStudent_12th = async (req, res) => {
    try{
        const { _id } = req.params;

        const student_12th = await Student_12th.findById(_id);

        if(student_12th){
            return res.status(200).json({
                success: true,
                massage: "Student get successfully",
                data: student_12th
            })
        } else {
            return res.status(400).json({
                success: false,
                massage: "Student not found"
            })
        }
    } catch (err) {
        return res.status(500).json({
            success: false,
            massage: "Something went wrong",
            error: err?.message
        })
    }
}

exports.addStudent_12th = async (req, res) => {  
    try{
        const { name, email, mobile, mark, PassingStatus, collegeName, city, state } = req.body;
        if(!name || !email || !mobile || !mark || !PassingStatus || !collegeName || !city || !state){
            return res.status(400).json({
                success: false,
                massage: "All fields are required"
            })
        }

        const existingUser = await Student_12th.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success: false,
                massage: "User already exist"
            })
        }

        const user = await Student_12th.create({
            name, email, mobile, mark, PassingStatus, collegeName, city, state
        })

        return res.status(200).json({
            success: true,
            massage: "Student add successfully",
            data: user?.name
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            massage: "Something went wrong",
            error: error
        })
    }
}

exports.updateStudent_12th = async (req, res) => {
    try{
        const { _id } = req.params;
        const { name, email, mobile, mark, PassingStatus, collegeName, city, state } = req.body;

        if(!_id){
            return res.status(400).json({
                success: false,
                massage: "All fields are required"
            })
        }
 
        if(!name || !email || !mobile || !mark || !PassingStatus || !collegeName || !city || !state){
            return res.status(400).json({
                success: false,
                massage: "All fields are required"
            })
        }

        const existingStudent = await Student_12th.findOne({ _id });
        if(existingStudent){
            existingStudent.name = name;
            existingStudent.email = email;
            existingStudent.mobile = mobile;
            existingStudent.mark = mark;
            existingStudent.PassingStatus = PassingStatus;
            existingStudent.collegeName = collegeName;
            existingStudent.city = city;
            existingStudent.state = state;

            await existingStudent.save();

            return res.status(200).json({
                success: true,
                massage: "Student updated successfully",
                data: existingStudent?.name
            })
        } else {
            return res.status(400).json({
                success: false,
                massage: "Student not found"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            massage: "Something went wrong",
            error: err?.message
        })
    }
}

exports.deleteStudent_12th = async (req, res) => {
    try{
        const { _id } = req.params;

        const deleteStudent = await Student_12th.findByIdAndDelete({ _id });
        if(deleteStudent){
            return res.status(200).json({
                success: true,
                massage: "Student deleted successfully",
                data: deleteStudent?.name
            })
        } else {
            return res.status(400).json({
                success: false,
                massage: "Student not found"
            })
        }
    } catch (err) {
        return res.status(500).json({
            success: false,
            massage: "Something went wrong",
            error: err?.message
        })
    }
}