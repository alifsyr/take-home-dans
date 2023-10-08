import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(401).json({ message: "User not authenticated!" });
        }
        const user = await User.findOne({ where: { refresh_token: refreshToken } });
        if (!user) {
            return res.status(403).json({ message: "User not authenticated!" });
        }
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: "Token is not valid!" });
            }
            const userID = user.userID;
            const name = user.name;
            const email = user.email;
            const accessToken = jwt.sign({ userID,name,email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
            res.json({ accessToken: accessToken });
        });
    } catch (error) {
        
    }
};