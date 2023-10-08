import bcrypt from "bcrypt";
import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['id','name', 'email']
        });

        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const createUser = async (req, res) => {
    const { name, email, password, confPassword } = req.body;
    if (password !== confPassword) {
        return res.status(400).json({ message: "Password doesn't match" });
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        await User.create({
            name: name,
            email: email,
            password: hashedPassword,
        });
        res.json({ message: "User Created" });
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: "Email or Password is incorrect!" });
        }
        const userID = user.id;
        const name = user.name;
        const email = user.email;
        const accessToken = jwt.sign({ userID,name,email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '20s' }); 
        const refreshToken = jwt.sign({ userID,name,email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });

        await User.update({ refresh_token: refreshToken }, { where: { id: userID } });
        res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({ accessToken: accessToken });
    } catch (error) {
        res.status(404).json({ message: "Email or Password is incorrect!" });
    }
}

export const logoutUser = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.status(204).json({ message: "No content" });
    }
    const user = await User.findOne({ where: { refresh_token: refreshToken } });
    if (!user) {
        return res.status(204).json({ message: "No content" });
    }
    const userID = user.id;
    await User.update({ refresh_token: null }, { where: { id: userID } });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
};