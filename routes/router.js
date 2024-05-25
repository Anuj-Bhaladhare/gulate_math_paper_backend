const express = require("express");
const router = express.Router();

// Auth
const {login, signup} = require("./../controllers/auth");
const {isAdmin, auth} = require("../middlewares/auth");

// user
const { getUserLoginDetails } = require("../controllers/user");

// Student
const { addStudent_M1, getAllStudent_M1, getStudent_M1, updateStudent_M1, deleteStudent_M1, getAllBacklogStudent_M1, getBacklogStudent_M1, updateBacklogStudent_M1, deleteBacklogStudent_M1 } = require("../controllers/student_m1");
const { addStudent_M2, getAllStudent_M2, getStudent_M2, updateStudent_M2, deleteStudent_M2, getAllBacklogStudent_M2, getBacklogStudent_M2, updateBacklogStudent_M2, deleteBacklogStudent_M2 } = require("../controllers/student_m2");
const { addStudent_M3, getAllStudent_M3, getStudent_M3, updateStudent_M3, deleteStudent_M3, getAllBacklogStudent_M3, getBacklogStudent_M3, updateBacklogStudent_M3, deleteBacklogStudent_M3 } = require("../controllers/student_m3");

// 12th Student
const { addStudent_12th, getAllStudent_12th, getByIdStudent_12th, updateStudent_12th, deleteStudent_12th } = require("../controllers/12th_student");

// User Routes
router.get("/getuser/:email", getUserLoginDetails);
router.post("/login", login);
router.post("/signup", signup);

// Student Routes
// ========= M1 ========
router.post("/add_m1_student", addStudent_M1);
router.get("/get_all_m1_student", getAllStudent_M1);
router.get("/get_m1_student/:_id", getStudent_M1);
router.put("/update_m1_student/:_id", updateStudent_M1);
router.delete("/delete_m1_student/:_id", deleteStudent_M1);
// ========= M2 ========
router.post("/add_m2_student", addStudent_M2);
router.get("/get_all_m2_student", getAllStudent_M2);
router.get("/get_m2_student/:_id", getStudent_M2);
router.put("/update_m2_student/:_id", updateStudent_M2);
router.delete("/delete_m2_student/:_id", deleteStudent_M2);
// ========= M3 ========
router.post("/add_m3_student", addStudent_M3);
router.get("/get_all_m3_student", getAllStudent_M3);
router.get("/get_m3_student/:_id", getStudent_M3);
router.put("/update_m3_student/:_id", updateStudent_M3);
router.delete("/delete_m3_student/:_id", deleteStudent_M3);

// BackLogs Routes
// ========= M1 ========
router.get("/get_all_m1_backstudent", getAllBacklogStudent_M1);
router.get("/get_m1_backstudent/:_id", getBacklogStudent_M1);
router.put("/update_m1_backstudent/:_id", updateBacklogStudent_M1);
router.delete("/delete_m1_backstudent/:_id", deleteBacklogStudent_M1);
// ========= M2 ========
router.get("/get_all_m2_backstudent", getAllBacklogStudent_M2);
router.get("/get_m2_backstudent/:_id", getBacklogStudent_M2);
router.put("/update_m2_backstudent/:_id", updateBacklogStudent_M2);
router.delete("/delete_m2_backstudent/:_id", deleteBacklogStudent_M2);
// ========= M3 ========
router.get("/get_all_m3_backstudent", getAllBacklogStudent_M3);
router.get("/get_m3_backstudent/:_id", getBacklogStudent_M3);
router.put("/update_m3_backstudent/:_id", updateBacklogStudent_M3);
router.delete("/delete_m3_backstudent/:_id", deleteBacklogStudent_M3);

// 12th Student Routes
router.post("/add_12th_student", addStudent_12th);
router.get("/get_all_12th_student", getAllStudent_12th);
router.get("/get_12th_student/:_id", getByIdStudent_12th);
router.put("/update_12th_student/:_id", updateStudent_12th);
router.delete("/delete_12th_student/:_id", deleteStudent_12th);

router.get("/admin", auth, isAdmin, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Admin',
    });
});

module.exports = router;