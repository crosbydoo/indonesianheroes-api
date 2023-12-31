const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

module.exports = {



    //Login User
    loginUser: async (req, res) => {
        try{
            const user = await User.findOne({email: req.body.email});
            !user && res.status(401).json("Wrong login details");

            const decryptedpass = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
            const depassword = decryptedpass.toString(CryptoJS.enc.Utf8);

            //check equal password
            depassword !== req.body.password && res.status(401).json("Wrong Password");

            // jwt token
            const userToken = jwt.sign({
                id: user._id, isAdmin: user.isAdmin,
            }, process.env.JWT_SECRET,
                { expiresIn: "21d" });

            //exclude to prevent this sendback to user
            const { password, __v, createdAt, ...others } = user._doc;

            res.status(200).json({...others, userToken});
        }catch (error){
            res.status(500)
        }
    }
    
}