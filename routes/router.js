const express = require("express");
const router = express.Router();

const {login, signup, getUserDetails} = require("./../controllers/auth");
const {isAdmin, auth} = require("../middlewares/auth");
// const { getUserDetails } = require("../controllers/get_user");

router.post("/login", login);
router.post("/signup", signup);
router.get("/getuser/:email", getUserDetails);

router.get("/admin", auth, isAdmin, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Admin',
    });
});

module.exports = router;