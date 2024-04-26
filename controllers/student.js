const Student = require("./../modals/student");

exports.addStudentDetails = async (req, res) => {
    try{
        // const res = await 
    } catch (error) {
        return res.status(404).json({
            massage: "error getting by the adding data",
            success:false,
        })
    }
}

exports.getStudentDetails = async (res, req) => {
    try{
        console.log("adding data of student ");
    } catch (error) {
        return res.status(404).json({
            massage: "error getting by the adding data",
            success:false,
        })
    }
}