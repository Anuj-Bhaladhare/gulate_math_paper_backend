// import User from "../modals/user";

// exports.getUserDetails = async (req, res) => {
//     try{
//         const { email } = req.body;

//         const existingUser = await User.findOne({email});

//         if(existingUser){
//             return res.status(200).json({
//                 success: true,
//                 massage: "user get success fully...",
//                 user: existingUser
//             })
//         } else {
//             return res.status(404).json({
//                 success: false,
//                 massage: "User not exist"
//             })
//         }
//     } catch (err) {
//         return res.status(500).json({
//             success: false,
//             massage: "user not found"
//         })
//     }
// }

// exports.getUser = (req, res) => {
//     try{
//         console.log("ew", req, res);
//     } catch (error) {
//         console.log("erree", error)
//     }
// }