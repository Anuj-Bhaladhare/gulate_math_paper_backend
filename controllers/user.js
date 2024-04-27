const User = require("./../modals/user");

exports.getUserLoginDetails = async (req, res) => {
    try{
        const { email } = req.params;

        const existingUser = await User.findOne({email});

        const data = {
            firstName: existingUser?.firstName,
            lastName: existingUser?.lastName,
            email: existingUser?.email,
            role: existingUser?.role,
            createdAt: existingUser?.createdAt,
            updatedAt: existingUser?.updatedAt,
        }

        if(existingUser){
            return res.status(200).json({
                success: true,
                massage: "user get success fully...",
                user: data
            })
        } else {
            return res.status(404).json({
                success: false,
                massage: "User not exist"
            })
        }
    } catch (err) {
        return res.status(500).json({
            success: false,
            massage: "user not found"
        })
    }
}