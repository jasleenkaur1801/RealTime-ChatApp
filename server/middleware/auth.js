import User from "../models/User";
import jwt from "jsonwebtoken";

//middleware to protect routes
export const protectRoute = async (res,res,next)=>{
    try {
        const token = req.headers.token;
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findById(decoded.userId).select("-password");
        
        if(!user) return res.json({success: false, message: "User not found"});
        req.user = user;
        next();
    } catch (error) {
        console.log(error.message);
        res.json({success: false,message: error.message});
    }
}

//controller to check if user is authenticated
export const checkAuth = (res,res)=>{
    res.json({success: true,user: req.user});
}